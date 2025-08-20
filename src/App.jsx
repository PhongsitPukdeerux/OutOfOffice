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
import About from './components/About';
import Works from './components/Works';

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
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;