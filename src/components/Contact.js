import React from 'react';
import './Contact.css';
import waveImage from '../png/wave6.svg';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
// import Subscription from './Subscription';
// import './Subscription.css';

const Contact = () => {
  return (
    <> 
    
    <section className='contact-page'>
      <div className="contact_wave-container">
        <div className="contact_wave-wrapper2">
          <img src={waveImage} alt="Consultation Banner" className="contact_wave-img2" />
        </div>
      </div>
      <h2>Contact</h2>
      <div className='contact-details'>
        <div className='contact-item'>
          <div className='contact-box'>
            <div className='contact-icon'>
              <FaPhone />
            </div>
            <div className='contact-info'>
              <a href='tel:+12068833462'>+1 206 883 3462</a>
            </div>
          </div>
        </div>
        <div className='contact-item'>
          <div className='contact-box'>
            <div className='contact-icon'>
              <FaEnvelope />
            </div>
            <div className='contact-info'>
              <a href='mailto:abdinajka@gmail.com' className='email-link'>abdinajka@gmail.com</a>
            </div>
          </div>
        </div>
        <div className='contact-item'>
          <div className='contact-box'>
            <div className='contact-icon'>
              <FaMapMarkerAlt />
            </div>
            <div className='contact-info'>
              <a href='https://goo.gl/maps/oQHJCMPBP9Tqk1Tq5'>Seattle, WA</a>
              {/* <p>Seattle, WA</p> */}
            </div>
          </div>
        </div>
      </div>
      <div className='contact-sections'>
        <div className='get-in-touch'>
          <h3>Get In Touch</h3>
          <form>
            <input type='text' placeholder='Name' required />
            <input type='tel' placeholder='Phone' required />
            <input type='email' placeholder='Email' required />
            <textarea placeholder='Your Message' rows='5' required></textarea>
            <button className="send-message-button" type="submit">
              Send Message
            </button>
          </form>
        </div>
        <div className='message-me'>
          <h3>Message Me</h3>
          <div className='message-content'>
            <p>Please feel free to call or email us, or use our contact form to get in touch with us.</p>
            <p>We look forward to hearing from you!</p>
          </div>
          <div className='social-icons'>
            <a href="https://www.instagram.com/qd_designs/" target="_blank" rel="noopener noreferrer"><BsInstagram /></a>
            <a href="https://www.facebook.com/people/Quality-Designs/61550453621801/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            {/* <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a> */}
            <a href="https://twitter.com/Qd_designs/" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
          </div>
        </div>
      </div>
    </section>
    {/* <Subscription /> */}
    </>

    // email configuration
    // use this link https://www.youtube.com/watch?v=PI-tGsvDoIU&ab_channel=ByteGrad
  );
};

export default Contact;
