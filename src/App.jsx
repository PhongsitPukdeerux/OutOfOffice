import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomePage from './components/HomePage';
import Audit from './components/Audit';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

gsap.registerPlugin(useGSAP,ScrollTrigger);

const MainPage = () => (
  <>
    <Hero />
    <HomePage />
    <Audit />
  </>
);

const App = () => {
  return (
    // 1. Wrap your entire application in BrowserRouter
    <BrowserRouter>
      <div className="App">
        {/* 2. Place Navbar and Footer outside of Routes so they are always visible */}
        <Navbar />

        {/* 3. Define your routes inside the Routes component */}
        <Routes>
          {/* Route for the main page */}
          <Route path="/" element={<MainPage />} />
          
          {/* Route for the Contact Us page */}
          <Route path="/contact" element={<ContactForm />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;