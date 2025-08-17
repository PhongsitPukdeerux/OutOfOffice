import React from "react";
import gsap from "gsap";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const ticker = document.querySelector(".ticker");
    const inner = ticker.querySelector(".ticker-wrap");
    const content = inner.querySelector(".ticker-text");
    const duration = ticker.getAttribute("data-duration");

    // Duplicate text for seamless loop
    inner.append(content.cloneNode(true));

    const animations = [];
    inner.querySelectorAll(".ticker-text").forEach((element) => {
      const animation = gsap.to(element, {
        x: "-100%",
        repeat: -1,
        duration: duration,
        ease: "linear",
      });
      animations.push(animation);
    });

    // Pause on hover
    ticker.addEventListener("mouseenter", () => {
      animations.forEach((anim) => anim.pause());
    });
    ticker.addEventListener("mouseleave", () => {
      animations.forEach((anim) => anim.play());
    });
  }, []);

  return (
    <section>
      <div className="bg-blue py-20 ">
        <div className="relative w-full max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-lg ms:max-w-5xl">
          {/* Image */}
          <img
            src="images/hero.jpg"
            alt="hero"
            className="w-full h-[500px] object-cover transform hover:scale-105 transition duration-700"
          />

          {/* Overlay (optional dark tint for readability) */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Text inside image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
              Your creative <span className="font-pixel-script">D</span>esigner
              on espresso.
            </h1>
            <p className="mt-4 text-base font-helvetica text-white max-w-2xl">
              Let’s make digital feel more…well, human. It’s time to leave a
              mark that truly matters.
            </p>

            <button className="mt-6 w-96 bg-yellow hover:bg-blue text-white font-bold py-3 px-6 rounded-lg shadow-lg transition">
              Build your Brand
            </button>
          </div>
        </div>
      </div>

      <section className="flex flex-col justify-center min-h-[20px] overflow-hidden font-oswald bg-yellow">
        <div className="ticker p-1 whitespace-nowrap" data-duration="15">
          <div className="ticker-wrap flex gap-8">
            <div className="ticker-text text-white font-clash-display tracking-tight text-[clamp(32px,4vw,60px)]">
              Hello, We are Out of Office 🥰
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
