import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from './components/Navbar';
import Hero from './components/Hero';

gsap.registerPlugin(useGSAP,ScrollTrigger);

const App = () => {

  return (
    <div className=''>
        <Navbar />
        <Hero />
    </div>
  )
}

export default App