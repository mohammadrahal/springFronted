import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from '../assests/images/image1.jpg'
const HeroSection = () => {
  return (
    <Carousel showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000}>
      <div>
        <img src={Image} alt="Image 1" className="h-64 w-64 "/>
      </div>
      <div>
        <img src={Image} alt="Image 2" className="h-64 w-64 "/>
      </div>
      <div>
        <img src={Image} alt="Image 3" className="h-64 w-64 "/>
      </div>
    </Carousel>
  );
};

export default HeroSection;
