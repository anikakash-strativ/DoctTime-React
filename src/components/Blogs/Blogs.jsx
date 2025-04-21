import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import './Blogs.css';
import '../../reUsableStyle.css';
import '../../responsiveStyle.css';

export default function Blogs() {
  return (
    <>
        <div  className="container">
      <div  className="blog-box">
        <div  className="blog-header">
          <h2>Check out our latest article</h2>
          <hr  className="divider" />
        </div>
        <div  className="blogs">
          <div  className="blog flex-between">
            <img src="../src/assets/checkup.png" alt="" />
            <div  className="blog-text">
              <h3>Disease detection, check up in the laboratory</h3>
              <p>
                In this case, the role of the health laboratory is very
                important to do a disease detection...
              </p>
            </div>
            <div  className="blog-read-more">
            <div className="read-more"><a href="">Read more</a></div> 
            <div className='read-more-icon'><FaArrowRight /></div>
            </div>
          </div>
          <div  className="blog flex-between">
            <img src="../src/assets/research.png" alt="" />
            <div  className="blog-text">
              <h3>Herbal medicines that are safe for consumption</h3>
              <p>
                Herbal medicine is very widely used at this time because of its
                very good for your health...
              </p>
            </div>
            <div  className="blog-read-more">
            <div className="read-more"><a href="">Read more</a></div> 
            <div className='read-more-icon'><FaArrowRight /></div>
            </div>
          </div>
          <div  className="blog flex-between">
            <img src="../src/assets/nature.png" alt="" />
            <div  className="blog-text">
              <h3>Natural care for healthy facial skin</h3>
              <p>
                A healthy lifestyle should start from now and also for your skin
                health. There are some...
              </p>
            </div>
            <div  className="blog-read-more">
              <div className="read-more"><a href="">Read more</a></div> 
              <div className='read-more-icon'><FaArrowRight /></div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    </>
  )
}
