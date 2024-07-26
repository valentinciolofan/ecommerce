import SearchBar from "./ReactComponents/Searchbar";
import '../components/ReactComponents/products.css'

const OrdersManagement = () => {
    return (
        <div className="orders-container">
            <div className="orders-container-first-col"> 
                <h4>Orders Management</h4>
            </div>
            <hr className="order-div"></hr>
            <div className="orders-container-second-col">
                <input type="search" className="orders-search"></input>
                <table className="orders-table">
                <thead>
                    <tr>
                        <th>Name</th><th>Order ID</th>
                        <th>Order Date</th>
                        <th className="order-status">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Andrei Neagoie</td>
                        <td>#123812931298</td>
                        <td>25.05.2002</td>
                        <td className="order-status">
                            <select>
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
                </tbody>
            </table>
            </div>
            
        </div>

    );
}

export default OrdersManagement;