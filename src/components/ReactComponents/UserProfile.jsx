import React, { useState } from 'react';
import { useStore } from '@nanostores/react';
import { userSession } from '../UserContext';
import './products.css'; // Assuming you save your styles in a file named profile.css

const UserProfile = () => {
    const profileInfo = useStore(userSession);
    const [activeSection, setActiveSection] = useState('profileInformation');
    const [editableFields, setEditableFields] = useState({});
    const [editMode, setEditMode] = useState({});
    const [error, setError] = useState(null);

    const handleButtonClick = (button) => {
        setActiveSection(button);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditableFields({
            ...editableFields,
            [name]: value,
        });
    };

    const handleEditClick = (field) => {
        setEditMode({
            ...editMode,
            [field]: !editMode[field],
        });
    };

    const handleSaveClick = async (field) => {
        const updatedInfo = {
            [field]: editableFields[field] || profileInfo[field],
        };

        try {
            const response = await fetch('http://localhost:3000/update-profile', {
                method: 'PATCH',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedInfo),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Server responded with status ${response.status}: ${errorData.error}`);
            }

            const data = await response.json();
            setEditMode({
                ...editMode,
                [field]: false,
            });
            setError(null);
        } catch (error) {
            console.error('Error updating profile:', error);
            setError(`Failed to update profile: ${error.message}`);
        }
    };

    const renderEditableField = (label, name, type = 'text') => {
        const value = editableFields[name] ?? profileInfo?.[name] ?? '';
        return (
            <div className="input-with-icon">
                <label htmlFor={`profile-user-${name}`}>{label}</label>
                <div className="input-container">
                    <input
                        type={type}
                        name={name}
                        value={value}
                        readOnly={!editMode[name]}
                        onChange={handleInputChange}
                    />
                    <svg
                        onClick={() => handleEditClick(name)}
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 512 512"
                    >
                        <path fill="black" d="m362.7 19.3l-48.4 48.4l130 130l48.4-48.4c25-25 25-65.5 0-90.5l-39.4-39.5c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2c-2.5 8.5-.2 17.6 6 23.8s15.3 8.5 23.7 6.1L151 475.7c14.1-4.2 27-11.8 37.4-22.2l233.3-233.2z"></path>
                    </svg>
                    {editMode[name] && (
                        <button onClick={() => handleSaveClick(name)}>Save</button>
                    )}
                </div>
            </div>
        );
    };

    if (!profileInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-container">
            <h2>Profile</h2>
            <div className="profile-wrapper">
                <div className="profile-info left-col">
                    <button
                        className={`profile-button ${activeSection === 'profileInformation' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('profileInformation')}
                    >
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32">
                                <path fill="black" d="M16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7m10 28h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z"></path>
                            </svg>
                        </span>
                        <span>My account</span>
                    </button>
                    <button
                        className={`profile-button ${activeSection === 'profileOrders' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('profileOrders')}
                    >
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                <g fill="none" stroke="black" strokeWidth="2">
                                    <rect width="14" height="17" x="5" y="4" rx="2" />
                                    <path strokeLinecap="round" d="M9 9h6m-6 4h6m-6 4h4" />
                                </g>
                            </svg>
                        </span>
                        <span>My orders</span>
                    </button>
                    <button
                        className={`profile-button ${activeSection === 'profileWishlist' ? 'active' : ''}`}
                        onClick={() => handleButtonClick('profileWishlist')}
                    >
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"></path>
                            </svg>
                        </span>
                        <span>My Wishlist</span>
                    </button>
                </div>
                <div className="profile-info right-col">
                    {activeSection === 'profileInformation' && (
                        <div className="profile-personal-information">
                            <h4>Personal Information</h4>
                            {error && <p className="error">{error}</p>}
                            {renderEditableField('Name', 'name')}
                            {renderEditableField('Birth Date', 'birthdate', 'date')}
                            {renderEditableField('Phone', 'phone')}
                            <p>Delivery Address</p>
                            {renderEditableField('County', 'county')}
                            {renderEditableField('City', 'city')}
                            {renderEditableField('Address', 'address')}
                        </div>
                    )}
                    {activeSection === 'profileOrders' && (
                        <div>
                            <h1>My Orders</h1>
                            <table className="orders-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Order Date</th>
                            <th className="order-status">Status</th>
                            <th>Receipt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           profileInfo.orders.map((order, index) => (
                                <tr key={order.order_id} className={index % 2 === 0 ? '' : 'table-row1'}>
                                    <td>#{order.order_id}</td>
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
                                    <td><a href={order.receipt_url}>View receipt</a></td>
                                </tr>
                            )

                            )
                        }
                    </tbody>
                </table>
                        </div>
                    )}
                    {activeSection === 'profileWishlist' && (
                        <div>
                            <h1>My Wishlist</h1>
                            {profileInfo.wishlist.map(favoriteProduct => <li>
                                {favoriteProduct}
                            </li>)}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
