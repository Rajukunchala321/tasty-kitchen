import React from "react";
import "./index.css";
export default function index() {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <img src="./assests/logo.png" alt="logo" />
          <p>Tasty Kitchens</p>
        </div>

        <ul>
          <li>Home</li>
          <li>Cart</li>
          <button>logout</button>
        </ul>
      </div>
    </nav>
  );
}
