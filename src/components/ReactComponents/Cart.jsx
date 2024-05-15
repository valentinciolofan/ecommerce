import React from "react"
import { useStore } from "@nanostores/react"
import { cartStore, removeFromCart, decreaseQuantity, increaseQuantity } from "../UserContext"
import urlFor from "../../utils/urlFor"
import "./products.css"


const CartProducts = () => {
  const cartItems = useStore(cartStore);
  
  return (

    // image, title, size, color, price, quantity, delete (remove)
    // subtotal
    // shipping
    //divider
    // total
    // checkout
    <div className="cart">
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
              <div className="product-actions">
                <span>
                  <button type="button" onClick={() => decreaseQuantity({
                    itemSlug: item.slug
                  })}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="black" d="M10 20a10 10 0 1 1 0-20a10 10 0 0 1 0 20m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m5-9v2H5V9z"></path></svg>
                  </button>
                  <p>{item.quantity}</p>
                  <button type="button" onClick={() => increaseQuantity({
                    itemSlug: item.slug
                  })}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="black" fillRule="evenodd" clipRule="evenodd"><path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16"></path><path d="M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4z"></path></g></svg>
                  </button>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="black" d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0"></path></svg>
                <button onClick={() => removeFromCart(item.slug)}>Remove</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="total">
        <strong>Total: </strong>${cartItems.total}
      </div>
    </div>
  );
}


export default CartProducts;
