import React, { useState, useEffect } from "react";
import SearchBar from "./ReactComponents/Searchbar";
import '../components/ReactComponents/products.css'

const OrdersManagement = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const data = await fetch("http://localhost:3000/orders");
            const retrievedOrders = await data.json();
            setOrders(retrievedOrders);
            console.log(retrievedOrders);
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
                    <input type="text" className="orders-search" placeholder="Search for an order"></input>
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
                            orders.map((order, index) => (
                                <tr key={order.id} className={index % 2 === 0 ? '' : 'table-row1'}>
                                <td>{order.receiver}</td>
                                <td>{order.receipt}</td>
                                <td>{order.order_date.slice(0, 10)}</td>
                                <td className="order-status">
                                    <select value={order.status}>
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