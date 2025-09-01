import React, {useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import Cookies from "js-cookie";
const Index = () => {
   
    const limit =9;
    const jwtToken = Cookies.get("jwt_token");
    const [resturantsList, setResturantsList] = useState([]);
    const [loading , setLoading] = useState(false);
    const [activePage, setactivePage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [sortedBy, setSortedby]= useState("Highest");
   
    useEffect(()=>{
      const fetch = async()=>{
        const offset = (activePage - 1)*limit
        if(!jwtToken){
            return;
        }
        try{
          const response = await axios.get(`https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${limit}&sort_by_rating=${sortedBy}`, 
            {
            headers:{
              Authorization: `Bearer ${jwtToken}`,
            }
          })
          setResturantsList(response.data.restaurants);
          setTotalItems(response.data.total);
          setLoading(true)
          
        }catch(err){
          console.log(err)
        }

      }

    fetch()
    },[activePage, jwtToken, sortedBy]);
   
    const totalPages =Math.ceil(totalItems/limit);
    const handlePageIncrement = ()=>{
       setactivePage(prev=>(prev <totalPages ? prev+1: prev))
    }
    const handlePageDecrement = ()=>{
       setactivePage(prev =>(prev > 1 ? prev -1 : prev))
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_13799_11414"  maskUnits="userSpaceOnUse" x="3" y="6" width="18" height="12">
<path fillRule="evenodd" clipRule="evenodd" d="M3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7ZM4 18H8C8.55 18 9 17.55 9 17C9 16.45 8.55 16 8 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM14 13H4C3.45 13 3 12.55 3 12C3 11.45 3.45 11 4 11H14C14.55 11 15 11.45 15 12C15 12.55 14.55 13 14 13Z" fill="#0F172A"/>
</mask>
<g mask="url(#mask0_13799_11414)">
<rect width="24" height="24" fill="#475569"/>
</g>
</svg>

            <select onChange={(e)=>{
                setSortedby(e.target.value)
            }}>
              <option value="Highest">Sort by Highest</option>
              <option value="Lowest">Sort by Lowest</option>
            </select>
          </div>
        </div>
        {/*resturants list */}
     {
      loading ? <>  <div>
         <div className="restaurant-container">
          {
            resturantsList.map((eachResturant)=>(
             <a href={`/restaurant/${eachResturant.id}`} className="restaurant" key={eachResturant.id}>
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
          </a>

          ))
          }
         
        </div>
           <div className="pagination-container"><button onClick={handlePageDecrement} className="arrow-btn"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M9.87352 2L11 3.15074L6.25296 8L11 12.8493L9.87352 14L4.68479 8.69953C4.30425 8.3108 4.30425 7.68919 4.68479 7.30046L9.87352 2Z" fill="#334155"/>
</svg>
</button><div>{activePage} of 20</div><button onClick={handlePageIncrement} className="arrow-btn"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M6.12648 14L5 12.8493L9.74704 8L5 3.15074L6.12648 2L11.3152 7.30047C11.6957 7.6892 11.6957 8.31081 11.3152 8.69954L6.12648 14Z" fill="#334155"/>
</svg>
</button></div>

       </div></>:<div>Loading....</div>
     }
       
      </div>
    </section>
  );
};

export default Index;
