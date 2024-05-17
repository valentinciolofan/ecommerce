import React from "react"
import { useStore } from "@nanostores/react"
import { cartStore, removeFromCart, decreaseQuantity, increaseQuantity } from "../UserContext"
import urlFor from "../../utils/urlFor"
import "./products.css"

const handleProcessPaymentClick = () => {
  window.location.href = "/checkout/shipping"
}


const CartProducts = () => {
  const cartItems = useStore(cartStore);

  console.log(cartItems)

  return (

    // subtotal
    // shipping
    //divider
    // checkout
    <div className="cart">
    <h2>My Cart</h2>

      <div className="products-wrapper">
        <ul>
          {cartItems.items.map(item => (
            <li
              key={item.slug}>
              <div className="cart-item-img">
                <img
                  src={urlFor(item.image)}
                  alt="" />
              </div>
              <div className="product-info">
                <p>{item.title}</p>
                <div className="size-and-color">
                  <span>Size: {item.size.toUpperCase()}</span>
                  <span>Color: {item.color.charAt(0).toUpperCase() + item.color.slice(1)}</span>
                </div>
                <span>${item.price}</span>
                <div className="product-actions">
                  <span>
                    <button
                      type="button"
                      className="cart-product-action"
                      onClick={() => decreaseQuantity({
                        itemSlug: item.slug
                      })}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="black" d="M10 20a10 10 0 1 1 0-20a10 10 0 0 1 0 20m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m5-9v2H5V9z"></path></svg>
                    </button>

                    <p>{item.quantity}</p>

                    <button
                      type="button"
                      className="cart-product-action"
                      onClick={() => increaseQuantity({
                        itemSlug: item.slug
                      })}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="black" fillRule="evenodd" clipRule="evenodd"><path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16"></path><path d="M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4z"></path></g></svg>
                    </button>

                  </span>
                  <button
                    type="button"
                    className="cart-product-action cart-remove-btn"
                    onClick={() => removeFromCart(item.slug)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="black" d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0"></path></svg>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="total-cart-value">
          <h4 className="order-summary">ORDER SUMMARY</h4>
          <div className="total-cart-value-col">
            <p>Subtotal: </p>
            <span>${cartItems.total}</span>
          </div>

          <div className="total-cart-value-col">
            <p>Shipping: </p>
            <span>$10</span>
          </div>
          <div className="total-cart-value-col">
            <p>TOTAL: </p>
            <span>${cartItems.total + 10}</span>
          </div>
          <div className="free-delivery-info">
            <svg-icon2 category="services" src="order" className="pr-8"><div _ngcontent-mdfrontw-c3850062867=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.78856 0.546908C7.92258 0.484364 8.07742 0.484364 8.21144 0.546908L14.2114 3.34691C14.3875 3.42906 14.5 3.60574 14.5 3.8V12.2C14.5 12.3943 14.3875 12.5709 14.2114 12.6531L8.21144 15.4531C8.07742 15.5156 7.92258 15.5156 7.78856 15.4531L1.78856 12.6531C1.61252 12.5709 1.5 12.3943 1.5 12.2V3.8C1.5 3.60574 1.61252 3.42906 1.78856 3.34691L7.78856 0.546908ZM2.5 4.80902V11.8816L7.5 14.2149V7.30902L2.5 4.80902ZM8.5 7.30902V14.2149L13.5 11.8816V4.80902L8.5 7.30902ZM13.0578 3.91208L8 1.55176L2.94219 3.91208L8 6.44098L13.0578 3.91208Z" fill="#292929"></path>
            </svg>
            </div></svg-icon2>
            <span className="text-l"> Free delivery on orders over $99.00. </span>

          </div>
        </div>
      </div>

      <div className="div-process-payment">
        <button
          type="button"
          className="btn-process-payment"
          onClick={handleProcessPaymentClick}
        >
          PROCESS
        </button>
      </div>
    </div>
  );
}


export default CartProducts;
