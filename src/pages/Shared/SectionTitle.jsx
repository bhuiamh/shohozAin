import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="my-5 tablet:my-10 mx-4 tablet:mx-8 max-w-screen-laptop">
      <div className="mx-auto max-w-fit">
        <h1 className="text-xl  tablet:text-2xl px-4 tablet:pb-1 font-extrabold text-orange-500">
          {title}
        </h1>
        <h1 className="font-bold mobile:w-[400px] tablet:w-[900px] laptop:w-[1300px] text-base tablet:text-xl px-4 pt-2 tablet:border-t-4 border-t-2 border-orange-500">
          {subTitle}
        </h1>
      </div>
    </div>
  );
};

export default SectionTitle;
