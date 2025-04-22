import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Reviews.css";
import "../../reUsableStyle.css";
import "../../responsiveStyle.css";

const reviews = [
  {
    image: "../src/assets/reviewprofile.png",
    name: "Edward Newgate",
    position: "Founder Circle",
    text: "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious forms, long calls, or administrative hassle) and securely.”",
  },
  {
    image: "../src/assets/reviewprofile.png",
    name: "Samantha Green",
    position: "CEO, TechCorp",
    text: "“This platform has revolutionized how we engage with our clients. The seamless integration and user-friendly interface are outstanding!”",
  },
  {
    image: "../src/assets/reviewprofile.png",
    name: "John Doe",
    position: "Product Manager",
    text: "“Amazing service! The support team is always there to help, and the features have streamlined our processes immensely.”",
  },
];

export default function Reviews() {
  const [review, setReview] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);
  };

  const nextReview = () => {
    setCurrentIndex((currentIndex + 1) % reviews.length);
  };

  const currentReview = reviews[currentIndex];
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
                  alt=""
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
