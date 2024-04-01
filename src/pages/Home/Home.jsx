import React, { useState } from "react";
import Banner from "./Banner";
import QuickLearn from "./QuickLearn/QuickLearn";
import Login from "../Login/Login";
import AuthorTalk from "./AuthorTalk/AuthorTalk";
import Services from "../Services/Services";
import AboutUs from "../AboutUs/AboutUs";
import Modal from "./Modal/Modal";
import FAQ from "./Faq/Faq";
import ClientSwiper from "./ClientSwiper/ClientSwiper";

const Home = () => {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="max-w-[1440px]">
      <div>{showModal && <Modal onClose={handleCloseModal} />}</div>
      <Banner />
      <AuthorTalk />
      <Services />
      {/* <QuickLearn /> */}
      <AboutUs />
      {/* <ClientSwiper /> */}
      <FAQ />
    </div>
  );
};

export default Home;
