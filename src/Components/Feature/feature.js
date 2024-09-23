import React from 'react';
import './feature.css';
import { IoEarth } from "react-icons/io5";
import { GiCityCar, GiWatch } from "react-icons/gi";
import { FaCity } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import Bestprice from '../../Assets/Best_price.png'

const Feature = () => {
  return (
    <div className='featureWhy'>
    <div className='features'>
      <h1>Features & Benefits</h1>
      <div className="features-container">
        <div className="feature-box">
          <IoEarth className="icon" />
          <p>Anywhere Delivery</p>
        </div>
        <div className="feature-box">
          <GiCityCar className="icon" />
          <p>Fresh and Hygiene Maintained</p>
        </div>
        <div className="feature-box">
          <MdOutlinePrivacyTip className="icon" />
          <p>Privacy and Freedom</p>
        </div>
        <div className="feature-box">
          <FaCity className="icon" />
          <p>Kolkata</p>
        </div>
      </div>
    </div>


<div className='WhyWe'>
      <h1>Why ride with Paradise?</h1>
      <div className="features-container">
        <div className="feature-box">
          <FaIndianRupeeSign className="icon" />
          <p>Multiple Payment Options</p>
        </div>
        <div className="feature-box">
          <GiWatch className="icon" />
          <p>Punctuality</p>
        </div>
        <div className="feature-box">
          <img src={Bestprice} alt='bal' className="icon" />
          <p>Best Price Guarantee</p>
        </div>
        <div className="feature-box">
          <FaCity className="icon" />
          <p>Easy Cancellation</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Feature;
