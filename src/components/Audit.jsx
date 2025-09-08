import React from "react";
import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerEffect(ScrollTrigger);
const animateFrom = (elem, direction) => {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    elem.style.transform = "translate(" + x + "px, " + y + "px)";
    elem.style.opacity = "0";
    gsap.fromTo(
        elem,
        { x: x, y: y, autoAlpha: 0 },
        {
            duration: 1.25,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: "expo",
            overwrite: "auto",
        }
    );
};

const hide = (elem) => {
    gsap.set(elem, { autoAlpha: 0 });
};

const Audit = () => {
    
    // const transfrom = document.querySelector(".gs_transfrom");
    // transfrom.addEventListener("mouseenter", () => {
    //     // gsap.to(transfrom, {
    //     //     width: 100
    //     // });
    // });
    // transfrom.addEventListener("mouseleave", () => {
    //     gsap.to(transfrom, {
    //         width: calc(var(--spacing) * 40)
    //     });
    // });
    useEffect(() => {
        
        const transfrom = document.querySelector(".gs_transfrom");
        transfrom.addEventListener("mouseenter", () => {
            gsap.to(".color_change", {
                backgroundColor: "#8b8030",
                scale: 1.1
            });
            
            gsap.to(".gs_color", {
                color: "#fceff0",
                scale: 1.1,
            });
        });
        transfrom.addEventListener("mouseleave", () => {
            gsap.to(".color_change", {
                backgroundColor: "#fceff0",
                scale: 1
            });

            gsap.to(".gs_color", {
                color: "#004482",
            });
        });
        gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
            hide(elem);
            ScrollTrigger.create({
                trigger: elem,
                // markers: true,
                onEnter: function () {
                    animateFrom(elem);
                },
                onEnterBack: function () {
                    animateFrom(elem, -1);
                },
                onLeave: function () {
                    hide(elem);
                }, // assure that the element is hidden when scrolled into view
            });
        });
    }, []);
    return (
        // The new outer div that sets the overall width to 90% and centers the content
        <div className="w-full mx-auto min-h-screen bg-white p-8 font-sans">

            {/* Top box */}
            <div className="flex justify-center">
                <div className="gs_transfrom color_change w-[80%] bg-pink p-8 rounded-2xl flex items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
                    {/* Text content */}
                    <div className="gs_reveal text-center md:text-left">
                        <h1 className="gs_color font-clash-display text-6xl text-blue mb-2 leading-tight">
                            Free Brand Audit
                        </h1>
                        <p className="gs_color font-helvetica text-base text-black leading-snug">
                            Struggling to decide on your next steps? We’re here
                            for your next move.
                        </p>
                    </div>

                    {/* <div className="gs_transfrom p-8 absolute bg-amber-800 w-40 h-40 rounded-full z-0" ></div> */}
                    {/* Circle with arrow */}
                    <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-white">
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
            {/* Two bottom boxes */}
            <div className="flex flex-col md:flex-row w-full md:w-full lg:w-full space-y-8 md:space-y-0 md:space-x-8">
                {/* Left box */}
                <div className="gs_reveal w-full md:w-1/2 p-6 md:p-8 bg-white bg-blur rounded-2xl border-2 border-dashed border-blue text-blue">
                    <h2 className="font-clash-display text-3xl mb-5 mt-10">
                        What’s in it?
                    </h2>
                    <p className="font-helvetica text-sm ">
                        1. An overview of what makes up your brand
                    </p>
                    <p className="font-helvetica text-sm ">
                        2. Insights on opportunities you can take advantage of
                    </p>
                    <p className="font-helvetica text-sm ">
                        3. Analysis of your current digital footprint
                    </p>
                </div>

                {/* Right box */}
                <div className="gs_reveal w-full md:w-1/2 p-6 md:p-8 bg-white rounded-2xl border-2 border-dashed border-blue text-blue">
                    <h2 className="font-clash-display text-3xl mb-5 mt-10">
                        This is for you if:
                    </h2>
                    <p className="font-helvetica text-sm ">
                        1. You are planning to give your brand a refresh
                    </p>

                    <p className="font-helvetica text-sm ">
                        2. You want your brand to communicate better
                    </p>

                    <p className="font-helvetica text-sm ">
                        3. You want to know what can work better for your brand
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Audit;
