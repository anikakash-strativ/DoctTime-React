import React from 'react'
import './Reviews.css'
import '../../reUsableStyle.css';
import '../../responsiveStyle.css';

export default function Reviews() {
  return (
    <>
      <div  className="container">
      <div  className="review-box flex-between">
        <div  className="reveiw-hearder">
          <h1  className="heading-style">
            What our customer are saying
          </h1>
          <hr  className="divider" />
        </div>
        <div  className="review-info">
          <div  className="review-user-profile flex-center">
            <div  className="review-pic">
              <img
                id="review-image"
                 className="review-image"
                src="../src/assets/reviewprofile.png"
                alt=""
              />
            </div>
            <div  className="review-user-info flex-center">
              <h2 id="review-name">Edward Newgate</h2>
              <p id="review-position">Founder Circle</p>
            </div>
          </div>
          <div  className="review-description flex-center">
            <p  className="body-text"  id="review-text">
              “Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely”
            </p>
          </div>
        </div>
      </div>
      <div  className="review-controls flex-center">
        <button  className="control-btn" onclick="prevReview()">
          <i  className="fas fa-arrow-left"></i>
        </button>

        <div  className="dots flex-center" id="dots-container"></div>

        <button  className="control-btn" onclick="nextReview()">
          <i  className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
    </>
  )
}
