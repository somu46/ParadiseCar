import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { SiGooglemaps } from 'react-icons/si';
import './social.css';

const Social = () => {
  return (
    <div className="social-container">
      <div className="icon-group">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
          <FaFacebook aria-label="Facebook" />
        </a>
        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="social-icon googlemaps">
          <SiGooglemaps aria-label="Google Maps" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
          <FaInstagram aria-label="Instagram" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
          <FaYoutube aria-label="YouTube" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
          <FaXTwitter aria-label="Twitter" />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
          <FaWhatsapp aria-label="WhatsApp" />
        </a>
      </div>
    </div>
  );
}

export default Social;
