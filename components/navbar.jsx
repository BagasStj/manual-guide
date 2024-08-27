"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"; // Import Heroicons

const Navbar = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
    toggleSidebar();  // Call the function to control the sidebar
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-2 px-6 transition-all duration-500 bg-black text-white">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src={logo} alt="logo" priority className="w-auto h-auto" />
        </div>

        {/* Search Box */}
        <div className="hidden lg:flex items-center space-x-5 bg-[#313131] px-1 py-2 rounded-md">
          <MagnifyingGlassIcon className="h-5 w-5 text-white" /> {/* Magnifying Glass Icon */}
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white border-none focus:outline-none"
          />
        </div>

        {/* Toggle Button (Visible only on mobile) */}
        <button
          onClick={handleToggleMenu}
          className="lg:hidden focus:outline-none"
        >
          <div className={`burger-menu ${isOpen ? 'open' : ''}`}>
            <span className="block w-8 h-1 bg-white mb-1"></span>
            <span className="block w-8 h-1 bg-white mb-1"></span>
            <span className="block w-8 h-1 bg-white"></span>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
