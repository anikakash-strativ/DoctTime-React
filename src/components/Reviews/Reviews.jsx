import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Reviews.css";
import "../../reUsableStyle.css";
import "../../responsiveStyle.css";


export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
    const fetchReview = async () =>{
        try{
          const response = await axios.get("/Data/reviewsData.json");
          setReviews(response.data);
        }catch(err){
          console.log(err);
        }
    }

    fetchReview();

  }, [])


  const prevReview = () => {
    setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);
  };

  const nextReview = () => {
    setCurrentIndex((currentIndex + 1) % reviews.length);
  };

  const currentReview = reviews[currentIndex] || {};
  return (
    <>
      <div className="container">
        <div className="review-box flex-between">
          <div className="reveiw-hearder">
            <h1 className="heading-style">What our customer are saying</h1>
            <hr className="divider" />
          </div>
          <div className="review-info">
            <div className="review-user-profile flex-center">
              <div className="review-pic">
                <img
                  id="review-image"
                  className="review-image"
                  src={currentReview.image}
                  alt="profile pic"
                />
              </div>
              <div className="review-user-info flex-center">
                <h2 id="review-name">{currentReview.name}</h2>
                <p id="review-position">{currentReview.position}</p>
              </div>
            </div>
            <div className="review-description flex-center">
              <p className="body-text" id="review-text">
                {currentReview.text}
              </p>
            </div>
          </div>
        </div>
        <div className="review-controls flex-center">
          <button className="control-btn" onClick={prevReview}>
            <FaArrowLeft />
          </button>

          <div className="dots flex-center" id="dots-container">
            {reviews.map((_, index) => (
              <div
                className={`dot ${index === currentIndex ? "active" : ""}`}
                key={index}
              ></div>
            ))}
          </div>

          <button className="control-btn" onClick={nextReview}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}
