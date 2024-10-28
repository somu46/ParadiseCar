import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import './floatingWhatsAppButton.css';

const FloatingWhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/1234567890', '_blank'); // Replace with your WhatsApp number
  };

  return (
    <div className="floating-whatsapp-button" onClick={handleWhatsAppClick}>
      <FaWhatsapp aria-label="WhatsApp" />
    </div>
  );
};

export default FloatingWhatsAppButton;
