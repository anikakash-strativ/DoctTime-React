import React from 'react'
import './Services.css'
import '../../reUsableStyle.css';
import '../../responsiveStyle.css';

export default function Services() {
  return (
    <>
    <div class="container">
      <div class="service flex-center">
        <div class="service-heading">
          <h1>Our service</h1>
          <hr class="divider" />
          <p class="body-text">
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </div>
        <div class="service-details">
          {/* Card 1 */}
          <div class="service-detail">
            <div class="box">
              <img  src="../src/assets/search.png" alt="Search doctor" />
              <h2>Search doctor</h2>
              <p class="body-text">
                Choose your doctor from thousands of specialist, general, and
                trusted hospitals
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div class="service-detail">
            <div class="box">
              <img
                
                src="../src/assets/pharmacy.png"
                alt="Online pharmacy"
              />
              <h2>Online pharmacy</h2>
              <p class="body-text">
                Buy your medicines with our mobile application with a simple
                delivery system
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div class="service-detail">
            <div class="box">
              <img  src="../src/assets/consult.png" alt="Consultation" />
              <h2>Consultation</h2>
              <p class="body-text">
                Free consultation with our trusted doctors and get the best
                recommendations
              </p>
            </div>
          </div>

          {/* <!-- Card - 4 --> */}
          <div class="service-detail">
            <div class="box">
              <img  src="../src/assets/details.png" alt="Details info" />
              <h2>Details info</h2>
              <p class="body-text">
                Free consultation with our trusted doctors and get the best
                recommendations
              </p>
            </div>
          </div>

          {/* <!-- Card - 5 --> */}
          <div class="service-detail">
            <div class="box">
              <img
                
                src="../src/assets/emergency.png"
                alt="Emergency care"
              />
              <h2>Emergency care</h2>
              <p class="body-text">
                You can get 24/7 urgent care for yourself or your children and
                your lovely family
              </p>
            </div>
          </div>

          {/* <!-- Card - 6 --> */}
          <div class="service-detail">
            <div class="box">
              <img  src="../src/assets/tracking.png" alt="Tracking" />
              <h2>Tracking</h2>
              <p class="body-text">
                Track and save your medical history and health data
              </p>
            </div>
          </div>
        </div>
        <div class="service-btn">
          <button class="btn">Learn more</button>
        </div>
      </div>
    </div>
    </>
  )
}
