import React from "react";
import Banner from "./Banner";
import QuickLearn from "./QuickLearn/QuickLearn";
import Login from "../Login/Login";
import AuthorTalk from "./AuthorTalk/AuthorTalk";
import Services from "../Services/Services";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {
  return (
    <div className="max-w-[1440px]">
      <Banner />
      <AuthorTalk />
      <Services />
      <QuickLearn />
      <Login />
      <AboutUs />
    </div>
  );
};

export default Home;
