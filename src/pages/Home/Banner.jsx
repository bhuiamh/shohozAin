import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";
import banner4 from "../../assets/banner/banner4.png";
import banner5 from "../../assets/banner/banner5.png";
import banner6 from "../../assets/banner/banner6.png";
import banner7 from "../../assets/banner/banner7.png";
import banner8 from "../../assets/banner/banner8.png";
import banner9 from "../../assets/banner/banner9.png";
import { RiLiveFill } from "react-icons/ri";

import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="relative shadow-md tablet:tablet:hover:shadow-2xl">
        <Carousel
          className="pt-[80px]"
          autoPlay
          transitionTime={1000}
          infiniteLoop
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          centerSlidePercentage={true}
          stopOnHover={true}
          showThumbs={false}
          interval={4000}
        >
          <div>
            <img src={banner1} />
          </div>
          <div>
            <img src={banner2} />
          </div>
          <div>
            <img src={banner3} />
          </div>
          <div>
            <img src={banner4} />
          </div>
          <div>
            <img src={banner5} />
          </div>
          <div>
            <img src={banner6} />
          </div>
          <div>
            <img src={banner7} />
          </div>
          <div>
            <img src={banner8} />
          </div>
          <div>
            <img src={banner9} />
          </div>
        </Carousel>
        <Link onClick={() => window.scrollTo(0, 0)} to="/live-talk" className="absolute top-24 right-4 tablet:right-6">
          <RiLiveFill
            
            className="text-2xl tablet:text-4xl tablet:hover:text-orange-700  text-orange-500 "
          />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
