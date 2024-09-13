import React, { useState } from 'react';
import './Navbar.css';
import ThemeToggleButton from '../Theme/Theme'; // Import the Theme component
import Light_Logo from '../../Assets/light_ParadiseCar.png';
import Dark_Logo from '../../Assets/Dark_ParadiseCar.png';
import { NavLink } from 'react-router-dom';
import Hamburger from 'hamburger-react'; // Ensure you have this package installed

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isOpen, setOpen] = useState(false); // State for hamburger menu

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode); // Toggle dark mode for body
  };

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
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? "text-yellow-400" : "inherit"}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? "text-yellow-400" : "inherit"}`
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `${isActive ? "text-yellow-400" : "inherit"}`
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? "text-yellow-400" : "inherit"}`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Theme Toggle and Hamburger Menu */}
      <div className="menu-controls">
        <ThemeToggleButton onToggleTheme={handleThemeToggle} isDarkMode={isDarkMode} />
        <div className="hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
