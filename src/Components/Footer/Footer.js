import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import useStore from "../../Store/store";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import darkLogo from "../../Assets/Dark_ParadiseCar.png";
import lightLogo from "../../Assets/light_ParadiseCar.png";

const Footer = () => {
  const { isStoreDarkMode } = useStore();

  const handleHistory = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer
      className={`footer ${
        isStoreDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-slate-600"
      } overflow-x-hidden min-w-[100%] shadow-lg rounded-lg`}
    >
      {/* Footer Main Grid Layout */}
      <div className="footer-grid">
        
        {/* Logo and Description Section (40%) */}
        <div className="footer-section logo-section">
          <div className="flex items-center mb-4">
            <img
              src={isStoreDarkMode ? darkLogo : lightLogo}
              alt="Paradise Car Rental"
              className="footer-logo"
            />
            <Link
              to="/"
              className={`flex flex-row text-xl md:text-3xl font-bold md:m-3 text-left ${
                isStoreDarkMode ? "hover:text-blue-300" : "hover:text-pink-700"
              } hover:scale-110 hover:border-2 transition-all duration-300 ease-in-out hover:tracking-wider`}
            >
              Paradise Car Rental
            </Link>
          </div>

          <p className="footer-description text-sm">
            At Paradise Car Rental, we pride ourselves on offering top-notch car rental services tailored to meet the diverse needs of our clients.
          </p>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Services</h3>
          <Link to="/Services" className="footer-link">Our Services</Link>
          <Link to="/pricing" className="footer-link">Pricing</Link>
        </div>

        {/* Contact Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <Link to="/contactUs" onClick={handleHistory} className="footer-link">Contact Us</Link>
          <Link to="/Faqs" className="footer-link">FAQ</Link>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section">
          <h3 className="footer-heading">Newsletter</h3>
          <p className="footer-text">Be the first to know about new arrivals, promotions, and more!</p>
          <div className="newsletter-form">
            <input
              type="email"
              name="Email"
              placeholder="Your email"
              className={`footer-input ${
                isStoreDarkMode ? "bg-gray-700 text-white" : "bg-white"
              }`}
            />
            <button
              type="submit"
              className="footer-button bg-sky-500 text-white rounded-md ml-3 p-2 shadow-md cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Social Media Icons and Copyright */}
      <div className="footer-bottom mt-8 flex flex-col items-center">
        <div className="social-icons flex space-x-4 mb-4">
          <a href="https://www.facebook.com" className="social-link"><FaFacebook /></a>
          <a href="https://www.instagram.com" className="social-link"><FaInstagram /></a>
        </div>
        <p className="text-sm font-light text-center">
          © 2024 Paradise Car Rental. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
