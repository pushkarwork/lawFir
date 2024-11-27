import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './Components/Home/Home'
import Navbar from "./Components/Navar/Navbar"
import "./App.css"
import AboutMain from './Components/about/AboutMain'
import ServicesMain from './Components/services/ServicesMain'
import AttornMain from './Components/attorneys/AttornMain'

import ContactMain from './Components/contact/ContactMain'
import SingleAttorney from './Components/singAttorney/SingleAttorney'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutMain />} />
        <Route path='/services' element={<ServicesMain />} />
        <Route path='/attorneys' element={<AttornMain />} />
        <Route path='/contact' element={<ContactMain />} />
        <Route path='/attorney/:id' element={<SingleAttorney />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
