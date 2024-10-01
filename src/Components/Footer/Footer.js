import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = ({ isDarkMode }) => {
  const handleHistory = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer
      className={`footer ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-slate-600"
      } overflow-x-hidden min-w-[100%] shadow-lg rounded-lg`}
    >
      <div className="flex flex-wrap flex-col justify-center md:flex-row md:justify-evenly min-w-full min-h-10 p-4 mx-1 mt-3 element">
        <div className="flex flex-wrap flex-col justify-center md:flex-row md:justify-evenly m-5">
          <div className="flex flex-wrap flex-col justify-center text-left max-w-[25%] h-auto font-semibold m-3 p-3">
            <Link
              to="/"
              className={`flex flex-row text-xl md:text-3xl font-bold md:m-3 text-left hover:${
                isDarkMode ? "text-blue-300" : "text-pink-700"
              } hover:scale-110 hover:border-2 transition-all duration-300 ease-in-out hover:tracking-wider`}
            >
              <p className="seva">Paradise </p>
              <p className="ride">Car</p>
            </Link>
            <p className="text-sm max-h-[15rem] md:h-auto">
              At Paradise Car Rental, we pride ourselves on offering top-notch car rental services tailored to meet the diverse needs of our clients.
            </p>
          </div>
          <div className="flex flex-wrap flex-col md:max-w-[25%] h-auto font-semibold md:m-5 md:p-4 min-h-9">
            <Link
              to="/Services"
              className="text-xl mx-6 text-center font-bold max-w-[30%] md:max-w-[90%] md:m-3 border-b-2 border-red-600 hover:text-red-600"
            >
              <p className="flex ">Training</p>
            </Link>
            <Link
              to="/Services"
              className="max-w-[45%] md:max-w-full text-sm text-center m-1 hover:text-red-600"
            >
              Driver Training
            </Link>
          </div>
          <div className="flex flex-wrap flex-col w-full md:max-w-[20%] h-auto font-semibold m-3 p-4 min-h-9">
            <Link
              to="/"
              className="text-xl font-bold m-3 border-b-2 max-w-[45%] md:max-w-[35%] border-red-600 hover:text-red-600"
            >
              <p>SERVICES</p>
            </Link>
            <Link
              to="/Contact"
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
                  isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
                }`}
              />
              <button
                type="submit"
                className="bg-sky-500 rounded-md ml-3 p-2 border shadow-md cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
              >
                <p className="text-white">Submit</p>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap flex-row justify-evenly min-w-screen m-3 p-1 border-t-2 border-[#292929] min-w-[75%]">
          <p className="font-semibold">
            Copyright © 2024 All rights reserved | This Awesome site is made with SASSS Group
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
