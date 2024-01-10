import React from "react";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="mt-12 mb-8 mx-auto max-w-fit">
      <h1 className="text-xl md:text-2xl px-4 md:pb-1  font-extrabold text-orange-500">
        {title}
      </h1>
      <h1 className="font-bold md:text-xl px-4 pt-2 md:border-t-4 border-t-2 border-orange-500">
        {subTitle}
      </h1>
    </div>
  );
};

export default SectionTitle;
