import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

import useStore from "../../Store/store";

import { FaFacebook, FaInstagram } from "react-icons/fa";
import darkLogo from "../../Assets/Dark_ParadiseCar.png"; // Logo for dark background
import lightLogo from "../../Assets/light_ParadiseCar.png"; // Logo for light background


const Footer = () => {

  const {isStoreDarkMode}=useStore();
    const handleHistory = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer
      className={`footer ${

        isStoreDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-slate-600"
      } overflow-x-hidden min-w-[100%] shadow-lg rounded-lg`}

        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-slate-600"
      } overflow-hidden shadow-lg rounded-lg p-8`}

    >
      {/* Footer Main Grid Layout */}
      <div className="footer-grid">
        
        {/* Logo and Description Section (40%) */}
        <div className="footer-section logo-section">
          <div className="flex items-center mb-4">
            <img
              src={isDarkMode ? darkLogo : lightLogo}
              alt="Paradise Car Rental"
              className="footer-logo"
            />
            <Link
              to="/"

              className={`flex flex-row text-xl md:text-3xl font-bold md:m-3 text-left hover:${
                isStoreDarkMode ? "text-blue-300" : "text-pink-700"
              } hover:scale-110 hover:border-2 transition-all duration-300 ease-in-out hover:tracking-wider`}

             
            >
            </Link>
          </div>

          <div className="flex flex-wrap flex-col md:max-w-[25%] h-auto font-semibold md:m-5 md:p-4 min-h-9">
            <Link
              to="/Services"
              className="text-xl mx-6 text-center font-bold max-w-[30%] md:max-w-[90%] md:m-3 border-b-2 border-red-600 hover:text-red-600"
            >
              <p className="flex ">Services</p>
            </Link>
            <Link
              to="/Services"
              className="max-w-[45%] md:max-w-full text-sm text-center m-1 hover:text-red-600"
            >
              Services
            </Link>
          </div>
          <div className="flex flex-wrap flex-col w-full md:max-w-[20%] h-auto font-semibold m-3 p-4 min-h-9">
            <Link
              to="/"
              className="text-xl font-bold m-3 border-b-2 max-w-[45%] md:max-w-[35%] border-red-600 hover:text-red-600"
            >
              <p>Contact</p>
            </Link>
            <Link
              to="/contactUs"
              onClick={handleHistory}
              className="text-sm items-start text-left m-1 hover:text-red-600"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex flex-wrap flex-col w-full md:max-w-[25%] h-auto font-semibold p-4 min-h-9">
            <p className="text-xl font-bold m-3 border-b-2 border-red-600 max-w-[50%] md:max-w-[120px] hover:text-red-600">
              NEWSLETTER
            </p>
            <p className="text-sm items-start text-left m-1">
              Be the first to know about new arrivals, look books, sales & promos!
            </p>
            <div className="flex flex-row m-3">
              <input
                type="email"
                name="Email"
                className={`border-gray-500 rounded-xl w-full md:w-64 lg:w-75 xl:w-120 border px-4 py-2 ${
                  isStoreDarkMode ? "bg-gray-700 text-white" : "bg-white "
                }`}
              />
              <button
                type="submit"
                className="bg-sky-500 rounded-md ml-3 p-2 border shadow-md cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
              >
                <p className="text-white">Submit</p>
              </button>
            </div>

          <p className="footer-description text-sm">
            At Paradise Car Rental, we pride ourselves on offering top-notch car rental services tailored to meet the diverse needs of our clients.
          </p>
        </div>

        {/* Services Section (15%) */}
        <div className="footer-section">
          <h3 className="footer-heading">Services</h3>
          <Link to="/Services" className="footer-link">Our Services</Link>
          <Link to="/pricing" className="footer-link">Pricing</Link>
        </div>

        {/* Contact Section (15%) */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <Link to="/contactUs" onClick={handleHistory} className="footer-link">Contact Us</Link>
          <Link to="/Faqs" className="footer-link">FAQ</Link>
        </div>

        {/* Newsletter Section (30%) */}
        <div className="footer-section">
          <h3 className="footer-heading">Newsletter</h3>
          <p className="footer-text">Be the first to know about new arrivals, promotions, and more!</p>
          <div className="newsletter-form">
            <input
              type="email"
              name="Email"
              placeholder="Your email"
              className={`footer-input ${
                isDarkMode ? "bg-gray-700 text-white" : "bg-white"
              }`}
            />
            <button type="submit" className="footer-button">
              Submit
            </button>

          </div>
        </div>
      </div>

      {/* Social Media Icons and Copyright */}
      <div className="footer-bottom mt-8 flex flex-col items-center">
        <div className="social-icons flex space-x-4 mb-4">
          <a href="www.facebook.com" className="social-link"><FaFacebook /></a>
          
          <a href="www.instagram.com" className="social-link"><FaInstagram /></a>
        </div>
        <p className="text-sm font-light text-center">
          © 2024 Paradise Car Rental. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
