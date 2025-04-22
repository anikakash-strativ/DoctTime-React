import React from 'react' 
import '../../../reUsableStyle.css'; 
import '../../../responsiveStyle.css'; 

export default function Service({imgSrc, altText, title, description}) {
  return (
    <>
      <div className="service-detail">
            <div className="box">
              <img  src={imgSrc} alt={altText} />
              <h2>{title}</h2>
              <p className="body-text">
                {description}
              </p>
            </div>
          </div>
    </>
  )
}
