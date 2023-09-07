import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Packages.css';
import Subscription from './Subscription';
import './Subscription.css';
import waveImage from '../png/wave6.svg';
// import ParticlesBg from 'particles-bg'; 


const Packages = () => {
  const [faqData, setFaqData] = useState([
    {
      question: 'How long should a web design project take?',
      answer: 'The duration of a web design project can vary depending on its complexity and scope. Typically, a simple brochure-style website with a few pages may take around 4-6 weeks to complete. More complex websites with custom designs, advanced features, and e-commerce functionality could take several more weeks. To get a more accurate estimate for your specific project, please reach out to us for a personalized consultation.',
      isOpen: false, // Initialize the isOpen state as false for all questions
    },
    {
      question: 'How long should a logo design take?',
      answer: 'The time required for logo design can vary depending on factors like design complexity, revisions, and client feedback. Simple logo designs may take a few days, while more intricate or custom designs might take up to a couple of weeks. We work closely with our clients to ensure the logo design meets their expectations and brand identity.',
      isOpen: false,
    },
    {
      question: 'How long does it take a build a WordPress website?',
      answer: 'The development time for a WordPress website depends on various factors, including the design complexity, the number of pages, features, and integrations required. A basic WordPress website could be completed in a few weeks, while a more comprehensive and customized site may take a few months. We aim to deliver high-quality websites within a reasonable timeframe, and our team is dedicated to meeting project milestones efficiently. In general it could take 4-6 weeks',
      isOpen: false,
    },
    {
      question: 'What is the process of website development?',
      answer: 'Our website development process typically follows these stages:\n1. Discovery and Planning: We discuss your requirements, goals, and target audience to create a project plan.\n2. Design and Prototyping: Our designers create wireframes and mockups for your approval.\n3. Development: Our developers build the website, implementing all the features and functionalities.\n4. Testing: We rigorously test the website for functionality, responsiveness, and compatibility.\n5. Launch: We deploy the website and ensure a smooth go-live.\n6. Post-Launch Support: We provide ongoing support and maintenance as needed to keep your website running smoothly.',
      isOpen: false,
    },
    {
      question: 'Do you provide website maintenance services?',
      answer: 'Yes, we offer website maintenance packages to ensure your website runs smoothly and stays up to date.',
      isOpen: false,
    },
    {
      question: 'My question isn\'t in this list!',
      answer: 'Please reach out to us at info@qualitydesigns.com with your question and we\'ll get back to you shortly.',
      isOpen: false,
    },
    // Add more FAQ items as needed
  ]);

    const [hovered, setHovered] = useState(null); // Initialize hovered state as null
  // Function to toggle the visibility of the answer
  const toggleAnswer = (index) => {
    setFaqData((prevFaqData) =>
      prevFaqData.map((item, i) =>
        i === index ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const navigate = useNavigate();

  const scrollToContact = (event) => {
    event.preventDefault(); // Prevent the default link behavior
    navigate('/contact');
    window.scrollTo(0, 0); // Scroll to the top of the page
  };
  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-animation');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // Adjust this threshold value as needed
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    elements.forEach(element => {
      observer.observe(element);
    });
  
    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  return (
    <>
    {/* <ParticlesBg type="cobweb" num={50} bg={true} color="#284b63"/> */}
      <section className="packages-page">
        <div className="package_wave-container">
          <div className="package_wave-wrapper2">
            <img src={waveImage} alt="Consultation Banner" className="package_wave-img2" />
          </div>
        </div>
        <h2 className="section-title">Choose the plan that fits your needs.</h2>
        <div className="packages-list">
          <div className="package-item most-popular scroll-animation">
            {/* <div className="popular-badge">Most popular</div> */}
            <h3>Standard</h3>
            <p className="package-price">$500</p>
            <ul>
              <li>1-5 Pages</li>
              <li>Basic Design</li>
              <li>SEO optimization</li>
              <li>CMS setup</li>
              <li>Basic website analytics</li>
              <li>QA testing of the site</li>
            </ul>
            <ul>
              <li>We will create a brochure style website based off of a theme</li>
            </ul>
            <Link to="/quote" onClick={scrollToContact}>
              <button>Request Consultation</button>
            </Link>
          </div>
          <div className="package-item premium-package scroll-animation">
            <h3>Premium</h3>
            <p className="package-price">$1,000</p>
            <ul>
              <li>1-7 Pages</li>
              <li>Custom Design</li>
              <li>SEO optimization</li>
              <li>CMS setup</li>
              <li>Advanced analytics</li>
              <li>QA testing of the site</li>
              <li>Social Media Content</li>
            </ul>
            <ul>
              <li>We will create a custom designed website</li>
            </ul>
            <Link to="/quote" onClick={scrollToContact}>
              <button>Request Consultation</button>
            </Link>
          </div>
          <div className="package-item scroll-animation">
            <h3>Corporate</h3>
            <p className="package-price">Let's talk</p>
            <ul>
              <li>Development of up to 20 pages</li>
              <li>Custom Design</li>
              <li>SEO optimization</li>
              <li>CMS setup</li>
              <li>Advanced analytics</li>
              <li>QA testing of the site</li>
              <li>E-commerce Integration</li>
            </ul>
            <ul>
              <li>We will create an enterprise level custom designed website from scratch</li>
            </ul>
            <Link to="/quote" onClick={scrollToContact}>
              <button>Request Consultation</button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2 className='questions'>Questions</h2>
        <h4 className='freq-asked'>Frequently asked, fully answered.</h4>
        <div className="faq-list scroll-animation">
        {faqData.map((item, index) => (
          <div className={`faq-item ${item.isOpen ? 'show-answer' : ''}`} key={index}>
            <h3 onClick={() => toggleAnswer(index)}>
              {item.question}
              {item.isOpen ? '' : ''}
            </h3>
            {item.isOpen && <p>{item.answer}</p>}
          </div>
        ))}
        </div>
      </section>

      <Subscription />
      {/* todo add
      contact us or get a free quote */}
    </>
  );
};

export default Packages;
