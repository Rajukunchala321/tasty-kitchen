import React, { useContext, useState } from "react";
import "./Index.css";
import { CartContext } from "../Provider/Index.js";
import Cookies from "js-cookie";
import {Navigate} from 'react-router-dom';
const Index = () => {
  const { cart, addItem, removeItem } = useContext(CartContext);
  const [isOrderPlace, setOrderPlace] = useState(false);
  const jwtToken = Cookies.get('jwt_token')

  const handleOrderPlaced = () => {
    setOrderPlace(true);
  };
   if (jwtToken === undefined) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      {isOrderPlace ? (
        <section className="order-success-section">
          <div className="order-success-main-container">
            <img src="../assests/check-circle.png" alt="checked" />
            <div className="payment-txt">Payment Successful</div>
            <div className="payment-txt">
              Thank you for ordering. Your payment is successfully completed.
            </div>
            <a  href="/"  className="payment-btn">Go To Home Page</a>
          </div>
        </section>
      ) : cart.length > 0 ? (
        <section>
          <div className="main-container">
            <div className="items-list">
              <div>Item</div>
              <div>Quantity</div>
              <div>Price</div>
            </div>

            <div className="list-container">
              {cart.map((eachCart) => (
                <div key={eachCart.id} className="items-list">
                  <div className="item-img">
                    <img src={eachCart.image_url} alt="item" />
                    <div>{eachCart.name}</div>
                  </div>

                  <div className="btn-container">
                    <button
                      onClick={() => removeItem(eachCart)}
                      className="btn"
                    >
                      -
                    </button>
                    <div>{eachCart.quantity}</div>
                    <button onClick={() => addItem(eachCart)} className="btn">
                      +
                    </button>
                  </div>

                  <div className="price">
                    ₹ {eachCart.quantity * eachCart.cost}
                  </div>
                </div>
              ))}
            </div>

            <div className="order-price-container">
              <div className="order-txt">Order Total : </div>
              <div className="placeOrder-container">
                <div>
                  ₹
                  {cart.reduce(
                    (total, item) => total + item.cost * item.quantity,
                    0
                  )}
                </div>
                <button onClick={handleOrderPlaced}>Place Order</button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="no-order-section">
          <div className="on-order-main-container">
            <img src="../assests/no-order.png" alt="no order" />
            <div className="payment-txt">No Orders Yet!</div>
            <div className="payment-txt">
              Your cart is empty. Add something from the menu.
            </div>
            <a  href="/"  className="payment-btn">
              Order Now
            </a>
          </div>
        </section>
      )}
    </>
  );
};

export default Index;
