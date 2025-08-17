import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomePage from './components/HomePage';

gsap.registerPlugin(useGSAP,ScrollTrigger);

const App = () => {

  return (
    <div className=''>
        <Navbar />
        <Hero />
        <HomePage />
    </div>
  )
}

export default App