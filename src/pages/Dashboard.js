import React from "react";
import "../styles/global.css";

const Dashboard = () => {
  return (
    <div className="container">
      <h2>User Dashboard</h2>
      <div className="dashboard">
        <p><strong>Order History:</strong> No orders yet.</p>
        <p><strong>Saved Items:</strong> 0</p>
        <p><strong>Profile Settings:</strong> Coming soon.</p>
      </div>
    </div>
  );
};

export default Dashboard;
