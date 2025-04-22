import React from 'react'
import './HealthCare.css'
import '../../reUsableStyle.css';
import '../../responsiveStyle.css';

export default function HealthCare() {
  return (
    <>
      <div className="container">
      <div className="leading-box flex-between">
        <div className="healthcare-img">
          <img src="../src/assets/leading.png" alt="" />
        </div>
        <div className="healthcare-info">
          <h1>Leading healthcare Providers</h1>
          <hr className="divider-start" />
          <p className="body-text">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <button className="btn">Learn more</button>
        </div>
      </div>
    </div>
    </>
  )
}
