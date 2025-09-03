import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleTheme, theme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-navy/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Brand */}
        <Link to="/" className="text-2xl font-bold text-navy dark:text-teal">
          Nitish Choudhary
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="nav-link hover:text-teal">Home</Link>
          <Link to="/about" className="nav-link hover:text-teal">About</Link>
          <Link to="/portfolio" className="nav-link hover:text-teal">Portfolio</Link>
          <Link to="/gallery" className="nav-link hover:text-teal">Gallery</Link>
          <Link to="/contact" className="nav-link hover:text-teal">Contact</Link>
        </div>

        {/* Theme + Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <button
            id="theme-toggle"
            onClick={toggleTheme}
            type="button"
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Theme toggle"
          >
            <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <button
            id="mobile-menu-button"
            className="md:hidden p-2"
            onClick={handleMobileMenuClick}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white dark:bg-navy shadow-lg">
          <div className="px-6 py-4 flex flex-col space-y-4">
            <Link to="/" className="nav-link hover:text-teal" onClick={handleMobileMenuClick}>Home</Link>
            <Link to="/about" className="nav-link hover:text-teal" onClick={handleMobileMenuClick}>About</Link>
            <Link to="/portfolio" className="nav-link hover:text-teal" onClick={handleMobileMenuClick}>Portfolio</Link>
            <Link to="/gallery" className="nav-link hover:text-teal" onClick={handleMobileMenuClick}>Gallery</Link>
            <Link to="/contact" className="nav-link hover:text-teal" onClick={handleMobileMenuClick}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
