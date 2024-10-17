import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Theme from '../../Components/Theme/Theme';
import Hamburger from 'hamburger-react';
import Light_Logo from '../../Assets/light_ParadiseCar.png';
import Dark_Logo from '../../Assets/Dark_ParadiseCar.png';

const Navbar = ({ isDarkMode, handleThemeToggle }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="navbar-logo-container">
        <a href='https://paradisecar.in/'>
          <img
            src={isDarkMode ? Dark_Logo : Light_Logo}
            alt="Paradise Car Rental"
            className="navbar-logo"
          />
        </a>
      </div>

      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li>
          <NavLink to="/" className={({ isActive }) =>`${isActive ? "text-yellow-400" : "inherit"}`}> Home </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) =>`${isActive ? "text-yellow-400" : "inherit"}`}> About </NavLink>
        </li>
        <li>
          <NavLink to="/services"className={({ isActive }) =>`${isActive ? "text-yellow-400" : "inherit"}`}>Services</NavLink>
        </li>
        <li>
          <NavLink to="/cars" className={({ isActive }) =>`${isActive ? "text-yellow-400" : "inherit"}`}>Cars</NavLink>
        </li>
        <li>
          <NavLink to="/pricing" className={({ isActive }) =>`${isActive ? "text-yellow-400" : "inherit"}`}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/contactUs"className={({ isActive }) =>`${isActive ? "text-yellow-400" : "inherit"}`}>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/Faqs" className={({ isActive }) =>`${isActive ? "text-yellow-400" : "inherit"}`}>FAQ</NavLink>
        </li>
      </ul>

      <div className="menu-controls">
        <button onClick={handleThemeToggle}>
          <Theme />
        </button>
        <div className="hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
