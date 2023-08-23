import React, { useState, useEffect } from 'react';
import logo from '../png/logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkIfMobile();

    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const closeMobileMenu = () => {
    setShowLinks(false);
  };

  return (
    <nav className="navbar">
      <div className="brand-logo">
        <Link to="/" className="logo">
          <img src={logo} width="120px" height="auto" max-width="100%" max-height="100%" alt="Logo" />
        </Link>
      </div>
      <div className={`nav-links ${showLinks ? 'show-links' : ''}`}>
        <ul>
          <li onClick={closeMobileMenu}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={closeMobileMenu}>
            <Link to="/packages">Packages</Link>
          </li>
          <li onClick={closeMobileMenu}>
            <Link to="/services">Services</Link>
          </li>
          <li onClick={closeMobileMenu}>
            <Link to="/projects">Projects</Link>
          </li>
          <li onClick={closeMobileMenu}>
            <Link to="/contact">Contact</Link>
          </li>
          <li onClick={closeMobileMenu}>
            <Link to="/quote" className="active">
              GET A QUOTE
            </Link>
          </li>
        </ul>
      </div>
      <button
        className={`menu-button nav-toggle ${showLinks ? 'active' : ''}`}
        onClick={toggleLinks}>
        <FontAwesomeIcon icon={showLinks ? faTimes : faBars} style={{ color: "#284b63", fontSize: "28px" }} />
      </button>

      {showLinks && isMobile && (
        <button className="close-button" onClick={closeMobileMenu}>
          <FontAwesomeIcon icon={faTimes} style={{ color: "#284b63", fontSize: "27px" }} />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
