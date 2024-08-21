import React, { useEffect, useState } from 'react';
import OrderDetails from './OrderDetails';
import { useStore } from "@nanostores/react";
import { cartStore } from '../UserContext';
import Payment from '../Payment';
import "./products.css";


const storeAddresses = [
    '123 Fashion Ave, New York, NY 10001',
    '456 Style St, Los Angeles, CA 90001',
    '789 Trend Blvd, Miami, FL 33101',
    '321 Chic Dr, Dallas, TX 75201',
    '654 Couture Ln, Chicago, IL 60601',
    '987 Glamour Rd, San Francisco, CA 94101',
    '246 Vogue Pl, Seattle, WA 98101',
    '135 Elegance Ave, Boston, MA 02101',
    '753 Style Pkwy, Houston, TX 77001',
    '864 Trendy Way, Atlanta, GA 30301',
];

const ShippingProducts = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [deliveryMethod, setDeliveryMethod] = useState('');
    const [storeSelected, setStoreSelected] = useState(false);
    const [detailsFilled, setDetailsFilled] = useState(false);
    const [orderInfo, setOrderInfo] = useState({});
    const [loading, setLoading] = useState(false);
    const cartItems = useStore(cartStore);
   
    console.log(orderInfo);


    useEffect(() => {
        const savedOrderInfo = localStorage.getItem('orderInfo');
        if (savedOrderInfo) {
            const parsedOrderInfo = JSON.parse(savedOrderInfo);
            setOrderInfo(parsedOrderInfo);
        }
    }, []);

    useEffect(() => {
        if (Object.keys(orderInfo).length !== 0) {
            localStorage.setItem('orderInfo', JSON.stringify(orderInfo));
        }
    }, [orderInfo]);

    const handleDeliverySelection = (method) => {
        setDeliveryMethod(method);
        setStoreSelected(false);
        setDetailsFilled(false);

        if (method === 'home') {
            setOrderInfo(previousOrderInfo => ({
                ...previousOrderInfo,
                delivery_method: 'Courier'
            }))
        } else if (method === 'store') {
            setOrderInfo(previousOrderInfo => ({
                ...previousOrderInfo,
                delivery_method: 'Pick-up in store'
            }))
        }
       
    };

    const handleSelectStore = (storeNr) => {
        setStoreSelected(storeNr);
        orderInfo.address = `${storeAddresses[storeNr - 1]}`
    };

    const handleDetailsFilled = (isFilled) => {
        setDetailsFilled(isFilled);
    };

    const collectOrderInfo = (e) => {
        const event = e.target;
        const inputType = e.target.attributes[1].value;
        const inputValue = e.target.value;

        if (event !== null) {
            switch (inputType) {
                case 'name': orderInfo.name = inputValue;
                    break;
                case 'surname': orderInfo.surname = inputValue;
                    break;
                case 'address': orderInfo.address = inputValue;
                    break;
                case 'additionalInfo': orderInfo.additionalInfo = inputValue;
                    break;
                case 'city': orderInfo.city = inputValue;
                    break;
                case 'postcode': orderInfo.postcode = inputValue;
                    break;
                case 'region': orderInfo.region = inputValue;
                    break;
                case 'email': orderInfo.email = inputValue;
                    break;
                case 'phone': orderInfo.phone = inputValue;
                    break;
            }
        }
    };
// step 1
/*
deliveryMethod -> store / home
store -> false / 1-10 -> details -> setcurrentstep2
home -> details _> set current step 2



step 2

step 3


*/
const handleBack = () => {
    const resetState = () => {
        setCurrentStep(0);
        setDetailsFilled(false);
    };

    const resetDeliveryMethod = () => {
        setDeliveryMethod('');
    };

    if (deliveryMethod === 'home') {
        if (detailsFilled) {
            resetState();
            setDeliveryMethod('home');
        } else {
            resetDeliveryMethod();
        }
    }

    if (deliveryMethod === 'store') {
        if (!storeSelected) {
            resetDeliveryMethod();
        } else if (storeSelected > 0) {
            setDeliveryMethod('store');
            setStoreSelected(false);
        }

        if (detailsFilled && currentStep === 1) {
            resetState();
            setDeliveryMethod('store');
            setStoreSelected(1);
        }
    }
};


    useEffect(() => {
        const query = new URLSearchParams(window.location.search);
        const sessionId = query.get('session_id');
        
        if (sessionId !== null) {
            const checkPaymentStatus = async () => {
                const response = await fetch(`http://localhost:3000/check-payment-status/${sessionId}`);
                const result = await response.json();
                if (result.status === 'paid') {
                    setCurrentStep(2);

                    handlePayment();
                    localStorage.removeItem('cart');
                }
            };
            checkPaymentStatus();
        }

        if (detailsFilled && deliveryMethod === 'home') {
            setCurrentStep(1);
        } else if (storeSelected && deliveryMethod === 'store' && detailsFilled) {
            setStoreSelected(false);
            setCurrentStep(1);
        }
        setOrderInfo(prevOrderInfo => ({
            ...prevOrderInfo,
            items: cartItems.items,
            total: cartItems.total
        }));

        if (currentStep === 2 && orderInfo.orderId === undefined) {
            setLoading(true);
        }
    }, [detailsFilled, deliveryMethod, storeSelected, cartItems]);

    const orderDetails = async (data) => {
        await fetch('http://localhost:3000/generate-receipt', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json())
        .then(response => {
            setOrderInfo(prevOrderInfo => ({
                ...prevOrderInfo,
                orderId: response.id
            }))
            setLoading(false);
        });
    };
    const handlePayment = () => {
        orderDetails(orderInfo);
    };
    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <div className="shipping-products-container">
            <div className='shipping-products-wrapper'>
                <div className='hg-bread'>
                    <div className={`hg-bread-col ${currentStep === 0 ? 'active' : ''}`}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16 0H0V16H16V0ZM8.863 4.96027H8.323C7.99 5.21227 7.405 5.39227 7 5.42827V6.06727C7.288 6.05827 7.729 5.98627 8.089 5.86927V11.2783H8.863V4.96027Z" fill="black"></path>
                        </svg>
                        <p>DELIVERY</p>
                    </div>
                    <div className={`hg-bread-col ${currentStep === 1 ? 'active' : ''}`}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16 0H0V16H16V0ZM10.641 10.354H8.8815C8.159 10.354 7.4535 10.3625 7.19 10.371C9.706 8.74753 10.3605 8.09303 10.3605 6.86903C10.3605 5.77253 9.57 4.93103 8.329 4.93103C7.02 4.93103 6.2465 5.80653 6.1615 6.98803L6.884 7.05603C6.9435 6.14653 7.445 5.59403 8.312 5.59403C9.1875 5.59403 9.6125 6.18903 9.6125 6.88603C9.6125 7.88053 8.992 8.40753 6.204 10.3115V11H10.641V10.354Z" fill="black"></path>
                        </svg>
                        <p>PAYMENT</p>
                    </div>
                    <div className={`hg-bread-col ${currentStep === 2 ? 'active' : ''}`}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16 0H0V16H16V0ZM10.7175 9.27453C10.7175 8.44153 10.216 7.97403 9.54448 7.78703C10.182 7.56603 10.4625 7.04753 10.4625 6.52053C10.4625 5.47503 9.55298 4.93103 8.54148 4.93103C7.25798 4.93103 6.55248 5.67053 6.39098 6.60553L7.08798 6.75853C7.19848 6.05303 7.64048 5.56853 8.53298 5.56853C9.18748 5.56853 9.72298 5.90003 9.72298 6.56303C9.72298 7.03053 9.35748 7.50653 8.45648 7.50653C8.10798 7.50653 7.76798 7.49803 7.39398 7.48103V8.12703C7.76798 8.11003 8.10798 8.10153 8.41398 8.10153C9.14498 8.10153 9.96948 8.41603 9.96948 9.24053C9.96948 9.94603 9.44248 10.4645 8.48198 10.4645C7.49598 10.4645 6.96048 9.88653 6.88398 9.03653L6.16998 9.13003C6.26348 10.218 7.07948 11.102 8.49048 11.102C9.81648 11.102 10.7175 10.3625 10.7175 9.27453Z" fill="black"></path>
                        </svg>
                        <p>SUMMARY</p>
                    </div>
                </div>

                {currentStep === 0 && deliveryMethod === '' && (
                    <div>
                        <p className='checkout-delivery-title'>SELECT DELIVERY METHOD</p>
                        <div className="select-delivery">
                            <div className='select-delivery-option' onClick={() => handleDeliverySelection('store')}>
                                <p className="delivery-method-title">Pick-up in store</p>
                            </div>
                            <div className='select-delivery-option' onClick={() => handleDeliverySelection('home')}>
                                <p className="delivery-method-title">Home delivery</p>
                            </div>
                        </div>
                    </div>
                )}

                {currentStep === 0 && deliveryMethod === 'store' && storeSelected === false && (
                    <div className="select-delivery">
                        <svg onClick={handleBack} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
                            <path fill="black" d="m3.828 9l6.071-6.071l-1.414-1.414L0 10l.707.707l7.778 7.778l1.414-1.414L3.828 11H20V9z"></path>
                        </svg>
                        <p>Choose a store:</p>
                        <div className='select-delivery-option' onClick={() => handleSelectStore(1)}>123 Fashion Ave, New York, NY 10001</div>
                        <div className='select-delivery-option' onClick={() => handleSelectStore(2)}>456 Style St, Los Angeles, CA 90001</div>
                        <div className='select-delivery-option' onClick={() => handleSelectStore(3)}>789 Trend Blvd, Miami, FL 33101</div>
                        <div className='select-delivery-option' onClick={() => handleSelectStore(4)}>321 Chic Dr, Dallas, TX 75201</div>
                        <div className='select-delivery-option' onClick={() => handleSelectStore(5)}>654 Couture Ln, Chicago, IL 60601</div>
                        <div className='select-delivery-option' onClick={() => handleSelectStore(6)}>987 Glamour Rd, San Francisco, CA 94101</div>
                        <div className='select-delivery-option' onClick={() => handleSelectStore(7)}>246 Vogue Pl, Seattle, WA 98101</div>
                        <div className='select-delivery-option' onClick={() => handleSelectStore(8)}>135 Elegance Ave, Boston, MA 02101</div>
                        <div className='select-delivery-option' onClick={() => handleSelectStore(9)}>753 Style Pkwy, Houston, TX 77001</div>
                        <div className='select-delivery-option' onClick={() => handleSelectStore(10)}>864 Trendy Way, Atlanta, GA 30301</div>
                    </div>
                )}
                {storeSelected > 0 && (
                    <>
                        <svg onClick={handleBack} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
                            <path fill="black" d="m3.828 9l6.071-6.071l-1.414-1.414L0 10l.707.707l7.778 7.778l1.414-1.414L3.828 11H20V9z"></path>
                        </svg>
                        <p className="title-delivery-details">DELIVERY DETAILS</p>
                        <div className="form-delivery-details">
                            <input type="text" name="name" placeholder="NAME*" onChange={collectOrderInfo} required />
                            <input type="text" name="surname" placeholder="SURNAME/S*" onChange={collectOrderInfo} required />
                            <input type="text" name="additionalInfo" placeholder="ADDITIONAL INFORMATION*" onChange={collectOrderInfo} />
                            <p className="contact-delivery-details">CONTACT INFORMATION</p>
                            <small>We will use it to update the status of your delivery</small>

                            <input type="text" name="email" placeholder="EMAIL*" onChange={collectOrderInfo} required />
                            <input type="text" name="phone" placeholder="PHONE*" onChange={collectOrderInfo} required />

                            <button
                                type="button"
                                className="btn-shipping-continue"
                                onClick={() => handleDetailsFilled(true)}
                            >
                                CONTINUE
                            </button>
                        </div>
                    </>
                )
                }


                {currentStep === 0 && deliveryMethod === 'home' && (
                    <div className='home-delivery'>
                        <svg onClick={handleBack} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="black" d="m3.828 9l6.071-6.071l-1.414-1.414L0 10l.707.707l7.778 7.778l1.414-1.414L3.828 11H20V9z"></path></svg>
                        <OrderDetails onDetailsFilled={handleDetailsFilled} collectOrderInfo={collectOrderInfo} />
                    </div>
                )}

                {currentStep === 1 && detailsFilled && (
                    <div>
                        <svg onClick={handleBack} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="black" d="m3.828 9l6.071-6.071l-1.414-1.414L0 10l.707.707l7.778 7.778l1.414-1.414L3.828 11H20V9z"></path></svg>
                        <div className='final-delivery-address'>
                            <p>Contact information</p>
                            <span>{orderInfo.surname} {orderInfo.name}</span>
                            {deliveryMethod ==='home' ? <span>{orderInfo.city} {orderInfo.region}</span> : ''}
                            <span>{orderInfo.phone}</span>
                            <p>Address</p>
                            {deliveryMethod ==='store' ? <span>fashionCulture</span> : ''}
                            <span>{orderInfo.address}</span>
                            {orderInfo.additionalInfo ?
                             <>
                            <p>Additional Information</p>
                            <span>{orderInfo.additionalInfo}</span>
                            </>:''}
                        </div>
                        <Payment cartItems={cartItems} />
                    </div>
                )}

                {/* {currentStep === 1 && storeSelected && (
                    <div>
                        <svg onClick={handleBack} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="black" d="m3.828 9l6.071-6.071l-1.414-1.414L0 10l.707.707l7.778 7.778l1.414-1.414L3.828 11H20V9z"></path></svg>
                        <h1>step 2 pick-up point</h1>
                    </div>
                )} */}

                {currentStep === 2 && (
                    <div className='summary-columns'>
                        <div className='summary-first-col'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" viewBox="0 0 256 256"><path fill="black" d="M225.86 102.82c-3.77-3.94-7.67-8-9.14-11.57c-1.36-3.27-1.44-8.69-1.52-13.94c-.15-9.76-.31-20.82-8-28.51s-18.75-7.85-28.51-8c-5.25-.08-10.67-.16-13.94-1.52c-3.56-1.47-7.63-5.37-11.57-9.14C146.28 23.51 138.44 16 128 16s-18.27 7.51-25.18 14.14c-3.94 3.77-8 7.67-11.57 9.14c-3.25 1.36-8.69 1.44-13.94 1.52c-9.76.15-20.82.31-28.51 8s-7.8 18.75-8 28.51c-.08 5.25-.16 10.67-1.52 13.94c-1.47 3.56-5.37 7.63-9.14 11.57C23.51 109.72 16 117.56 16 128s7.51 18.27 14.14 25.18c3.77 3.94 7.67 8 9.14 11.57c1.36 3.27 1.44 8.69 1.52 13.94c.15 9.76.31 20.82 8 28.51s18.75 7.85 28.51 8c5.25.08 10.67.16 13.94 1.52c3.56 1.47 7.63 5.37 11.57 9.14c6.9 6.63 14.74 14.14 25.18 14.14s18.27-7.51 25.18-14.14c3.94-3.77 8-7.67 11.57-9.14c3.27-1.36 8.69-1.44 13.94-1.52c9.76-.15 20.82-.31 28.51-8s7.85-18.75 8-28.51c.08-5.25.16-10.67 1.52-13.94c1.47-3.56 5.37-7.63 9.14-11.57c6.63-6.9 14.14-14.74 14.14-25.18s-7.51-18.27-14.14-25.18m-52.2 6.84l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32"></path></svg>
                            <h4>Your order is made!</h4>
                            <p>Congratulations! Your order has been successfully proceed, we will pick up your order as soon as possible!</p>
                        </div>
                        <div className='summary-second-col'>
                            <div className='summary-order-id-and-delivery'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32"><path fill="black" d="m23 1l-6 6l1.415 1.402L22 4.818V21H10V10H8v11c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4.815l3.586 3.587L29 7z"></path><path fill="black" d="M18.5 19h-5c-.827 0-1.5-.673-1.5-1.5v-5c0-.827.673-1.5 1.5-1.5h5c.827 0 1.5.673 1.5 1.5v5c0 .827-.673 1.5-1.5 1.5M14 17h4v-4h-4zm2 14v-2c7.168 0 13-5.832 13-13c0-1.265-.181-2.514-.538-3.715l1.917-.57C30.79 13.1 31 14.542 31 16c0 8.271-6.729 15-15 15M1.621 20.285A15 15 0 0 1 1 16C1 7.729 7.729 1 16 1v2C8.832 3 3 8.832 3 16c0 1.265.181 2.515.538 3.715z"></path></svg>
                                <div>
                                    <p>Order ID #{orderInfo.orderId}</p>
                                    <small className='summary-delivery-type'>Express Delivery</small>
                                </div>
                            </div>
                            <div className='summary-info-columns'>
                                <div className='summary-info-col'>
                                    <div className='summary-info-row'>
                                        <p className='summary-info-col'>
                                            Shipper Name
                                        </p>
                                        <p className='summary-info'>
                                            fashionCulture Inc.
                                        </p>

                                        <div className='summary-info-row'>
                                            <p className='summary-info-col'>
                                                From
                                            </p>
                                            <p className='summary-info'>
                                                Str. Avenue, New York, NY, 10025
                                            </p>
                                        </div>
                                    </div>
                                    <div className='summary-info-row'>
                                        <p className='summary-info-col'>
                                            Recipient Name
                                        </p>
                                        <p className='summary-info'>
                                            {orderInfo.surname} {orderInfo.name}
                                        </p>
                                        <div className='summary-info-row'>
                                            <p className='summary-info-col'>
                                                To
                                            </p>
                                            <p className='summary-info'>
                                                {orderInfo.address}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="btn-back-shopping"
                            onClick={() => { window.location.href="/shop"; localStorage.removeItem('orderInfo')}}
                        >
                            BACK TO SHOPPING
                        </button>
                        <button type='submit' id='paid' onClick={handlePayment}>PAID</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShippingProducts;
