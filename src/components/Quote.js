import React from 'react';
import Calendly from './Calendly'; 
import './Quote.css';
import waveImage from '../png/wave6.svg';

const Quote = () => {
  return (
    <>
    <div className="quote_wave-container">
      <div className="quote_wave-wrapper2">
        <img src={waveImage} alt="Consultation Banner" className="quote_wave-img2" />
      </div>
    </div>
      <Calendly /> 
    </>
  );
}

export default Quote;
