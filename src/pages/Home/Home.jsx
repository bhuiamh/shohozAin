import React, { useState } from "react";
import Banner from "./Banner";
import QuickLearn from "./QuickLearn/QuickLearn";
import Login from "../Login/Login";
import AuthorTalk from "./AuthorTalk/AuthorTalk";
import Services from "../Services/Services";
import AboutUs from "../AboutUs/AboutUs";
import Modal from "./Modal/Modal";

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
      <QuickLearn />
      <Login />
      <AboutUs />
    </div>
  );
};

export default Home;
