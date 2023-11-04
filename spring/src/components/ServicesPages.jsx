import React, { useState, useEffect } from "react";
import Fertilzers from "./Fertilzers";
import Pesticides from "./Pesticides";
import Herbicides from "./Herbicides";
//css
import '../css/showbtn.css'

const ServicesPages = () => {
  const [show, setShow] = useState("");

  const handleMenuClick = (page) => {
    setShow(page);
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-8">
      <div className="show-buttons">
        <button className="btn" onClick={() => handleMenuClick("fertilzers")}>
          Fertilzers
        </button>
        <button className="btn" onClick={() => handleMenuClick("pesticides")}>
          Pesticides
        </button>
        <button className="btn" onClick={() => handleMenuClick("herbicides")}>
          Herbicides
        </button>
        <button className="btn" onClick={() => handleMenuClick("irrigation-system")}>
          Irrigation system
        </button>
        <button className="btn" onClick={() => handleMenuClick("vegetable-seeds")}>
          Vegetable seeds
        </button>
        <button className="btn" onClick={() => handleMenuClick("banana-tissue")}>
          Banana tissue culture plants
        </button>
        <button className="btn" onClick={() => handleMenuClick("banana-packaging")}>
          Banana packaging line
        </button>
      </div>

      <div className="">
        {show === "fertilzers" && <Fertilzers />}
        {show === "pesticides" && <Pesticides />}
        {show === "herbicides" && <Herbicides/>}
        {/* {activePage === "" && < />} */}
      </div>
    </div>
  );
};

export default ServicesPages;
