import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faFileCode, faHandshake, faCheckCircle, faLightbulb, faChartLine } from '@fortawesome/free-solid-svg-icons'; // Updated icons
import waveImage from '../png/wave6.svg';
import waveImage2 from '../png/wave2.svg';

const Services = () => {
  const navigate = useNavigate();

  const scrollToContact = (event) => {
    event.preventDefault(); // Prevent the default link behavior
    navigate('/contact');
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <>
    <section className='service_component'>
      <div className="services_heading_container">
        <div className="wave-wrapper2">
          <img src={waveImage} alt="Consultation Banner" className="wave-img2" />
        </div>
        <div className="our_services_container">
          <h5 className="heading-small">Our Services</h5>
          <h2 className="heading-large">How We Can Help Your Business</h2>
        </div>
      </div>
    </section>

    <section className="services_outer branding">
      <div className="services_container">
        <div className="service_first">
          <div className="icon">
            <FontAwesomeIcon icon={faPalette} />
          </div>
          <h2 className="heading-large">Branding </h2>
        </div>
        <div className="service_second">
          <p className='service_description'>
          Our branding service empowers businesses to develop a distinctive 
          identity that resonates with their target audience and sets them 
          apart from the competition. We craft captivating logos, sensory 
          color palettes, and compelling brand narratives that create a 
          lasting impact on customers. With our comprehensive brand 
          guidelines, your brand identity remains consistent across all 
          platforms, leaving a memorable impression.
          </p>
          <div className="service_types">
            <ol className="service_lists">
              <li>Logo Design</li>
              <li>Brand Strategy Consulting</li>
              <li>Brand Identity Design</li>
              <li>User Interface Design</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section className="services_outer">
      <div className="services_container">
        <div className="service_first">
          <div className="icon">
            <FontAwesomeIcon icon={faFileCode} />
          </div>
          <h2 className="heading-large">Web Development </h2>
        </div>
        <div className="service_second">
          <p className='service_description'>
          Our web development service brings your digital vision to life. 
          From responsive web design to user-friendly interfaces and 
          eCommerce solutions, we build websites that engage and convert. 
          With a focus on user experience, we create intuitive websites 
          that captivate your audience and drive business growth. Our 
          expertise extends to WordPress development, ensuring a seamless 
          and customizable online presence.
          </p>
          <div className="service_types">
            <ol className="service_lists">
              <li>Responsive Web Design</li>
              <li>eCommerce websites</li>
              <li>User Experience Design</li>
              <li>User Interface Design</li>
              <li>WordPress Development</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section className="services_outer digital branding">
      <div className="services_container">
        <div className="service_first">
          <div className="icon">
            <FontAwesomeIcon icon={faHandshake} />
          </div>
          <h2 className="heading-large">Digital Marketing </h2>
        </div>
        <div className="service_second">
          <p className='service_description'>
          In the digital landscape, our digital marketing service drives 
          results. We optimize your online presence with expert SEO 
          strategies, ensuring your brand appears at the top of search 
          engine results. Our analytics and reporting provide valuable 
          insights to refine your marketing efforts continuously. Through 
          content marketing, we deliver valuable and engaging content that 
          connects with your audience and drives meaningful interactions.
          </p>
          <div className="service_types">
            <ol className="service_lists">
              <li>SEO</li>
              <li>Analytics and Reporting</li>
              <li>Content Marketing</li>
              <li>Social Media Marketing</li>
              <li>Email Marketing</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section className="services_outer">
      <div className="services_container">
        <div className="service_first">
          <div className="icon">
            <FontAwesomeIcon icon={faLightbulb} />
          </div>
          <h2 className="heading-large">Content Creation </h2>
        </div>
        <div className="service_second">
          <p className='service_description'>
          Our content creation service brings creativity to the forefront. 
          Through videography, photography, graphics, and captivating 
          copywriting, we craft content that tells your brand's story with 
          impact. Whether it's a compelling video, stunning visuals, or 
          persuasive copy, our content resonates with your audience and 
          drives engagement.
          </p>
          <div className="service_types">
            <ol className="service_lists">
              <li>Videography</li>
              <li>Photography</li>
              <li>Graphics</li>
              <li>Copywriting</li>
              <li>Content Strategy</li> {/* New item */}
              <li>Animation</li> {/* New item */}
            </ol>
          </div>
        </div>
      </div>
    </section> 
    
    <section className="services_outer digital branding">
      <div className="services_container">
        <div className="service_first">
          <div className="icon">
            <FontAwesomeIcon icon={faChartLine} />
          </div>
          <h2 className="heading-large">Digital Strategy </h2>
        </div>
        <div className="service_second">
          <p className='service_description'>
          Our digital strategy service lays the foundation for your 
          digital success. Through in-depth market research and business 
          insights, we develop customized strategies to achieve your goals.
          We identify opportunities, optimize processes, and position your 
          brand for maximum impact in the digital landscape.
          </p>
          <div className="service_types">
            <ol className="service_lists">
              <li>Market Research</li>
              <li>Business Insights</li>
              <li>Competitor Analysis</li>
              <li>Digital Advertising</li>
            </ol>
          </div>
        </div>
      </div>
    </section> 

    <section className="services_outer">
      <div className="services_container">
        <div className="service_first">
          <div className="icon">
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
          <h2 className="heading-large">Quality Assurance</h2>
        </div>
        <div className="service_second">
          <p className='service_description'>
            Our quality assurance service ensures that your projects and deliverables
            meet the highest standards of quality and reliability. We conduct thorough 
            testing and quality checks to identify and fix any issues, ensuring that 
            your products are free from defects and meet the specified requirements. 
            With our quality assurance process, you can have confidence in the 
            reliability and performance of your deliverables.
          </p>
          <div className="service_types">
            <ol className="service_lists">
              <li>Functional Testing</li>
              <li>Performance Testing</li>
              <li>Compatibility Testing</li>
              <li>Usability Testing</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
   
    {/* Get a free consultation */}
    <section className="consultation">
        <div className="wave-wrapper">
          <img src={waveImage2} alt="Consultation Banner" className="wave-img" />
        </div>
        <div className="consultation-content">
          <h2>Ready to take the next step?</h2>
          <p>
          Contact us today and discover how our services can elevate 
          your business.
          </p>
          {/* <p>
            Let's discuss your project and find the best solution for your digital success
          </p> */}
          <Link to="/contact" className="consultation-button" onClick={scrollToContact}>Get A Free Consultation</Link>
        </div>
      </section>
    </>
  );
};

export default Services;
