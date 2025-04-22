import { useState } from 'react'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import Services from './components/Services/Services'
import HealthCare from './components/HealthCare/HealthCare'
import MobileApp from './components/MobileApp/MobileApp'
import Reviews from './components/Reviews/Reviews'
import Blogs from './components/Blogs/Blogs'
import Footer from './components/Footer/Footer'


function App() {
  

  return (
    <>
      <Header/>
      <HeroSection/>
      <Services/>
      <HealthCare/>
      <MobileApp/>
      <Reviews/>
      <Blogs/>
      <Footer/>
    </>
  )
}

export default App
