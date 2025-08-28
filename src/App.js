import React from 'react'
import {BrowserRouter , Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import SliderSection from './SliderSection/Index.js';
import LoginForm from './LoginForm/Index.js'

export default function App() {
  return (
   
   <BrowserRouter>
    <Routes>
       <Route exact path='/login' element={<LoginForm />}/>
       <Route exact path='/' element={<><Navbar /><SliderSection /></>}/>
    </Routes>
   </BrowserRouter>
   
  )
}
