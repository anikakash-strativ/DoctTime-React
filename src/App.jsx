import { useState } from 'react'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import Services from './components/Services/Services'
import HealthCare from './components/HealthCare/HealthCare'
import MobileApp from './components/MobileApp/MobileApp'


function App() {
  

  return (
    <>
      <Header/>
      <HeroSection/>
      <Services/>
      <HealthCare/>
      <MobileApp/>
    </>
  )
}

export default App
