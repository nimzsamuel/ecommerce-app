import React from "react";
import "../styles/global.css";

const Checkout = () => {
  return (
    <div className="container">
      <h2>Checkout</h2>
      <form>
        <label>Full Name</label>
        <input type="text" placeholder="John Doe" />

        <label>Shipping Address</label>
        <input type="text" placeholder="123 Main St" />

        <label>Payment Method</label>
        <select>
          <option>Stripe</option>
          <option>Paystack</option>
          <option>Flutterwave</option>
        </select>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
