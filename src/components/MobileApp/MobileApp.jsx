import React from 'react'
import './MobileApp.css'
import '../../reUsableStyle.css';
import '../../responsiveStyle.css';

export default function MobileApp() {
  return (
    <>
      <div className="container">
      <div className="app-box flex-between">
        <div className="healthcare-img">
          <img src="../src/assets/app.png" alt="" />
        </div>
        <div className="healthcare-info">
          <h1>Download our mobile apps</h1>
          <hr className="divider-start" />
          <p className="body-text">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <button className="btn">
            Download
            <i className="fa-solid fa-arrow-down"></i>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}
