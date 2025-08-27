import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
        const uniqueCats = ["all", ...new Set(data.map((p) => p.category))];
        setCategories(uniqueCats);
      });
  }, []);

  const filterCategory = (cat) => {
    setSelected(cat);
    if (cat === "all") {
      setFiltered(products);
    } else {
      setFiltered(products.filter((p) => p.category === cat));
    }
  };

  return (
    <div className="shop">
      <h1>Shop</h1>

      {/* Category Filters */}
      <div className="filters">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={selected === cat ? "active" : ""}
            onClick={() => filterCategory(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
