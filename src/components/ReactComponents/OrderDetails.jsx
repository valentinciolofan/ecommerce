import React from 'react'

const OrderDetails = ({ onDetailsFilled }) => {
    
    return (
        <>
            <p className="title-delivery-details">DELIVERY DETAILS</p>
            <div className="form-delivery-details">
                <input type="text" name="name" placeholder="NAME*" required />
                <input type="text" name="surname" placeholder="SURNAME/S*" required />
                <input type="text" name="address" placeholder="ADDRESS*" required />
                <input type="text" name="additionalInfo" placeholder="ADDITIONAL INFORMATION*" />
                <input type="text" name="cityTown" placeholder="CITY/TOWN*" required />
                <input type="text" name="postcode" placeholder="POSTCODE*" required />
                <input type="text" name="region" placeholder="REGION*" required />

                <p className="contact-delivery-details">CONTACT INFORMATION</p>
                <small>We will use it to update the status of your delivery</small>

                <input type="text" name="phone" placeholder="PHONE*" required />

                <button
                        type="button"
                        className="btn-shipping-continue"
                        onClick={() => onDetailsFilled(true)}
                        // disabled={(deliveryMethod === 'store' && !storeSelected) || (deliveryMethod === 'home' && !detailsFilled)}
                    >
                        CONTINUE
                    </button>
            </div>
           
        </>
    );


}

export default OrderDetails;