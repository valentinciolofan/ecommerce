import React, { useState, useEffect } from "react";
import '../components/ReactComponents/mystyle.css'

const OrdersManagement = () => {
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);

    const handleOrdersSearch = (e) => {
        const searchInput = e.target.value.toLowerCase();
        console.log(searchInput);
        console.log(filteredOrders);
        if (filteredOrders.length) {
            const newData = orders.filter(order => {
                if (order !== null && order !== undefined) {
                    return order.receiver.toLowerCase().includes(searchInput) ||
                        order.order_status.toLowerCase().includes(searchInput) ||
                        order.order_date.toLowerCase().includes(searchInput) ||
                        order.id.toString().includes(searchInput);
                }
            })
            setFilteredOrders(newData);
        } else {
            setFilteredOrders(orders);
        }
    }
    const handleOrderStatus = (event, index) => {
        const newStatus = event.target.value;
        const orderId = orders[index].id;

        console.log(newStatus, orderId);
        const apiUrl = import.meta.env.PUBLIC_API_URL;

        fetch(`${apiUrl}/api/orders/${orderId}/status`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: newStatus }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(() => {
                setOrders(prevOrders => {
                    const updatedOrders = [...prevOrders];
                    updatedOrders[index].order_status = newStatus; // Ensure this matches the property name in the API
                    setFilteredOrders(updatedOrders); // Sync filtered orders as well
                    return updatedOrders;
                });
            })
            .catch(error => console.error('Error updating order status:', error));
    };

    useEffect(() => {
        const getOrders = async () => {
            const apiUrl = import.meta.env.PUBLIC_API_URL;

            const data = await fetch(`${apiUrl}/orders`);
            const retrievedOrders = await data.json();
            setOrders(retrievedOrders);
            setFilteredOrders(retrievedOrders);
        }
        getOrders();
    }, [])
    return (
        <div className="orders-container">
            <div className="orders-container-first-col">
                <h4>Orders Management</h4>
            </div>
            <hr className="order-div"></hr>
            <div className="orders-container-second-col">
                <div className="orders-search-container">
                    <input type="text" className="orders-search" placeholder="Search for an order" onChange={handleOrdersSearch}></input>
                    <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="none" stroke="silver" strokeLinecap="round" strokeLinejoin="round" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"></path></svg>
                </div>
                <table className="orders-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Order ID</th>
                            <th>Order Date</th>
                            <th className="order-status">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredOrders.map((order, index) => (
                                <tr key={order.id} className={index % 2 === 0 ? '' : 'table-row1'}>
                                    <td>{order.receiver}</td>
                                    <td>{order.id}</td>
                                    <td>{order.order_date.slice(0, 10)}</td>
                                    <td className="order-status">
                                        <select value={order.order_status} onChange={(e) => handleOrderStatus(e, index)}>
                                            <option>
                                                Pending
                                            </option>
                                            <option>
                                                In progress
                                            </option>
                                            <option>
                                                Delivered
                                            </option>
                                        </select>
                                    </td>
                                </tr>
                            )

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OrdersManagement;