import React from 'react';
import logo from '../png/logo.png';
import './Footer.css';
import { Link, useNavigate } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
  const navigate = useNavigate();
  const scrollToHome = (event) => {
    event.preventDefault();
    navigate('/');
    window.scrollTo(0, 0);
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="socials">
          <a href="https://www.instagram.com/qd_designs/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
          <a href="https://www.facebook.com/people/Quality-Designs/61550453621801/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="https://twitter.com/Qd_designs" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
        </div>
        <div className="logo-container">
          <Link to="/" className="logo" onClick={scrollToHome}>
            <img src={logo} width="120px" height="auto" max-width="100%" max-height="100%" alt="Logo" />
          </Link>
        </div>
        <div className="email">
          <a href='mailto:info@qualitydesigns.site' className='email-link'>info@qualitydesigns.site</a>
        </div>
      </div>
      <div className="copyright">
        <p>©{new Date().getFullYear()} Quality Designs. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
