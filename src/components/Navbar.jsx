import React, { useState } from "react";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div
      className="flex justify-between items-center px-4
        sm:px-12 1g:px-24 x1:px-40 py-4 sticky top-0 z-20
        backdrop-blur-xl font-medium bg-white "
    >
      <img
        className="scale-20"
        src="public/images/main-logo.webp"
        alt="mainlogo"
      />

      <div
        className={`sm:text-sm ${
          !sidebarOpen
            ? "max-sm:w-0 overflow-hidden"
            : "max-sm:w-60 max-sm:pl-10"} 
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
        <a href="#" className="p-5 sm:hover:border-b">
          Home
        </a>
        <a href="#About" className="p-5 sm:hover:border-b">
          About
        </a>
        <a
          href="#ContactUs"
          className="p-5 rounded-b-lg bg-yellow sm:hover:border-b"
        >
          Contact Us
        </a>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <img
            src="/images/more.png"
            alt="close"
            className="w-8 sm:hidden"
            onClick={() => setSidebarOpen(true)}
        />
      </div>
    </div>
  );
};

export default Navbar;
