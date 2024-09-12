import React from "react";

const ComponentTitle = ({ title }) => {
  return (
    <div className="mx-auto flex items-center justify-center">
      <div className="w-20 bg-orange-500 h-[2px]" />
      <div className="h-[14px] w-[14px] border-2 rounded-full border-orange-500 bg-orange-500 " />
      <h1 className="text-xl px-2 tablet:text-2xl py-1 text-center tablet:pb-1 font-extrabold text-orange-500">
       {title}
      </h1>
      <div className="h-[14px] w-[14px] border-2 rounded-full border-orange-500 bg-orange-500 " />
      <div className="w-20 bg-orange-500 h-[2px]" />
    </div>
  );
};

export default ComponentTitle;
