import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CurrencyContext } from "../context/CurrencyContext";
import { Link } from "react-router-dom";
import "../styles/global.css";
const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const { rates, currency } = useContext(CurrencyContext);

  const total = cart.reduce((acc, item) => acc + item.price * (rates[currency] || 1), 0).toFixed(2);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/shop" className="text-blue-500">Go Shopping</Link></p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <p>{item.name}</p>
              <p>{currency} {(item.price * (rates[currency] || 1)).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
            </div>
          ))}
          <h3 className="text-xl mt-4">Total: {currency} {total}</h3>
          <Link to="/checkout" className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded">
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
