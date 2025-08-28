import React, {useState, useEffect } from "react";
import axios from "axios";
import "./Index.css";
import Cookies from "js-cookie";
const Index = () => {
     const jwtToken = Cookies.get("jwt_token");
    const [resturantsList, setResturantsList] = useState([]);
    const [perpage, setPerpage] = useState([]);
    useEffect(()=>{

     const fecth = async ()=>{
        if(!jwtToken){
          return;
        }
        try{
          const response = await axios.get('https://apis.ccbp.in/restaurants-list', 
            {
              headers: {
                Authorization: `Bearer ${jwtToken}`
              }
          })
          console.log(response.data)

        }catch(err){
          console.log(err)
        }

     }
     fecth()
    },[])

  return (
   
    <section>
      <div className="pouplar-restaurants-main-container">
        <h2>Popular Restaurants</h2>
        <div className="par-container">
          <p>
            Select Your favourite restaurant special dish and make your day
            happy...
          </p>
          <div className="filter-container">
            <img src="" alt="sort" />
            <p>Sort by Lowest</p>
          </div>
        </div>
        {/*resturants list */}
       <div>
         <div className="restaurant-container">
          {
            resturantsList.length >=1? 
            perpage.map((eachResturant)=>(
             <div className="restaurant" key={eachResturant.id}>
            <img src="./assests/rest-logo.png" alt="restaurant" className="restaurant-logo" />
            <div className="restaurant-content">
              <h3 className="rest-name">McDonald’s</h3>
              <p className="rest-type-food">{eachResturant.id}</p>
              <div className="rest-rating-container">
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
                <p className="rating">4.4</p>
                <p className="rating-members">(222 ratings)</p>
              </div>
            </div>
          </div>

          )):<p>No Data</p>
          }
         
        </div>
           

       </div>
       
      </div>
    </section>
  );
};

export default Index;
