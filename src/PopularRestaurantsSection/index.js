import React from 'react'
import './index.css'
const index = () => {
  return (
   <section>
        <div className='pouplar-restaurants-main-container'>
            <h2>Popular Restaurants</h2>
            <div>
                <p>Select Your favourite restaurant special dish and make your day happy...</p>
                <div className='filter-container'>
                    <img src='' alt='sort' />
                    <p>Sort by Lowest</p>
                </div>
            </div>

        </div>
   </section>
  )
}

export default index