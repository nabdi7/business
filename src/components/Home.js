import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import  './Home.css';
import Client from './Client';
import './Client.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faFileCode, faHandshake, faChartLine, faCheckCircle, faLightbulb, faCheck } from '@fortawesome/free-solid-svg-icons';
import waveImage from '../png/wave2.svg';
import someImage from '../png/Untitled2.png';

const Home = () => {
  const navigate = useNavigate();

  const scrollToServices = (event) => {
    event.preventDefault(); // Prevent the default link behavior
    navigate('/services');
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const scrollToContact = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  const scrollToAbout = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className='background-image'>
        <h1 className='title'>Powering Your Digital Success</h1>
        <p className='description'>We Bring Your Business Ideas to Life</p>
        <p className='description-more'>Elevate your brand's 
        online presence with our captivating websites and 
        unforgettable branding experiences.<br></br> We turn your 
        visions into reality, delivering creative excellence 
        that sets your brand apart. <br></br> Unlock creative excellence 
        today.<br></br></p>
        <Link to="/about" className='button home-button' onClick={scrollToAbout}>Learn More</Link>
      </div>

      <section className='below-page'>
        <div className='page-image'>
          <img src={someImage} alt='' />
        </div>
        <div className='below-page-container'>
          <div className='page-big'>
            <div className='content-wrapper'>
              <h1 className='page-title'>We solve the hardest parts of your business</h1>
              <p className='page-description'>We explore your specifications to provide tailored website solutions that align with your requirements and budget.</p>
                <ul className='pre-step'>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    <span className="step-text">Thorough understanding of your prerequisites</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    <span className="step-text">Research and analysis of your business</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    <span className="step-text">Effective Solutions</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    <span className="step-text">Budget-friendly</span>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='big-section brandings'>
        <section className='service_component'>
          <div className="home_services_heading_container">
            <div className="our_services_container">
              <h5 className="heading-small">Our Services</h5>
              <h2 className="heading-large">How We Can Help Your Business</h2>
            </div>
          </div>
        </section>
        <section className="services_container">
          <div className='service_items'>
            <div className="services_box">
              <div className="icon">
                <FontAwesomeIcon icon={faPalette} />
              </div>
              <h3 className='description'> Branding</h3>
              <p className='service_text'>
                Our branding service helps businesses develop a unique identity that speaks
                to their audience and sets them apart from competitors.
              </p>
            </div>
            <div className="services_box">
              <div className="icon">
                <FontAwesomeIcon icon={faFileCode} />
              </div>
              <h3 className='description'> Web Design</h3>
              <p className='service_text'>
                We design websites that are tailored to your brand and user experience needs, creating a
                seamless and attractive online presence for your business.
              </p>
            </div>
            <div className="services_box">
              <div className="icon">
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <h3 className='description'> SEO</h3>
              <p className='service_text'>
                Our SEO service helps your website rank higher on search engines, bringing more traffic and customers to your business.
              </p>
            </div>
            <div className="services_box">
              <div className="icon">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
                <h3 className='description'> Quality Assurance</h3>
              <p className='service_text'>
                Our Quality Assurance service ensures seamless functionality and top-notch performance for your digital products.
              </p>
            </div>
            <div className="services_box">
              <div className="icon">
                <FontAwesomeIcon icon={faLightbulb} />
              </div>
                <h3 className='description'> Content Creation</h3>
              <p className='service_text'>
                Our content creation service offers captivating visual storytelling through stunning photography and videography, conveying your brand's essence.
              </p>
            </div>
            <div className="services_box">
              <div className="icon">
                <FontAwesomeIcon icon={faChartLine} />
              </div>
                <h3 className='description'> Digital Strategy</h3>
              <p className='service_text'>
              Our digital strategy service provides tailored plans and cutting-edge approaches to help your business thrive in the digital landscape.
              </p>
            </div>
          </div>
          <div className="discover_more_wrapper">
            <Link to="/services" className="read_more" onClick={scrollToServices}>
              Discover More
            </Link>
          </div>
        </section>  
      </section>
      
      <Client />

      {/* Get a free consultation */}
      <section className="consultation">
        <div className="wave-wrapper">
          <img src={waveImage} alt="Consultation Banner" className="wave-img" />
        </div>
        <div className="consultation-content">
          <h2>Ready to take the next step?</h2>
          <p>
            Let's discuss your project and find the best solution for your digital success.
          </p>
          
          <Link to="/contact" className="consultation-button" onClick={scrollToContact}>Get A Free Consultation</Link>
        </div>
      </section>

      {/* <Subscription /> */}
    </>
  );
}

export default Home;
