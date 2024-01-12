import React from "react";
import Banner from "./Banner";
import QuickLearn from "./QuickLearn/QuickLearn";
import Login from "../Login/Login";

const Home = () => {
  return (
    <div>
      <Banner />
      <QuickLearn />
      <Login />
    </div>
  );
};

export default Home;
