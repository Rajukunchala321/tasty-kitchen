import React, {useState, useEffect } from "react";
import axios from "axios";
import "./Index.css";
import Cookies from "js-cookie";
const Index = () => {
   
    const limit =9;
    const jwtToken = Cookies.get("jwt_token");
    const [resturantsList, setResturantsList] = useState([]);
    const [loading , setLoading] = useState(true);
    const [activePage, setactivePage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
   
    useEffect(()=>{
      const fetch = async()=>{
        const offset = (activePage - 1)*limit
        console.log(offset)
        if(!jwtToken){
            return;
        }
        try{
          const response = await axios.get(`https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${limit}`, 
            {
            headers:{
              Authorization: `Bearer ${jwtToken}`,
            }
          })
          setResturantsList(response.data.restaurants);
          setTotalItems(response.data.total)
          
        }catch(err){
          console.log(err)
        }

      }

    fetch()
    },[activePage]);
   
    const totalPages =Math.ceil(totalItems/activePage);
    console.log(totalPages)
    const handlePageIncrement = ()=>{
       setactivePage(prev=>Math.min(prev+1, totalPages))
    }
    const handlePageDecrement = ()=>{
       setactivePage(prev=>Math.max(prev-1, totalPages))
    }



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
            resturantsList.map((eachResturant)=>(
             <div className="restaurant" key={eachResturant.id}>
            <img src={eachResturant.image_url} alt={`restaurant-${eachResturant.id}`} className="restaurant-logo" />
            <div className="restaurant-content">
              <h3 className="rest-name">{eachResturant.name}</h3>
              <p className="rest-type-food">{eachResturant.cuisine}</p>
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
                <p className="rating">{eachResturant.user_rating.rating}</p>
                <p className="rating-members">({eachResturant.user_rating.total_reviews} ratings)</p>
              </div>
            </div>
          </div>

          ))
          }
         
        </div>
           <div className="pagination-container"><button onClick={handlePageDecrement} className="arrow-btn"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M9.87352 2L11 3.15074L6.25296 8L11 12.8493L9.87352 14L4.68479 8.69953C4.30425 8.3108 4.30425 7.68919 4.68479 7.30046L9.87352 2Z" fill="#334155"/>
</svg>
</button><div>1 of 20</div><button onClick={handlePageIncrement} className="arrow-btn"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M6.12648 14L5 12.8493L9.74704 8L5 3.15074L6.12648 2L11.3152 7.30047C11.6957 7.6892 11.6957 8.31081 11.3152 8.69954L6.12648 14Z" fill="#334155"/>
</svg>
</button></div>

       </div>
       
      </div>
    </section>
  );
};

export default Index;
