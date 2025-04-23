import React from 'react'
import './Services.css'
import '../../reUsableStyle.css';
import '../../responsiveStyle.css';
import Service from './Service/Service';

export default function Services() {

  const serviceData = [
    {
      imgSrc: '/assets/search.png',
      altText: 'Search doctor',
      title: 'Search doctor',
      description: 'Choose your doctor from thousands of specialist, general, and trusted hospitals',
    },
    {
      imgSrc: '/assets/pharmacy.png',
      altText: 'Online pharmacy',
      title: 'Online pharmacy',
      description: 'Buy your medicines with our mobile application with a simple delivery system',
    },
    {
      imgSrc: '/assets/consult.png',
      altText: 'Consultation',
      title: 'Consultation',
      description: 'Free consultation with our trusted doctors and get the best recommendations',
    },
    {
      imgSrc: '/assets/details.png',
      altText: 'Details info',
      title: 'Details info',
      description: 'Free consultation with our trusted doctors and get the best recommendations',
    },
    {
      imgSrc: '/assets/emergency.png',
      altText: 'Emergency care',
      title: 'Emergency care',
      description: 'You can get 24/7 urgent care for yourself or your children and your lovely family',
    },
    {
      imgSrc: '/assets/tracking.png',
      altText: 'Tracking',
      title: 'Tracking',
      description: 'Track and save your medical history and health data',
    },
  ];

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
          {
            serviceData.map((service, index) => (
              <Service
                key = {index}
                imgSrc = {service.imgSrc}
                title = {service.title}
                description = {service.description}
                altText = {service.altText}
              />
            ))
          }
        </div>
        <div className="service-btn">
          <button className="btn">Learn more</button>
        </div>
      </div>
    </div>
    </>
  )
}
