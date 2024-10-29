// Services.js
import React, { useState } from 'react';
import './Services.css';
import Airport from '../../Assets/Airport.png'
import outstation from '../../Assets/outstation.jpg'
import kilometer from '../../Assets/kilometer.png'
import Calendar from '../../Assets/calendar.png'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FloatingWhatsAppButton from "../../Components/FloatWhatsapp/FloatingWhatsAppButton";


const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const navigate=useNavigate();

const handleNavigate=()=>{
navigate("/BookNow");
// console.log();

window.scrollTo(0, 0);
}

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
    { 
      title: 'Monthly Rental', 
      description: 'Pay an amount And the Car and Driver is yours for a Month.', 
      details: 'Flexible kilometer-wise rental options for cost-effective, customized trips.', 
      image: Calendar 
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
      <FloatingWhatsAppButton/>
      <div className="services">
        <h1>Our Services</h1>
        <div className="service-cards ">
          {services.map((service, index) => (
            <div className="relative service-card" key={index}> {/* Set each card as relative */}
            <img src={service.image} alt={service.title} />
            <h2>{service.title}</h2>
            <p className='md:pb-5'>{service.description}</p>
            <div className="absolute bottom-0 left-0 w-full  p-4 flex justify-between items-center ">
              <Button className="btn-learn-more" onClick={() => openModal(service)}>Learn More</Button>
              <Button onClick={handleNavigate} variant="outlined">Book Now</Button>
            </div>
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
