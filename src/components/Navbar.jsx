import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Get the current location object
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setNavbarVisible(false);
      } else {
        setNavbarVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // A helper function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        navbarVisible ? "translate-y-0" : "-translate-y-full"
      } navBar border-b border-gray-700`}
    >
      <Link to="/">
        <img className="scale-40" src="images/main-logo.webp" alt="mainlogo" />
      </Link>

      <div className="flex items-center gap-2 sm:gap-4">
        <img
          src="/images/more.png"
          alt="open sidebar"
          className="w-8 sm:hidden cursor-pointer"
          onClick={toggleSidebar}
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
          alt="close sidebar"
          className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={toggleSidebar}
        />
        <Link
          to="/"
          className={`p-5 ${
            isActive("/") ? "bg-blue text-white" : "text-blue"
          } rounded-b-lg hover:text-blue hover:bg-pink`}
          onClick={toggleSidebar}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`p-5 ${
            isActive("/about") ? "bg-blue text-white" : "text-blue"
          } rounded-b-lg hover:text-blue hover:bg-pink`}
          onClick={toggleSidebar}
        >
          About
        </Link>
        <Link
          to="/works"
          className={`p-5 ${
            isActive("/works") ? "bg-blue text-white" : "text-blue"
          } rounded-b-lg hover:text-blue hover:bg-pink`}
          onClick={toggleSidebar}
        >
          Works
        </Link>
        <Link
          to="/contact"
          className={`p-5 ${
            isActive("/contact") ? "bg-blue text-white" : "text-blue"
          } rounded-b-lg hover:text-blue hover:bg-pink`}
          onClick={toggleSidebar}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
