import React from "react";
import "./Index.css";
export default function Index() {
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
