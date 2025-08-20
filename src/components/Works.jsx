import React from "react";

// You will need to replace these image URLs with your own.
const imageUrl1 = "/images/branding.jpg";
const imageUrl2 = "/images/socialMedia.png";

const worksData = [
  {
    id: 1,
    title: "Branding",
    category: "Out Of Office",
    image: imageUrl1,
    description:
      "Inspired by the early 2000s—an era of light, motion, and minimal digital chaos—this visual approach taps into nostalgic elements while staying fresh. Balanced typography, subtle effects, and clean energy make it feel familiar, yet forward.",
  },
  {
    id: 2,
    title: "Social Media",
    category: "Yana K. Studios",
    image: imageUrl2,
    description:
      "Yana K. Studios wanted a design language that resonates across Millennials and Gen Z—one that reflects their mission of inclusivity, comfort, and expressive fashion. We delivered a brand world with layered intimacy: from the tactile typography to the refined image treatments and a dynamic color system that mirrors individuality and edge.",
  },
];

const Works = () => {
  return (
    <section className="mb-20 mx-16 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {worksData.map((work) => (
            <div
              key={work.id}
              className="group h-[35rem] w-full md:w-1/2 perspective-1000"
            >
              {/* Card Container */}
              <div className="relative h-full w-full transition-transform duration-1800 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Face */}
                <div
                  className="absolute inset-0 bg-cover bg-center rounded-lg shadow-lg [backface-visibility:hidden]"
                  style={{ backgroundImage: `url(${work.image})` }}
                >
                  {/* Content on front face */}
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-center p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-gray-300 font-helvetica text-3xl text-center">
                    {work.description}
                  </p>
                </div>
              </div>

              {/* Content under the box */}
              <div className="mt-4 text-left font-clash-display">
                <h4 className="text-lg text-gray-800">{work.title}</h4>
                <span className="text-sm text-gray-500">{work.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full bg-white p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-12">
            {/* Left Column: Text Content */}
            {/* w-full for full width on mobile, sm:w-1/2 for 50% on sm and up. */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left w-full sm:w-1/2">
              {/* Main heading */}
              <h1 className="text-3xl sm:text-6xl lg:text-7xl font-clash-display text-blue mb-2">
                Want to see more?
              </h1>
              {/* Subheading */}
              <h3 className="text-lg font-helvetica sm:text-xl text-blue">
                Uncover our previous agency works and find out how we run things
              </h3>
            </div>

            {/* Right Column: Button with Arrow */}
            {/* w-full for full width on mobile, sm:w-1/2 for 50% on sm and up. */}
            <div className="flex-shrink-0 w-[60%] sm: flex justify-center sm:justify-end">
              <div className="w-[80%] bg-yellow p-8 rounded-2xl flex items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
                {/* Text content */}
                <div className="text-center md:text-left">
                  <h1 className="font-clash-display text-4xl text-white mb-2 leading-tight">
                  Get Full Portfolio & Service Guide
                  </h1>
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

export default Works;
