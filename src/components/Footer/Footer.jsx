import React from 'react'
import './Footer.css'
import '../../reUsableStyle.css';
import '../../responsiveStyle.css';

export default function Footer() {
  return (
    <>
     <footer  className="footer">
      <div  className="container footer-box flex-between">
        <div  className="logo">
          <img src="/assets/fotter-logo.svg" alt="" />
          <div>
            <p>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
          </div>
          <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
        </div>

        <div  className="options">
          <div  className="company">
            <ul>
              <li>Company</li>
              <li>About</li>
              <li>Testimonials</li>
              <li>Find a doctor</li>
              <li>Apps</li>
            </ul>
          </div>
          <div  className="region">
            <ul>
              <li>Region</li>
              <li>Indonesia</li>
              <li>Singapore</li>
              <li>Hongkong</li>
              <li>CANADA</li>
            </ul>
          </div>
          <div  className="help">
            <ul>
              <li>Help</li>
              <li>Help center</li>
              <li>Contact support</li>
              <li>Instructions</li>
              <li>How it works</li>
            </ul>
          </div>
        </div>
      </div>
    </footer> 
    </>
  )
}
