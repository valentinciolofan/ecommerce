import React, { useEffect, useState } from 'react';
import OrderDetails from './OrderDetails';
import "./products.css";

const ShippingProducts = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [deliveryMethod, setDeliveryMethod] = useState('');
    const [storeSelected, setStoreSelected] = useState(false);
    const [detailsFilled, setDetailsFilled] = useState(false);

    const handleDeliverySelection = (method) => {
        setDeliveryMethod(method);
        // Reset selections when changing methods
        setStoreSelected(false);
        setDetailsFilled(false);
    };

    const selectStore = (isSelected) => {
        setStoreSelected(isSelected);
    };

    const handleDetailsFilled = (isFilled) => {
        setDetailsFilled(isFilled);
        console.log(detailsFilled);
        console.log(deliveryMethod);
    };

    const handleBack = () => {
        setDeliveryMethod('');
        setCurrentStep(0);
    }

    useEffect(() => {
        if (detailsFilled && deliveryMethod === 'home') {
            setCurrentStep(1);
        } else if (storeSelected && deliveryMethod === 'store') {
            setCurrentStep(1);
        }
    }, [detailsFilled, deliveryMethod, storeSelected]);
    return (
        <div className="shipping-products-container">
            <div className='hg-bread'>
                <div className={`hg-bread-col ${currentStep === 0 ? 'active' : ''}`}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="
http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 0H0V16H16V0ZM8.863 4.96027H8.323C7.99 5.21227 7.405 5.39227 7 5.42827V6.06727C7.288 6.05827 7.729 5.98627 8.089 5.86927V11.2783H8.863V4.96027Z" fill="black"></path>
                    </svg>
                    <p>DELIVERY</p>
                </div>
                <div className={`hg-bread-col ${currentStep === 1 ? 'active' : ''}`}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="
http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 0H0V16H16V0ZM10.641 10.354H8.8815C8.159 10.354 7.4535 10.3625 7.19 10.371C9.706 8.74753 10.3605 8.09303 10.3605 6.86903C10.3605 5.77253 9.57 4.93103 8.329 4.93103C7.02 4.93103 6.2465 5.80653 6.1615 6.98803L6.884 7.05603C6.9435 6.14653 7.445 5.59403 8.312 5.59403C9.1875 5.59403 9.6125 6.18903 9.6125 6.88603C9.6125 7.88053 8.992 8.40753 6.204 10.3115V11H10.641V10.354Z" fill="black"></path>
                    </svg>
                    <p>PAYMENT</p>
                </div>
                <div className={`hg-bread-col ${currentStep === 2 ? 'active' : ''}`}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="
http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16 0H0V16H16V0ZM10.7175 9.27453C10.7175 8.44153 10.216 7.97403 9.54448 7.78703C10.182 7.56603 10.4625 7.04753 10.4625 6.52053C10.4625 5.47503 9.55298 4.93103 8.54148 4.93103C7.25798 4.93103 6.55248 5.67053 6.39098 6.60553L7.08798 6.75853C7.19848 6.05303 7.64048 5.56853 8.53298 5.56853C9.18748 5.56853 9.72298 5.90003 9.72298 6.56303C9.72298 7.03053 9.35748 7.50653 8.45648 7.50653C8.10798 7.50653 7.76798 7.49803 7.39398 7.48103V8.12703C7.76798 8.11003 8.10798 8.10153 8.41398 8.10153C9.14498 8.10153 9.96948 8.41603 9.96948 9.24053C9.96948 9.94603 9.44248 10.4645 8.48198 10.4645C7.49598 10.4645 6.96048 9.88653 6.88398 9.03653L6.16998 9.13003C6.26348 10.218 7.07948 11.102 8.49048 11.102C9.81648 11.102 10.7175 10.3625 10.7175 9.27453Z" fill="black"></path>
                    </svg>
                    <p>SUMMARY</p>
                </div>
            </div>


            {currentStep === 0 && deliveryMethod === '' && (
                <div>
                    <p className='checkout-delivery-title'>SELECT DELIVERY METHOD</p>
                    <div className="select-delivery">
                        <div className='select-delivery-option'
                            onClick={() => handleDeliverySelection('store')}>
                            <p className="delivery-method-title">Pick-up in store</p>
                        </div>
                        <div className='select-delivery-option' onClick={() => handleDeliverySelection('home')}>
                            <p className="delivery-method-title">Home delivery</p>
                        </div>
                    </div>
                </div>
            )}

            {currentStep === 0 && deliveryMethod === 'store' && (
                <div className='store-delivery'>
                    <svg onClick={handleBack} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="black" d="m3.828 9l6.071-6.071l-1.414-1.414L0 10l.707.707l7.778 7.778l1.414-1.414L3.828 11H20V9z"></path></svg>
                    <p>Choose a store:</p>
                    <div onClick={() => selectStore(true)}>Store 1</div>
                    <div onClick={() => selectStore(true)}>Store 2</div>
                    <div onClick={() => selectStore(true)}>Store 3</div>

                    {/* <button
                        type="button"
                        className="btn-shipping-continue"
                        onClick={selectStore}
                        // disabled={(deliveryMethod === 'store' && !storeSelected) || (deliveryMethod === 'home' && !detailsFilled)}
                    >
                        CONTINUE
                    </button> */}
                </div>
            )}

            {currentStep === 0 && deliveryMethod === 'home' && (
                <div className='home-delivery'>
                    <svg onClick={handleBack} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="black" d="m3.828 9l6.071-6.071l-1.414-1.414L0 10l.707.707l7.778 7.778l1.414-1.414L3.828 11H20V9z"></path></svg>

                    <OrderDetails onDetailsFilled={handleDetailsFilled} />


                </div>
            )}

            {currentStep === 1 && detailsFilled && (
                <div>
                    <svg onClick={handleBack} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="black" d="m3.828 9l6.071-6.071l-1.414-1.414L0 10l.707.707l7.778 7.778l1.414-1.414L3.828 11H20V9z"></path></svg>

                    <h1>step 2 home delivery</h1>
                </div>
            )}

            {currentStep === 1 && storeSelected && (
                <div>

                    <svg onClick={handleBack} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="black" d="m3.828 9l6.071-6.071l-1.414-1.414L0 10l.707.707l7.778 7.778l1.414-1.414L3.828 11H20V9z"></path></svg>
                    <h1>step 2 pick-up point</h1>
                </div>

            )


            }


        </div>
    );
}

export default ShippingProducts;
