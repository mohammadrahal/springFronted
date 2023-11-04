import React from "react";
import { useEffect, useState } from "react";
import Logo from '../assests/images/SPRINGLOGO.png'
// css
import '../css/navbar.css'
const Navbar = () => {
  return (
    <div className=" container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <nav className=" ">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center justify-center">
            <img src={Logo} alt="logo" className="logo" />
            {/* <span className=" font-bold text-lg">SPRING</span> */}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="items hover:text-stone-600">
              Home
            </a>
            <a href="#" className="items hover:text-stone-600">
              About
            </a>
            <a href="#" className="items hover:text-stone-600">
              Services
            </a>
          </div>
          <button className="md:hidden">menu</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
