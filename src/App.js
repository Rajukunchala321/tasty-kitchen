import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar/Index.js'
import SliderSection from './SliderSection/Index.js';
import LoginForm from './LoginForm/Index.js'
import Restaurant from './RestaurantPage/Index.js'
import CheckOutPage from './CheckOutPage/Index.js'

export default function App() {
  return (
    <Routes>
       <Route exact path='/login' element={<LoginForm />}/>
       <Route exact path='/' element={<><Navbar /><SliderSection /></>}/>
       <Route exact path='/restaurant/:id' element={<><Navbar /><Restaurant/></>} />
       <Route exact path='/restaurant/cart' element={<><Navbar/><CheckOutPage/> </>} />
    </Routes>
   
  )
}
