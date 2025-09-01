import React ,{useContext} from "react";
import "./index.css";
import { CartContext } from "../Provider";
import Cookies from "js-cookie";
import {useNavigate} from 'react-router-dom'
export default function Index() {
  const {cart} = useContext(CartContext);
  const navigate= useNavigate()
  const handleLogout= ()=>{
    Cookies.remove("jwt_token");
    console.log('clicked');
    navigate('/login', {replace:true})

  }

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
          <button onClick={()=>handleLogout()}>logout</button>
        </ul>
      </div>
    </nav>
  );
}
