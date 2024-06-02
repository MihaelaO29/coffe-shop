import React from 'react';
import './App.css';
import { useState } from 'react';
import img1 from './images/img1.webp';
import img2 from './images/img2.webp';
import img3 from './images/img3.webp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Menu from './pages/menu/Menu';
import Contact from './pages/contact/Contact';


function App() {

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
    // <div className='app'>
    //   <div className='shop'
    //     style={{
    //       backgroundImage: `url(${img1})`,
    //       backgroundSize: 'cover',
    //       backgroundPosition: 'center',
    //     }}
    //   >



    //   </div>
    // </div>
  );
}

export default App;
