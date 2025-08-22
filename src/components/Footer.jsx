import React from "react";
import gsap from "gsap";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const ticker = document.querySelector(".ticker2");
    const inner = ticker.querySelector(".ticker-wrap2");
    const content = inner.querySelector(".ticker-text2");
    const duration = ticker.getAttribute("data-duration");

    // Duplicate text for seamless loop
    inner.append(content.cloneNode(true));
    inner.append(content.cloneNode(true));

    const animations = [];
    inner.querySelectorAll(".ticker-text2").forEach((element) => {
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
    <section className="relative">
      <section className="flex flex-col justify-center min-h-[20px] overflow-hidden font-oswald bg-yellow">
        <div className="ticker2 p-1 whitespace-nowrap" data-duration="15">
          <div className="ticker-wrap2 flex gap-8">
            <div className="ticker-text2 text-white font-clash-display  text-[clamp(32px,4vw,60px)]">
              Work with Us •
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full text-white bg-yellow py-8 px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
          {/* Left Section: Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Placeholder for the logo. You can replace this with an actual image. */}
            <h1 className="font-clash-display text-4xl ml-2 mb-2 leading-tight">
              Ready to Collab!
            </h1>
            <img
              src="images/Sub-W.webp"
              alt="Logo"
              className="h-2xs w-2xs mb-2"
            />
            <p className="text-xs font-helvetica">
              @ ALL RIGHTS RESERVED. 2025 OUT OF OFFICE
            </p>
          </div>

          {/* Right Section: Contact and Info */}
          <div className="font-clash-display flex flex-col md:flex-row justify-end space-y-8 md:space-y-0 md:space-x-16 w-full md:w-auto">
            {/* Contact Section */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-xl md:text-2xl font-bold mb-4">
                Let’s Connect
              </h1>

              {/* Social Media Buttons */}
              <div className="flex space-x-4 mb-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue hover:text-white hover:bg-blue transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-pink-600 hover:text-white hover:bg-pink-600 transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 "
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <button
                  className="bg-transparent border-2 font-semibold py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:scale-105 cursor-pointer"
                  onClick={() =>
                    alert("Live Chat functionality would go here.")
                  }
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path
                      d="M23.0732 18.9924C22.6966 18.7838 20.8427 17.7873 20.4951 17.6483C20.1475 17.5092 19.8925 17.4339 19.626 17.8105C19.3595 18.1813 18.589 19.0213 18.3573 19.2705C18.1255 19.5196 17.8996 19.5428 17.523 19.3342C17.1464 19.1256 15.924 18.6737 14.5104 17.3123C13.4096 16.252 12.6854 14.9659 12.4768 14.5719C12.2683 14.178 12.4768 13.981 12.6738 13.7956C12.8534 13.6276 13.0736 13.3611 13.2763 13.1467C13.4733 12.9324 13.5428 12.7701 13.6819 12.521C13.8209 12.2719 13.763 12.046 13.6761 11.849C13.5892 11.652 12.8882 9.73434 12.5985 8.95801C12.3088 8.17589 11.9844 8.29176 11.7584 8.28596C11.5325 8.28017 11.2776 8.23382 11.0227 8.22803C10.7678 8.21644 10.3448 8.29755 9.97984 8.66834C9.61485 9.03912 8.5836 9.93132 8.51408 11.82C8.44456 13.7087 9.7481 15.5858 9.93349 15.8465C10.1131 16.113 12.4305 20.2032 16.2716 21.8891C20.1185 23.575 20.1359 23.0594 20.8427 23.0247C21.5495 22.9899 23.1485 22.1788 23.5019 21.2982C23.8553 20.4118 23.8843 19.647 23.7916 19.4848C23.6989 19.3226 23.4498 19.2125 23.0732 19.0098V18.9924ZM16.0225 28.094C13.4791 28.094 11.1154 27.3292 9.13399 26.0257L4.32537 27.5668L5.88962 22.9204C4.3891 20.8579 3.50848 18.3203 3.50848 15.58C3.50848 8.67413 9.1224 3.06022 16.0225 3.06022C22.9225 3.06022 28.5423 8.67413 28.5423 15.58C28.5423 22.4859 22.9283 28.0998 16.0225 28.0998V28.094ZM16.0225 0.540039C7.72037 0.540039 0.988306 7.2721 0.988306 15.5742C0.988306 18.413 1.77622 21.0722 3.14929 23.3375L0.432129 31.4079L8.75741 28.7429C10.9126 29.9363 13.3864 30.6142 16.0225 30.6142C24.3304 30.6142 31.0624 23.8821 31.0624 15.5742C31.0624 7.26631 24.3304 0.540039 16.0225 0.540039Z"
                      fill="white"
                    />
                  </svg>
                  <span>Live Chat</span>
                </button>
              </div>

              <a
                href="hello@ooocollective.net"
                className="text-sm hover:text-blue transition-colors duration-300"
              >
                Email: hello@ooocollective.net
              </a>
            </div>

            {/* Info Section */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-xl md:text-2xl font-bold mb-4">Info</h1>
              <nav className="flex flex-col space-y-2">
                <a
                  href="#"
                  className="text-sm hover:text-blue transition-colors duration-300"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-sm hover:text-blue transition-colors duration-300"
                >
                  Works
                </a>
                <a
                  href="#"
                  className="text-sm hover:text-blue transition-colors duration-300"
                >
                  Contact Us
                </a>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
