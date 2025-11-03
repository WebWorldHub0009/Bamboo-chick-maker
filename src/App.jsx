import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from './pages/About'
import Contact from './pages/Contact'
// import Certificate from './pages/Certificate'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndCondition'
import Gallery from './pages/Gallery'
import Service from './pages/Service'
import ServiceDetail from './pages/ServiceDetail'

const App = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/products' element={<Service/>}/>
        <Route path='/services/:slug' element={<ServiceDetail/>}/>
      <Route path='/contact' element={<Contact/>}/>
       <Route path='/privacy&policy' element={<PrivacyPolicy/>}/>
        <Route path='/term&condition' element={<TermsAndConditions/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App