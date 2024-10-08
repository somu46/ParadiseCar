import React from 'react';
import './About.css'; // Import the CSS file
const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to <span>Paradise Car Rental</span> <br/>Your Trusted Car Rental Partner</h1>
        <p className="hero-description">
          Embark on a seamless journey with Rentax, where convenience meets reliability. We take pride in offering a fleet of top-quality vehicles to suit your every need. Whether it's a business trip, family vacation, or a weekend getaway, Rentax ensures a hassle-free experience from start to finish.
        </p>
        <ul className="features-list">
          <li>✔ Budget-Friendly Explorers</li>
          <li>✔ Luxury Cruiser Fleet</li>
          <li>✔ Sporty Velocity Models</li>
        </ul>
        <button className="rent-button">Rent Now</button>
      </div>
      <div className="hero-image">
        <img src="your-image-url-here" alt="Car rental" />
        <div className="play-button">
          <i className="fa fa-play-circle"></i>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;