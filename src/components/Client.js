import React from 'react';
import Marquee from 'react-fast-marquee';
import  './Client.css'
import img1 from '../png/images.png';
import img2 from '../png/looo11.png';
// import img3 from '../png/hadiya.svg';
import img4 from '../png/Neighborhood.svg';
import img5 from '../png/emoti.png';
import img6 from '../png/brightsmiles.png';
// import img7 from '../png/client3.png';

const Client = () => {
  return (
    <div className="title">
        <h1>Our Clients</h1>
        <p className="text">Our work speaks for itself. We deliver an outstanding service custom-tailored to each and every one of our clients — big or small.</p>
      <div>
        <Marquee direction="left" speed={60} >
          <div className="image_wrapper">
            <img src={img1} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="" />
          </div>
          {/* <div className="image_wrapper">
            <img src={img3} alt="" />
          </div> */}
          <div className="image_wrapper">
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
          
          <div className="image_wrapper">
            <img src={img6} alt="" />
          </div>
          {/*
          <div className="image_wrapper">
            <img src={img7} alt="" />
          </div> */}
        </Marquee>
      </div>
      </div>
  );
}

export default Client;