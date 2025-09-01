import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import SliderSection from './SliderSection/index.js';
import LoginForm from './LoginForm';
import Restaurant from './RestaurantPage';
import CheckOutPage from './CheckOutPage';
import NotFound from './NotFound';

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
