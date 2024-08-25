import React, { useState } from "react";
import Banner from "./Banner";
import QuickLearn from "./QuickLearn/QuickLearn";
import AuthorTalk from "./AuthorTalk/AuthorTalk";
import Services from "../Services/Services";
import AboutUs from "../AboutUs/AboutUs";
import FAQ from "./Faq/Faq";
import ClientSwiper from "./ClientSwiper/ClientSwiper";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Home @ ShohozAin - Your Gateway to Expert Legal Services</title>
        <meta
          name="description"
          content="Welcome to ShohozAin, your trusted platform for expert legal services. Explore our range of legal solutions tailored for individuals and businesses, and connect with experienced professionals who are here to guide you through every step."
        />
        <meta
          name="keywords"
          content="ShohozAin, legal services, expert legal advice, legal solutions, trusted legal platform, business legal services, personal legal assistance"
        />
      </Helmet>

      <Banner />
      <AuthorTalk />
      <Services />
      <QuickLearn />
      <AboutUs />
      <ClientSwiper />
      <FAQ />
    </div>
  );
};

export default Home;
