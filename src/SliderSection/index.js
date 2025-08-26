import React from 'react';
import './index.css'
import Slider from "react-slick";

export default function index() {
     var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    const cards=[{
        img:"./assests/banner.png"
    },
{
        img:"./assests/banner.png"
    },
{
        img:"./assests/banner.png"
    },
{
        img:"./assests/banner.png"
    },
{
        img:"./assests/banner.png"
    }]
  return (
    <section className='slider-section'>
        <div className='slider-main-container'>
            <div className='slider-container'>
                <Slider {...settings}>
                    {
                        cards.map((eachCard, index)=>(
                            <div id={index}>
                                <img className='sliderImage' src={eachCard.img} alt={`banner-${index}`} />
                            </div>
                        ))
                    }

                </Slider>
            </div>
        </div>
    </section>
  )
}
