import React from 'react'
import {BrowserRouter , Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import SliderSection from './SliderSection/index.js';
import LoginForm from './LoginForm/Index.js'

export default function App() {
  return (
   
   <BrowserRouter>
    <Routes>
       <Route exact path='/' element={<LoginForm />}/>
    </Routes>
   </BrowserRouter>
   
  )
}
