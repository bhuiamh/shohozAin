import React from "react";
import Banner from "./Banner";
import QuickLearn from "./QuickLearn/QuickLearn";
import Login from "../Login/Login";
import AuthorTalk from "./AuthorTalk/AuthorTalk";

const Home = () => {
  return (
    <div className="max-w-[1440px]">
      <Banner />
      <AuthorTalk />
      <QuickLearn />
      <Login />
    </div>
  );
};

export default Home;
