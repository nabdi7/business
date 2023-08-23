import React from 'react';
import './Calendly.css';

const Calendly = () => {
  return (
    <div style={{ height: "700px" }}>
      <iframe
        src="https://calendly.com/abdinajka/free-consultation"
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Calendly;
