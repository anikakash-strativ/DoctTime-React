import React from 'react'
import '../../reUsableStyle.css';
import './HeroSection.css'
import '../../responsiveStyle.css';

export default function HeroSection() {
  return (
    <>
        <div className="container">
            <div className="hero flex-between">
                <div className="heading flex-center">
                <h1 className="heading-style heading-align">Virtual healthcare for you</h1>
                <p className="body-text">
                    Trafalgar provides progressive, and affordable healthcare,
                    accessible on mobile and online for everyone
                </p>
                <button className="head-btn">Consult today</button>
                </div>
                <div className="hero-img healthcare-img">
                <img src="../src/assets/heroimg.png" alt="" />
                </div>
            </div>
        </div>
    </>
  )
}
