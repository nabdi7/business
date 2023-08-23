import React from 'react';
import Marquee from 'react-fast-marquee';
import  './Client.css'
import img1 from '../png/client3.png';
import img2 from '../png/client3.png';
import img3 from '../png/client3.png';
import img4 from '../png/client3.png';
import img5 from '../png/client3.png';
import img6 from '../png/client3.png';
import img7 from '../png/client3.png';

const Client = () => {
  return (
    <div className="title">
        <h1>Our Clients</h1>
        <p className="text">Our work speaks for itself. We deliver an outstanding service custom-tailored to each and every one of our clients — big or small.</p>
      <div>
        <Marquee direction="left" speed={30} >
          <div className="image_wrapper">
            <img src={img1} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img6} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img7} alt="" />
          </div>
        </Marquee>
      </div>
      </div>
  );
}

export default Client;