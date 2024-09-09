import React from 'react';
import './Theme.css';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggleButton = ({ onToggleTheme, isDarkMode }) => {
  return (
    <button className="theme-toggle-button" onClick={onToggleTheme}>
      {isDarkMode ? <FaMoon /> : <FaSun />}
      {isDarkMode ? 'Night Mode' : 'Day Mode'}
    </button>
  );
};

export default ThemeToggleButton;
