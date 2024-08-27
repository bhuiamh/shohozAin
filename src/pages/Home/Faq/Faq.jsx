import React, { useState, useRef, useEffect } from "react";
import SectionTitle from "../../Shared/SectionTitle";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { FaqData } from "../../../data/FaqData";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRef = useRef(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    if (contentRef.current && activeIndex === 0) {
      contentRef.current.focus();
    }
  }, [contentRef, activeIndex]);

  const activePathname = useLocation().pathname;

  if (activePathname === "/faq") {
    console.log("faq");
  }

  return (
    <div className="max-w-[1280px] w-full mx-auto mt-24 tablet:mt-32 px-4 tablet:px-0">
      {activePathname === "/faq" && (
        <Helmet>
          <title>
            FAQ @ ShohozAin - Frequently Asked Questions About Our Legal
            Services
          </title>
          <meta
            name="description"
            content="Find answers to common questions about ShohozAin's legal services. Learn more about our platform, how to get started, pricing, and how we can assist with your legal needs. Get all the information you need in our FAQ section."
          />
          <meta
            name="keywords"
            content="ShohozAin FAQ, legal services questions, ShohozAin help, legal assistance FAQ, getting started with ShohozAin, legal service pricing, common legal questions"
          />
        </Helmet>
      )}

      <div className="">
        <SectionTitle
          title={"সাধারন জিজ্ঞাসা"}
          subTitle={"সচরাচর যেসব প্রশ্ন যেসব প্রশ্ন আপনারা জিজ্ঞেস করেন"}
        ></SectionTitle>
        <div className="mx-auto mt-10">
          <div className="border-b border-gray-200">
            {FaqData.map((faq, index) => (
              <div
                key={faq.question}
                className={`border-t border-gray-200 ${
                  activeIndex === index ? "" : ""
                }`}
              >
                <div
                  className="flex justify-between items-center cursor-pointer p-4"
                  onClick={() => handleClick(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleClick(index);
                    }
                  }}
                  tabIndex={activeIndex === index ? "0" : "-1"}
                  aria-expanded={activeIndex === index}
                >
                  <h3 className="text-base tablet:text-xl text-orange-500 font-bold">
                    {faq.question}
                  </h3>
                  <span className="text-bold text-orange-500 text-base tablet:text-xl">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </div>
                {activeIndex === index && (
                  <div
                    className="px-4 pb-2"
                    ref={contentRef}
                    tabIndex={activeIndex === index ? "0" : "-1"}
                    aria-labelledby={`question-${index}`}
                  >
                    <p className="font-semibold text-base tablet:text-xl cursor-default">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};



export default FAQ;
