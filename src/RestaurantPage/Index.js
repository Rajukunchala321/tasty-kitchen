import React, { useState, useEffect, useContext  } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import "./Index.css";
import {CartContext} from '../Provider/Index.js'
const Index = () => {
  let restrauntId = window.location.pathname.slice(12);

  const jwtToken = Cookies.get("jwt_token");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const {cart, addItem, removeItem } = useContext(CartContext)

  useEffect(() => {
    const fetchMenu = async () => {
      if (!jwtToken) {
        return;
      }
      setLoading(true)

      try {
        const response = await axios.get(
          `https://apis.ccbp.in/restaurants-list/${restrauntId}`,
          {
            headers: {
              Authorization: `Bearer ${jwtToken}`,
            },
          }
        );
        console.log(response.data);
        setData(response.data);
        setLoading(false)
      } catch (err) {
        console.log(err);
        setLoading(false)
      }
    };
    fetchMenu();
  }, [jwtToken, restrauntId]);

  if (jwtToken === undefined) {
    return <Navigate to="/login" replace />;
  }
  const items = data.food_items || [];

  return (

  
    loading ? (<div>loading</div> ) : (  <section>
      <div className="resturant-main-container">
        <div className="resturant-banner-section">
          <div className="main-container">
            <div className="banner-card">
              <img src={data.image_url} alt="banner img" />
              <div className="banner-content">
                <h3>{data.name}</h3>
                <p className="para-1">{data.cuisine} </p>
                <p className="para-1">{data.location}</p>
                <div className="rating-pricing">
                  <div className="rating-container">
                    <div className="rating">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.71496 0.447376L8.22262 3.70505L11.31 4.04092C11.6204 4.08522 11.877 4.31079 11.9666 4.61811C12.0562 4.92544 11.9622 5.258 11.7263 5.46906L9.27132 7.54163L10.0318 11.0232C10.0916 11.3375 9.96705 11.6586 9.71288 11.8453C9.45871 12.032 9.12154 12.0501 8.84971 11.8916L5.99982 10.1194L3.1526 11.8916C2.88076 12.0501 2.54359 12.032 2.28942 11.8453C2.03525 11.6586 1.91067 11.3375 1.97048 11.0232L2.73098 7.54163L0.273356 5.46906C0.0372661 5.25763 -0.0563708 4.92456 0.0338322 4.61706C0.124035 4.30957 0.38145 4.08434 0.6923 4.04092L3.77968 3.70505L5.28735 0.447376C5.42381 0.172316 5.6997 -0.000976562 6.00115 -0.000976562C6.3026 -0.000976563 6.57849 0.172316 6.71496 0.447376Z"
                          fill="white"
                        />
                      </svg>
                      <p>{data.rating}</p>
                    </div>
                    <p>{data.reviews_count} Ratings</p>
                  </div>
                  <div className="line"></div>
                  <div className="pricing">
                    <p>₹ {data.cost_for_two}</p>
                    <p>Cost for two</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-list-main-container">
          <div className="items-container">
            {items.map((eachItem) => {
              const inCart = cart.find((each)=> each.id ===eachItem.id);
              return (
                <div key={eachItem.id} className="item-container">
                  <img
                    src={eachItem.image_url}
                    className="item-img"
                    alt="item"
                    loading="lazy"
                  />
                  <div className="item-content">
                    <p className="item-name">{eachItem.name}</p>
                    <p className="item-pricing">₹ {eachItem.cost}</p>
                    <div className="item-rating">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.71496 0.448353L8.22262 3.70603L11.31 4.0419C11.6204 4.08619 11.877 4.31177 11.9666 4.61909C12.0562 4.92642 11.9622 5.25897 11.7263 5.47004L9.27132 7.5426L10.0318 11.0242C10.0916 11.3385 9.96705 11.6596 9.71288 11.8463C9.45871 12.033 9.12154 12.0511 8.84971 11.8925L5.99982 10.1203L3.1526 11.8925C2.88076 12.0511 2.54359 12.033 2.28942 11.8463C2.03525 11.6596 1.91067 11.3385 1.97048 11.0242L2.73098 7.5426L0.273356 5.47004C0.0372661 5.2586 -0.0563708 4.92553 0.0338322 4.61804C0.124035 4.31055 0.38145 4.08532 0.6923 4.0419L3.77968 3.70603L5.28735 0.448353C5.42381 0.173292 5.6997 0 6.00115 0C6.3026 0 6.57849 0.173292 6.71496 0.448353Z"
                          fill="#FFCC00"
                        />
                      </svg>
                      <div>{eachItem.rating}</div>
                    </div>
                  
                    {inCart ? (<div className="quanties-btn-container">
                      <button onClick={()=>removeItem(eachItem)}>-</button>
                      <span>{inCart?.quantity}</span>
                      <button onClick={()=>addItem(eachItem)}>+</button>
                    </div>): <button onClick={ ()=> addItem(eachItem)} className="add-btn">Add</button> }
                    
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>)
  
  
  )
};

export default Index;
