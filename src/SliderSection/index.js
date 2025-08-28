import React,  { useState, useEffect} from 'react';
import './Index.css'
import Slider from "react-slick";
import PopularRestaurantsSection from '../PopularRestaurantsSection/Index.js';
import axios from 'axios';
import Cookies from 'js-cookie';
import {Navigate} from 'react-router-dom'


 function Index() {
    const jwtToken = Cookies.get('jwt_token');
   const [data, setData]= useState([])
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState("")
     var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(()=>{
  
    const fetching = async ()=>{
        if(!jwtToken){
            return;
        }
        try{
            const response = await axios.get("https://apis.ccbp.in/restaurants-list/offers",
                {
                    headers: {
                        Authorization:`Bearer ${jwtToken}`
                    },
                })
                
                setData(response.data.offers)
                setLoading(false)
                
        }catch(error){
                
                setError(error)
        }

    }
    
    fetching()

  }, [jwtToken])

    if(jwtToken === undefined){
     return <Navigate to='/login' replace />

  }
  
const content =()=>{
    return(
        <>
        <section className='slider-section'>
        <div className='slider-main-container'>
            <div className='slider-container'>
                <Slider {...settings}>
                    {
                        data.map((eachData)=>(
                            <div key={eachData.id}>
                                <img className='sliderImage' alt={`banner-${eachData.id}`} src={eachData.image_url}  />
                            </div>
                        ))
                    }

                </Slider>
            </div>
        </div>
    </section>
    <PopularRestaurantsSection /></>
    )
}
  

  return (
   
   <>
    {loading&& <p>loading....</p>}
    {error && <p>*{error}</p>}
    {!loading && !error && content()}
    </>
  )
}
export default Index