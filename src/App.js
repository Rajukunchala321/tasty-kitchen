import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import SliderSection from './SliderSection/index.js';
import LoginForm from './LoginForm/index.js'
import Restaurant from './RestaurantPage/index.js'
import CheckOutPage from './CheckOutPage/index.js'
import NotFound from './NotFound/index.js'

export default function App() {
  return (
    <Routes>
       <Route exact path='/login' element={<LoginForm />}/>
       <Route exact path='/' element={<><Navbar /><SliderSection /></>}/>
       <Route exact path='/restaurant/:id' element={<><Navbar /><Restaurant/></>} />
       <Route exact path='/restaurant/cart' element={<><Navbar/><CheckOutPage/> </>} />
      <Route path="*" element={<><Navbar/><NotFound /> </>}  />  
    </Routes>
   
  )
}
