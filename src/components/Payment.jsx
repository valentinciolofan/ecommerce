import React, { useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51PVVxaEZbF6dio7iTjo5JguBuXPvFmlSfPJrZUkzEaksQnUuVP9nt3z74pjCzpI6O6qu3KuwSRYAK3N2Ft5xzIy700JPHkXNap");

const CheckoutButton = ({ cartItems }) => {
  console.log(cartItems);
  const handleCheckout = useCallback(async () => {
    const stripe = await stripePromise;
    const apiUrl = import.meta.env.PUBLIC_API_URL;

    const response = await fetch(`${apiUrl}/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cartItems),
    });

    const session = await response.json();

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  }, []);

  return (
    <button onClick={handleCheckout} className='btn-checkout'>
      Checkout
    </button>
  );
};

const Payment = ({ cartItems }) => {
  return (
    <div className="App">
      <CheckoutButton cartItems={cartItems} />
    </div>
  );
};

export default Payment;
