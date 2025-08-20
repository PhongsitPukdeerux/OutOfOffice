import React from 'react'
import CoCreator from './CoCreator'

const About = () => {
  return (
    <section>
        
      <div className="bg-blue py-20 ">
        <div className="relative w-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-lg ms:max-w-5xl">
          {/* Image */}
          <img
            src="/images/aboutHero.jpg"
            alt="hero"
            className="w-full h-[500px] object-cover transform hover:scale-105 transition duration-700"
          />

          {/* Overlay (optional dark tint for readability) */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text inside image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              Third Space for <br />
              <span className="font-pixel-script">P</span>roductivity
            </h1>
            <p className="mt-4 text-base font-helvetica text-white max-w-2xl">
            We are here to build a virtual space where creators and clients blur the corporate fuss and get down to what really matters: co-creating go:ood things, comfortably and effectively.
            </p>
          </div>
        </div>
      </div>
      <CoCreator />
    </section>
  )
}

export default About