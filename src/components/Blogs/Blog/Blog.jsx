import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "../Blogs.css";
import '../../../reUsableStyle.css'; 
import '../../../responsiveStyle.css';


export default function Blog( {imgSrc, title, description} ) {
  return (
    <>
      <div className="blog flex-between">
        <img src={imgSrc} alt="" />
        <div className="blog-text">
          <h3>{title}</h3>
          <p>
            {description}
          </p>
        </div>
        <div className="blog-read-more">
          <div className="read-more">
            <a href="">Read more</a>
          </div>
          <div className="read-more-icon">
            <FaArrowRight />
          </div>
        </div>
      </div>
    </>
  );
}
