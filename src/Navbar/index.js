import React ,{useContext} from "react";
import "./Index.css";
import { CartContext } from "../Provider/Index";
export default function Index() {
  const {cart} = useContext(CartContext);


  return (
    <nav>
      <div className="nav-container">
        <div className="logo-container">
          <img src="./assests/logo.png" alt="logo" />
          <p>Tasty Kitchens</p>
        </div>

        <ul>
          <a href="/">
            <li>Home</li>
          </a>
        
          <a href="/restaurant/cart">
           <li >Cart - {cart.length }</li>

          </a>
         
          <button>logout </button>
        </ul>
      </div>
    </nav>
  );
}
