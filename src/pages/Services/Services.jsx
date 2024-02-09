import React, { useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import jomiImage from "../../assets/services/jomi-joma@shohozAin.png";
const Services = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return (
    <div className="pt-[80px]">
      <SectionTitle
        title={"সার্ভিস সমূহ"}
        subTitle={"আমরা সাধারণত যেসব সেবা দিয়ে থাকি"}
      ></SectionTitle>
      <div className="grid grid-cols-1 tablet:grid-cols-2">
        <div
          className="hero h-72 w-72"
          style={{
            backgroundImage:
              "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div
        className="relative overflow-hidden h-64 flex items-center justify-center rounded-lg" // Use appropriate dimensions as needed
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={jomiImage} // Replace with the URL of your image
          alt="Image description"
          className="absolute top-0 left-0 w-full h-full object-cover "
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex items-center justify-center text-white">
          <h2 className="font-bold text-2xl text-center">Card Title</h2>
          <p className="mt-2 text-md text-center">
            Optional subtitle or description
          </p>
        </div>
        {isHovered && (
          <div className="absolute top-0 left-1/2 w-1/2 h-full bg-gray-900 opacity-80 flex flex-col items-center justify-center text-white md:hidden">
            <ul className="space-y-2 text-left">
              <li>List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
        )}
        {isHovered && (
          <div className=" absolute top-0 left-0 w-1/2 h-full bg-gray-900 flex flex-col items-center justify-center text-white md:hidden">
            <ul className="space-y-2 text-left">
              <li className="animate-bounce">List item 1</li>
              <li>List item 2</li>
              <li>List item 3</li>
            </ul>
          </div>
        )}
        {isHovered && (
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-900 md:block">
            {/* Replace with your main content, e.g., text, buttons, or other components */}
            <p className="text-center text-lg">
              This is the main content that appears on hover on larger screens.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
