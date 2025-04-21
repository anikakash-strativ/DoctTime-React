import React from 'react'
import './Services.css'
import '../../reUsableStyle.css';
import '../../responsiveStyle.css';

export default function Services() {
  return (
    <>
    <div className="container">
      <div className="service flex-center">
        <div className="service-heading">
          <h1>Our service</h1>
          <hr className="divider" />
          <p className="body-text">
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </div>
        <div className="service-details">
          {/* Card 1 */}
          <div className="service-detail">
            <div className="box">
              <img  src="../src/assets/search.png" alt="Search doctor" />
              <h2>Search doctor</h2>
              <p className="body-text">
                Choose your doctor from thousands of specialist, general, and
                trusted hospitals
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="service-detail">
            <div className="box">
              <img
                
                src="../src/assets/pharmacy.png"
                alt="Online pharmacy"
              />
              <h2>Online pharmacy</h2>
              <p className="body-text">
                Buy your medicines with our mobile application with a simple
                delivery system
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="service-detail">
            <div className="box">
              <img  src="../src/assets/consult.png" alt="Consultation" />
              <h2>Consultation</h2>
              <p className="body-text">
                Free consultation with our trusted doctors and get the best
                recommendations
              </p>
            </div>
          </div>

          {/* <!-- Card - 4 --> */}
          <div className="service-detail">
            <div className="box">
              <img  src="../src/assets/details.png" alt="Details info" />
              <h2>Details info</h2>
              <p className="body-text">
                Free consultation with our trusted doctors and get the best
                recommendations
              </p>
            </div>
          </div>

          {/* <!-- Card - 5 --> */}
          <div className="service-detail">
            <div className="box">
              <img
                
                src="../src/assets/emergency.png"
                alt="Emergency care"
              />
              <h2>Emergency care</h2>
              <p className="body-text">
                You can get 24/7 urgent care for yourself or your children and
                your lovely family
              </p>
            </div>
          </div>

          {/* <!-- Card - 6 --> */}
          <div className="service-detail">
            <div className="box">
              <img  src="../src/assets/tracking.png" alt="Tracking" />
              <h2>Tracking</h2>
              <p className="body-text">
                Track and save your medical history and health data
              </p>
            </div>
          </div>
        </div>
        <div className="service-btn">
          <button className="btn">Learn more</button>
        </div>
      </div>
    </div>
    </>
  )
}
