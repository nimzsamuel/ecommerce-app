import React from "react";
import "../styles/global.css";

const ProductDetails = () => {
  return (
    <div className="container">
      <div className="product-details">
        <img src="/images/jacket.jpg" alt="product" />
        <div>
          <h2>Denim Jacket</h2>
          <p className="price">$60</p>
          <p>Classic denim jacket with a modern fit. Perfect for all seasons.</p>
          <select>
            <option>Select Size</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </select>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
