import React, { useState } from 'react';
import './Navbar.css';
import ThemeToggleButton from '../Theme/Theme'; // Import the Theme component
import Light_Logo from '../../Assets/light_ParadiseCar.png';
import Dark_Logo from '../../Assets/Dark_ParadiseCar.png';

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
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      {/* Pass the toggle function and state to the Theme component */}
      <ThemeToggleButton onToggleTheme={handleThemeToggle} isDarkMode={isDarkMode} />
    </nav>
  );
};

export default Navbar;
