import React from 'react'
import './HealthCare.css'
import '../../reUsableStyle.css';
import '../../responsiveStyle.css';

export default function HealthCare() {
  return (
    <>
      <div class="container">
      <div class="leading-box flex-between">
        <div class="healthcare-img">
          <img src="../src/assets/leading.png" alt="" />
        </div>
        <div class="healthcare-info">
          <h1>Leading healthcare Providers</h1>
          <hr class="divider-start" />
          <p class="body-text">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <button class="btn">Learn more</button>
        </div>
      </div>
    </div>
    </>
  )
}
