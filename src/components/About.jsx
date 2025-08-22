import React from "react";
import CoCreator from "./CoCreator";
import Branding from "./Branding";
import SocialMedia from "./SocialMedia";

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
              We are here to build a virtual space where creators and clients
              blur the corporate fuss and get down to what really matters:
              co-creating go:ood things, comfortably and effectively.
            </p>
          </div>
        </div>
      </div>
      <CoCreator />
      <Branding />
      <SocialMedia />

      <div className="flex items-center justify-center mx-10">
        <div className="w-full bg-white p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-12">
            {/* Left Column: Text Content */}
            {/* w-full for full width on mobile, sm:w-1/2 for 50% on sm and up. */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full sm:w-1/2">
              {/* Main heading */}
              {/* <h1 className="text-3xl sm:text-6xl lg:text-7xl font-clash-display text-blue mb-2">
                Want to see more?
              </h1> */}
              {/* Subheading */}
              <h3 className="text-lg font-helvetica sm:text-xl text-blue">
                Learn about what else can we co-create to help your team be
                productive while lo:ooking go:ood.
              </h3>
            </div>

            {/* Right Column: Button with Arrow */}
            {/* w-full for full width on mobile, sm:w-1/2 for 50% on sm and up. */}
            <div className="flex-shrink-0 w-[70%] sm: flex justify-center sm:justify-end">
              <div className="w-[85%] bg-yellow p-8 rounded-2xl flex sm:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
                {/* Text content */}
                <div className="text-center md:text-left">
                  <h1 className="font-clash-display text-5xl text-white mb-2 tracking-wider">
                    Book a Call
                  </h1>
                  <span className="text-md font-helvetica text-white">
                    Discover more opportunities for your brand
                  </span>
                </div>

                {/* Circle with arrow */}
                <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-white hover: transition-colors duration-300 transform hover:scale-105 cursor-pointer">
                  <svg
                    className="w-12 h-12 md:w-16 md:h-16 text-blue"
                    width="74"
                    height="17"
                    viewBox="0 0 74 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M73.3348 9.16972C73.7751 8.72946 73.7751 8.01566 73.3348 7.5754L66.1604 0.40093C65.7201 -0.0393305 65.0063 -0.0393305 64.566 0.40093C64.1258 0.841191 64.1258 1.555 64.566 1.99526L70.9433 8.37256L64.566 14.7499C64.1258 15.1901 64.1258 15.9039 64.566 16.3442C65.0063 16.7844 65.7201 16.7844 66.1604 16.3442L73.3348 9.16972ZM0.386719 8.37256V9.49992H72.5377V8.37256V7.2452H0.386719V8.37256Z"
                      fill="#004482"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
