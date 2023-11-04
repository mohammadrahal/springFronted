import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Services/>
      <Footer/>
    </div>
  );
};

export default HomePage;
