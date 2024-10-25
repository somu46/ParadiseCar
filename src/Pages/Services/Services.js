// Services.js
import React, { useState } from 'react';
import './Services.css';
import Airport from '../../Assets/Airport.png'
import outstation from '../../Assets/outstation.jpg'
import kilometer from '../../Assets/kilometer.png'
const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentService, setCurrentService] = useState(null);

  const services = [
    { 
      title: 'Airport Pickup & Drop', 
      description: 'Convenient and reliable airport transportation.', 
      details: 'We provide prompt, professional pickups and drop-offs to and from the airport, ensuring a comfortable ride.', 
      image: Airport
    },
    { 
      title: 'Outstation Travel', 
      description: 'Enjoy one-way or round trips with flexible options.', 
      details: 'Ideal for outstation travel, we offer flexible one-way and round-trip options with comfortable vehicles to suit your needs.', 
      image: outstation 
    },
    { 
      title: 'Kilometer-wise Rental', 
      description: 'Pay only for the distance you travel.', 
      details: 'Flexible kilometer-wise rental options for cost-effective, customized trips.', 
      image: kilometer 
    },
  ];

  const openModal = (service) => {
    setCurrentService(service);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='service-container'>
      <div className="services">
        <h1>Our Services</h1>
        <div className="service-cards">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.image} alt={service.title} />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <button className="btn-learn-more" onClick={() => openModal(service)}>Learn More</button>
            </div>
          ))}
        </div>
        
        {showModal && currentService && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>{currentService.title}</h2>
              <p>{currentService.details}</p>
              <button className="btn-close" onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;