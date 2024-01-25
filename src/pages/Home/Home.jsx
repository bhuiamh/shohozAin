import React from "react";
import Banner from "./Banner";
import QuickLearn from "./QuickLearn/QuickLearn";
import Login from "../Login/Login";
import AboutUs from "./AboutUs/AboutUs";

const Home = () => {
  return (
    <div className="max-w-[1440px]">
      <Banner />
      <AboutUs />
      <QuickLearn />
      <Login />
    </div>
  );
};

export default Home;
