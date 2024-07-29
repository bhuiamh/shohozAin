import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="w-full">
      <div className="mx-auto">
        <h1 className="text-xl tablet:text-2xl px-4 tablet:pb-1 font-extrabold text-orange-500">
          {title}
        </h1>
        <h1 className="font-bold w-3/4 text-base tablet:text-xl px-4 pt-2 tablet:border-t-4 border-t-2 border-orange-500">
          {subTitle}
        </h1>
      </div>
    </div>
  );
};

export default SectionTitle;
