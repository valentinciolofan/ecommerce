import React from "react"
import { useStore } from "@nanostores/react"
import { cartStore, removeFromCart } from "../UserContext"
import urlFor from "../../utils/urlFor"
import "./products.css"

const CartProducts = () => {
  const cart = useStore(cartStore);
  console.log(cart);
  return (

    // image, title, size, color, price, quantity, delete (remove)
    // subtotal
    // shipping
    //divider
    // total
    // checkout
    <div className="cart">
      <ul>
        {cart.items.map(item => (
          <li 
          key={item.slug}>
            <img 
            className="cart-item-img"
            src={urlFor(item.image)} 
            alt=""/>
            <span>{item.title} - ${item.price} x {item.quantity}</span>
            <button onClick={() => removeFromCart(item.slug)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="total">
        <strong>Total: </strong>${cart.total}
      </div>
    </div>
  );
}


export default CartProducts;
