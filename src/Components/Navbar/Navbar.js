import React, { useState } from 'react';
import './Navbar.css';
import ThemeToggleButton from '../Theme/Theme'; // Import the Theme component
import Light_Logo from '../../Assets/light_ParadiseCar.png';
import Dark_Logo from '../../Assets/Dark_ParadiseCar.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode); // Toggle dark mode for body
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <img
        src={isDarkMode ? Dark_Logo : Light_Logo}
        alt="Paradise Car Rental"
        className="navbar-logo"
      />
      <ul className="navbar-links">
        <li><NavLink to="/"

        className={({isActive})=>
            `${isActive?"text-yellow-400":"inherit"}`
        }
        >Home
        </NavLink></li>
        <li><NavLink to="/about"
         className={({isActive})=>{
          return `${isActive?"text-yellow-400":" inherit"}`
         }}
        >About
        </NavLink></li>
        <li><NavLink to="/services"
          className={({isActive})=>
           `${isActive?"text-yellow-400":" inherit"}`
          }
        >Services
        </NavLink></li>
        <li><NavLink to="/contact"
         className={({isActive})=>
        `${isActive?"text-yellow-400":" inherit"}`
        }
        >Contact</NavLink></li>
      </ul>
      {/* Pass the toggle function and state to the Theme component */}
      <ThemeToggleButton onToggleTheme={handleThemeToggle} isDarkMode={isDarkMode} />
    </nav>
  );
};

export default Navbar;
