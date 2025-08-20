// src/Navbar.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="navBar border-b border-gray-700">
      <img className="scale-40" src="images/main-logo.webp" alt="mainlogo" />

      <div className="flex items-center gap-2 sm:gap-4">
        <img
          src="/images/more.png"
          alt="close"
          className="w-8 sm:hidden"
          onClick={() => setSidebarOpen(true)}
        />
      </div>

      <div
        className={`sm:text-sm ${
          !sidebarOpen
            ? "max-sm:w-0 overflow-hidden"
            : "max-sm:w-60 max-sm:pl-10"
        } 
        max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen
        max-sm:h-full max-sm:flex-col max-sm:bg-yellow max-sm:
        max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
      >
        <img
          src="/images/close.png"
          alt="close"
          className="w-5 absolute right-4 top-4 sm:hidden"
          onClick={() => setSidebarOpen(false)}
        />
        {/* Use Link to navigate to the home page */}
        <Link to="/" className="p-5 sm:hover:border-b">
          Home
        </Link>
        {/* You can keep this as an <a> for in-page scrolling */}
        <a href="#About" className="p-5 sm:hover:border-b">
          About
        </a>
        {/* Use Link to navigate to the new contact page */}
        <Link
          to="/contact"
          className="h-full flex items-center px-6 rounded-none p-5 rounded-b-lg bg-blue sm:hover:bg-yellow text-white"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
