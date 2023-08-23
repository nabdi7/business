import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
// import Branding from './components/Branding';
// import SEO from './components/SEO';
import Footer from './components/Footer';
import About from './components/About';
import Packages from './components/Packages';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Quote from './components/Quote';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/branding" element={<Branding />} />
          <Route path="/seo" element={<SEO />} /> */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}



export default App;