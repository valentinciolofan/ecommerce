import React from "react"
import { useStore } from "@nanostores/react"
import { cartStore, removeFromCart } from "../UserContext"


const CartProducts = () => {
    const cart = useStore(cartStore);
    console.log(cart);
    console.log(cartStore.get());
    return (
        <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.items.map(item => (
            <li key={item.slug}>
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
