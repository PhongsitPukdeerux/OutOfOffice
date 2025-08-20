import React, { useState } from "react";

const HomePage = () => {
  const [hoverState, setHoverState] = useState({
    topLeft: false,
    topRight: false,
    bottomLeft: false,
  });

  const handleMouseEnter = (box) => {
    setHoverState((prevState) => ({ ...prevState, [box]: true }));
  };

  const handleMouseLeave = (box) => {
    setHoverState((prevState) => ({ ...prevState, [box]: false }));
  };

  return (
    <section className="relative">
      <div className="absolute w-[70%] h-full rounded-3xl bg-pink rounded-l-3xl z-[-100]"></div>
      <div className="min-h-screen p-8 flex items-center justify-center font-sans antialiased">
        <div className="w-full max-w-7xl mx-auto rounded-3xl bg-white shadow-2xl inset-shadow-2xl p-6 md:p-12">
          <div className="flex flex-wrap md:flex-row -m-4">
            {/* Top Left Box (60%) */}
            <div
              className="p-4 w-full md:w-3/5"
              onMouseEnter={() => handleMouseEnter("topLeft")}
              onMouseLeave={() => handleMouseLeave("topLeft")}
            >
              {/* Main content box. Removed "relative" and "justify-end" to allow for fluid content flow */}
              <div className="h-full rounded-xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.02] bg-blue p-6 md:p-12 flex flex-col">
                {/* Icon container. Removed "absolute" positioning. */}
                <div className="mb-4 w-16 h-16 md:w-20 md:h-20 overflow-hidden">
                  <img
                    src={
                      hoverState.topLeft
                        ? "/animated/ThirdSpace.gif"
                        : "/images/ThirdSpace.png"
                    }
                    alt="Interactive Icon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-2xl md:text-4xl font-bold mb-2 text-white">
                  Third <span className="font-pixel-script">S</span>pace
                </h1>
                <p className="text-sm font-helvetica md:text-base text-white">
                  A digital space for honest-to-goodness collaboration—where
                  clients are part of the process, and designers get the support
                  they need to sharpen their craft, not just chase deadlines.
                </p>
              </div>
            </div>

            {/* Top Right Box (40%) */}
            <div
              className="p-4 w-full md:w-2/5"
              onMouseEnter={() => handleMouseEnter("topRight")}
              onMouseLeave={() => handleMouseLeave("topRight")}
            >
              {/* Main content box. Removed "relative" and "justify-end" to allow for fluid content flow */}
              <div className="h-full rounded-xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.02] bg-white p-6 md:p-12 flex flex-col">
                {/* Icon container. Removed "absolute" positioning. */}
                <div className="mb-4 w-16 h-16 md:w-20 md:h-20 overflow-hidden">
                  <img
                    src={
                      hoverState.topRight
                        ? "/animated/NeedAHand.gif"
                        : "/images/NeedAHand.png"
                    }
                    alt="Interactive Icon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-2xl md:text-4xl font-bold mb-2 text-blue">
                  Need A <span className="font-pixel-script">H</span>and
                </h1>
                <p className="text-sm font-helvetica md:text-base text-black">
                  Need brand magic or a system revamp? Join our virtual no:ook
                  where work flows, not drags. It’s cute. It’s clean. It gets
                  things done.
                </p>
              </div>
            </div>

            {/* Bottom Left Box (60%) */}
            <div className="p-4 w-full md:w-3/5"
              onMouseEnter={() => handleMouseEnter("bottomLeft")}
              onMouseLeave={() => handleMouseLeave("bottomLeft")}>
              {/* Main content box. Removed "relative" and "justify-end" to allow for fluid content flow */}
              <div className="h-full rounded-xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-[1.02] bg-yellow p-6 md:p-12 flex flex-col">
                {/* Icon container. Removed "absolute" positioning. */}
                <div className="mb-4 w-16 h-16 md:w-20 md:h-20 overflow-hidden">
                  <img
                    src={
                      hoverState.bottomLeft
                        ? "/animated/Custom.gif"
                        : "/images/Custom.png"
                    }
                    alt="Interactive Icon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h1 className="text-2xl md:text-4xl font-bold mb-2 text-white">
                  Custom <span className="font-pixel-script">W</span>orks
                </h1>
                <p className="text-sm font-helvetica md:text-base text-white">
                  We shape a healthy digital space for creatives and clients to
                  collaborate with ease and clarity.
                </p>
              </div>
            </div>

            {/* Bottom Right Box (40%) */}
            <div className="p-8 w-full md:w-2/5">
              <div className="h-full relative rounded-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.02] ">
                <img
                  src="/images/homepage.png"
                  alt="Interactive Icon"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
