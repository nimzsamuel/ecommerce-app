import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    // Fetch products from FakeStore API
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((data) => setNewArrivals(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Nimz Clothing</h1>
          <p>Discover the latest trends in fashion with a touch of elegance.</p>
          <Link to="/shop" className="btn">
            Shop Now
          </Link>
        </div>
        <div className="hero-img">
          <img
            src="https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Fashion"
          />
        </div>
      </section>

      {/* Featured Categories */}
      <section className="categories">
        <h2>Featured Categories</h2>
        <div className="category-grid">
          <Link to="/shop?category=men's clothing" className="category-card">
            <img
              src="https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Men"
            />
            <h3>Men</h3>
          </Link>
          <Link to="/shop?category=women's clothing" className="category-card">
            <img
              src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Women"
            />
            <h3>Women</h3>
          </Link>
          <Link to="/shop?category=jewelery" className="category-card">
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Jewelry"
            />
            <h3>Jewelry</h3>
          </Link>
          <Link to="/shop?category=electronics" className="category-card">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Electronics"
            />
            <h3>Electronics</h3>
          </Link>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="arrivals">
        <h2>New Arrivals</h2>
        <div className="arrival-grid">
          {newArrivals.map((product) => (
            <div key={product.id} className="arrival-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title.substring(0, 20)}...</h3>
              <p>${product.price}</p>
              <Link to={`/product/${product.id}`} className="btn-small">
                View
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>
              "Nimz Clothing has the best styles. I always find something
              unique!"
            </p>
            <h4>- Sarah J.</h4>
          </div>
          <div className="testimonial">
            <p>"Great quality and fast delivery. My go-to fashion store!"</p>
            <h4>- David K.</h4>
          </div>
          <div className="testimonial">
            <p>"Love the seamless shopping experience. Highly recommend!"</p>
            <h4>- Amina O.</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
