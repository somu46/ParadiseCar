import React from "react";
import './About.css';
import { ContactComponent } from "../Contact/contactUs";

const AboutUs = () => {
  return (
    <div className="about-section flex flex-wrap flex-col ">
      <div className="about-wrapper">
        <div className="about-image">
          <img alt="CEO" className="profile-image" />
          <h3>SUDIPTA KARMAKAR</h3>
        </div>

        <div className="about-content">
          <p>
            At <b>Paradise Car Rental</b>, we pride ourselves on offering top-notch car
            rental services tailored to meet the diverse needs of our clients.
            Founded by Sudipta Karmakar, our company is committed to providing
            reliability, comfort, and convenience, ensuring a seamless travel
            experience for those looking to journey between cities. Our
            extensive fleet of well-maintained vehicles ensures that you can
            choose the perfect ride for your trip, whether you’re traveling for
            business or leisure. Our professional drivers are not only skilled
            behind the wheel but also courteous and knowledgeable, guaranteeing
            a safe and pleasant journey. At Paradise Car Rental, our mission is
            to deliver exceptional service that exceeds your expectations,
            making every journey a memorable one.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap  w-full p-0 h-auto  mx-0 ">
        <ContactComponent />
      </div>
    </div>
  );
};

export default AboutUs;
