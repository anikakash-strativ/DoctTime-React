import { useState } from 'react'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import Services from './components/Services/Services'
import HealthCare from './components/HealthCare/HealthCare'


function App() {
  

  return (
    <>
      <Header/>
      <HeroSection/>
      <Services/>
      <HealthCare/>
    </>
  )
}

export default App
