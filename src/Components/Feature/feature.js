import React from 'react';
import './feature.css';
import { IoEarth, IoPricetagsOutline } from "react-icons/io5";
import { GiCityCar, GiWatch } from "react-icons/gi";
import { FaCity } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";


const featuresList = [
  { icon: <IoEarth aria-label="Earth Icon" />, text: "Anywhere Delivery" },
  { icon: <GiCityCar aria-label="City Car Icon" />, text: "Fresh and Hygiene Maintained" },
  { icon: <MdOutlinePrivacyTip aria-label="Privacy Tip Icon" />, text: "Privacy and Freedom" },
  { icon: <FaCity aria-label="City Icon" />, text: "Kolkata" },
];

const whyRideList = [
  { icon: <FaIndianRupeeSign aria-label="Rupee Icon" />, text: "Multiple Payment Options" },
  { icon: <GiWatch aria-label="Watch Icon" />, text: "Punctuality" },
  { icon: <IoPricetagsOutline aria-label='Best Price' />, text: "Best Price Guarantee" },
  { icon: <FaCity aria-label="City Icon" />, text: "Easy Cancellation" },
];

const FeatureBox = ({ icon, text }) => (
  <div className="feature-box">
    <div className="icon">{icon}</div>
    <p>{text}</p>
  </div>
);

const Feature = () => {
  return (
    <div className="feature-container">
      <section className="features">
        <h1>Features & Benefits</h1>
        <div className="features-container">
          {featuresList.map((feature, index) => (
            <FeatureBox key={index} icon={feature.icon} text={feature.text} />
          ))}
        </div>
      </section>

      <section className="whyRide">
        <h1>Why ride with Paradise?</h1>
        <div className="features-container">
          {whyRideList.map((feature, index) => (
            <FeatureBox key={index} icon={feature.icon} text={feature.text} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Feature;
