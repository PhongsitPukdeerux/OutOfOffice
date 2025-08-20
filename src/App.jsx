import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomePage from './components/HomePage';
import Audit from './components/Audit';
import Footer from './components/Footer';

gsap.registerPlugin(useGSAP,ScrollTrigger);

const App = () => {

  return (
    <div className=''>
        <Navbar />
        <Hero />
        <HomePage />
        <Audit />
        <Footer />
    </div>
  )
}

export default App