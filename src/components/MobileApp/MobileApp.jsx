import React from 'react'
import './MobileApp.css'
import '../../reUsableStyle.css';
import '../../responsiveStyle.css';

export default function MobileApp() {
  return (
    <>
      <div class="container">
      <div class="app-box flex-between">
        <div class="healthcare-img">
          <img src="../src/assets/app.png" alt="" />
        </div>
        <div class="healthcare-info">
          <h1>Download our mobile apps</h1>
          <hr class="divider-start" />
          <p class="body-text">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <button class="btn">
            Download
            <i class="fa-solid fa-arrow-down"></i>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
