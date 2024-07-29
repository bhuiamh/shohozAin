import React, { useState } from "react";
import Banner from "./Banner";
import QuickLearn from "./QuickLearn/QuickLearn";
import Login from "../Login/Login";
import AuthorTalk from "./AuthorTalk/AuthorTalk";
import Services from "../Services/Services";
import AboutUs from "../AboutUs/AboutUs";
import FAQ from "./Faq/Faq";
import ClientSwiper from "./ClientSwiper/ClientSwiper";

const Home = () => {
  

  return (
    <div className="max-w-[1440px]">
      <Banner />
      <AuthorTalk />
      <Services />
      <QuickLearn />
      <AboutUs />
      {/* <ClientSwiper /> */}
      <FAQ />
    </div>
  );
};

export default Home;
