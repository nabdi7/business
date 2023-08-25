import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Footer from './components/Footer';
import About from './components/About';
import Packages from './components/Packages';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Quote from './components/Quote';

function App() {
  const handleCaptchaVerification = (token) => {
    // Handle the captcha verification here
    console.log('Captcha token:', token);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />}  />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
        <Footer />
      </Router>
      
      {/* hCaptcha component */}
      <hCaptcha
        sitekey="689617b7-38b1-46a8-83d5-581cf1f49f5e"
        onVerify={handleCaptchaVerification}
      />
    </div>
  );
}

export default App;
