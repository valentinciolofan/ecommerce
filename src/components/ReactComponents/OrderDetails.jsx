import React from 'react'

const OrderDetails = ({ onDetailsFilled, collectOrderInfo }) => {
    

    return (
        <>
            <p className="title-delivery-details">DELIVERY DETAILS</p>
            <div className="form-delivery-details">
                <input type="text" name="name" placeholder="NAME*" onChange={collectOrderInfo} required/>
                <input type="text" name="surname" placeholder="SURNAME/S*" onChange={collectOrderInfo} required />
                <input type="text" name="address" placeholder="ADDRESS*" onChange={collectOrderInfo} required />
                <input type="text" name="additionalInfo" placeholder="ADDITIONAL INFORMATION*" onChange={collectOrderInfo}/>
                <input type="text" name="city" placeholder="CITY/TOWN*" onChange={collectOrderInfo} required />
                <input type="text" name="postcode" placeholder="POSTCODE*" onChange={collectOrderInfo} required />
                <input type="text" name="region" placeholder="REGION*" onChange={collectOrderInfo} required />

                <p className="contact-delivery-details">CONTACT INFORMATION</p>
                <small>We will use it to update the status of your delivery</small>

                <input type="text" name="email" placeholder="EMAIL*" onChange={collectOrderInfo} required />
                <input type="text" name="phone" placeholder="PHONE*" onChange={collectOrderInfo} required />

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