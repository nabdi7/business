import React from 'react';
import './About.css';
import missionImage from '../png/about.jpg'; 
import { FaLightbulb, FaFileAlt, FaPalette, FaCode, FaDesktop, FaRocket, FaTrophy } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import waveImage from '../png/wave6.svg';
import memberImage1 from '../png/najib.jpg';
import memberImage2 from '../png/user.jpg';
import memberImage3 from '../png/user.jpg';
import Client from './Client';
import './Client.css';

const About = () => {
  return (
    <>
      
      <section className="about-company">
        
          <div className="about_wave-wrapper2">
              <img src={waveImage} alt="Consultation Banner" className="about_wave-img2" />
          </div>
       
        <div className="company_container">
          <div className="company-info">
            <h3 className='about_title title_decor'>
              <span className="vertical-text">About Our Agency</span>
            </h3>
            <p className='text text-italic'>
              <span>Our goal is to empower businesses through</span>
              <span>innovative digital solutions.</span>
            </p>
            <div className="company-image">
            <img src={missionImage} alt="Mission Statement" />
            </div>
          </div>
          <div className="company-text">
            <p className="text">
                Welcome to our digital agency! Our primary objective is to 
                provide cutting-edge and influential digital solutions that 
                enable businesses to thrive in the ever-evolving digital 
                landscape. 
                We are deeply dedicated to delivering outstanding 
                services that assist our clients in reaching their objectives. 
                Our overarching mission is to equip businesses of all scales 
                with the ability to harness the potential of the internet and 
                leverage digital technologies to accomplish their goals.
            </p>
            <p className="text">
                Whether you require an exceptional website, a powerful online
                marketing strategy, or a comprehensive brand identity, our
                team possesses the expertise and experience necessary to
                transform your vision into reality.
            </p>
              <div className="socials">
              <p>Let's talk with us!</p>
              {/* <a href='mailto:abdinajka@gmail.com' className='email-about'>abdinajka@gmail.com</a> */}
              <div className="social-icons">
                <a href="https://www.facebook.com/people/Quality-Designs/61550453621801/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://twitter.com/Qd_designs/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                <a href="https://www.instagram.com/qd_designs/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-process">
        <div className="business_container">
          <h2 className='about_title'>Innovating Business with Digital Solutions</h2>
          <div className="workflow-body">
            <p className="text">
              We are a team of passionate professionals who specialize in 
              providing cutting-edge digital solutions to help businesses
              thrive in the digital landscape. Our mission is to empower
              businesses with the tools and expertise they need to succeed
              online. We believe in delivering exceptional value, building
              strong relationships, and exceeding expectations with 
              everything we do.
            </p>
            <p className="text">
              At Quality Designs, we believe that creativity knows no bounds.
              We strive to provide our clients with unique and innovative 
              solutions that stand out from the crowd.
            </p>
            <div className="workflow-steps">
              <div className="progress">
                <div className="progress-step">
                  <div className="step">
                    <FaLightbulb />
                  </div>
                  <span className="step-title"><b>Ideation</b></span>
                  <p className="step-description">In this phase, we brainstorm ideas, understand your business objectives, and define the website's goals and target audience.</p>
                </div>
                <div className="progress-step">
                  <div className="step">
                    <FaFileAlt />
                  </div>
                  <span className="step-title"><b>Planning</b></span>
                  <p className="step-description">We create a detailed project plan, define the website's structure, and outline the content and functionalities needed.</p>
                </div>
                <div className="progress-step">
                  <div className="step">
                    <FaPalette />
                  </div>
                  <span className="step-title"><b>Design</b></span>
                  <p className="step-description">Our talented designers will craft a visually appealing and user-friendly website layout that reflects your brand identity.</p>
                </div>
                <div className="progress-step">
                  <div className="step">
                    <FaCode />
                  </div>
                  <span className="step-title"><b>Development</b></span>
                  <p className="step-description">Our developers will bring the design to life by coding the website using the latest web technologies and best practices.</p>
                </div>
                <div className="progress-step">
                  <div className="step">
                    <FaDesktop />
                  </div>
                  <span className="step-title"><b>Testing</b></span>
                  <p className="step-description">Before launch, we rigorously test the website for responsiveness, cross-browser compatibility, and functionality.</p>
                </div>
                <div className="progress-step">
                  <div className="step">
                    <FaRocket />
                  </div>
                  <span className="step-title"><b>Launch</b></span>
                  <p className="step-description">It's time to launch your website! We ensure a smooth deployment and monitor for any potential issues.</p>
                </div>
                <div className="progress-step">
                  <div className="step">
                    <FaTrophy />
                  </div>
                  <span className="step-title"><b>Optimization</b></span>
                  <p className="step-description">We continuously optimize the website's performance, user experience, and SEO to drive better results.</p>
                </div>
                {/* <div className="progress-step">
                  <div className="step">
                    <FaWrench />
                  </div>
                  <span className="step-title">Maintenance</span>
                  <p className="step-description">After launch, we offer ongoing support, updates, and maintenance to keep your website running smoothly.</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <h2 className='about_title'>Meet Our Team</h2>
        <div className="team-members">
          {/* Team Member 1 */}
          <div className="team-member">
            <div className="team-member__image">
              <img src={memberImage1}  alt="Founder" />
            </div>
            <div className="team-member__body">
              <h3 className="team-member__title">Najib Abdi</h3>
              <p className="team-member__subtitle">Developer</p>
              {/* <div className="social-icons">
              <a href="https://www.facebook.com/"><FaFacebookF /></a>
              <a href="https://www.twitter.com/"><FaTwitter /></a>
              <a href="https://www.instagram.com/"><FaInstagram /></a>
              </div> */}
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="team-member">
            <div className="team-member__image">
              <img src={memberImage2} alt="Founder" />
            </div>
            <div className="team-member__body">
              <h3 className="team-member__title">Hamza </h3>
              <p className="team-member__subtitle">UX Designer</p>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="team-member">
            <div className="team-member__image">
              <img src={memberImage3} alt="Founder" />
            </div>
            <div className="team-member__body">
              <h3 className="team-member__title">Abdifatah</h3>
              <p className="team-member__subtitle">Developer</p>
            </div>
          </div>
        </div>
      </section>

      <Client />
    </>
  );
}

export default About;
