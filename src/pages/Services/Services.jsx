import React, { useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import { FaCheck } from "react-icons/fa";
import { servicesData } from "./ServicesData";

const Services = () => {
  return (
    <div className="max-w-[1280px] mx-auto mt-24 tablet:mt-32 px-4 tablet:px-0">
      <SectionTitle
        title={"সার্ভিস সমূহ"}
        subTitle={"আমরা সাধারণত যেসব সেবা দিয়ে থাকি"}
      ></SectionTitle>
      <p className="text-base tablet:text-xl mb-4 font-semibold mt-10">
        আপনার কি জমি সংক্রান্ত ঝামেলা? মামলা-মোকদ্দমায় আটকে গেছেন? চুক্তি নিয়ে
        চিন্তা? ব্যক্তিগত, পারিবারিক, বা ব্যবসায়িক বিষয়ে আইনি দিকনির্দেশনা
        প্রয়োজন? চিন্তা নেই! সহজ আইন আপনার পাশে। আমরা আপনার সকল আইনি সমাধানের
        জন্য এক-স্টপ সমাধান: অভিজ্ঞ আইনজীবীদের দল: সহজ আইনে রয়েছে জমি, মামলা,
        চুক্তি, পরামর্শ এবং আরও অনেক কিছুতে বিশেষজ্ঞ অভিজ্ঞ আইনজীবীদের একটি দল।
        আমরা আপনার আইনি সমস্যাগুলি দ্রুত, সাশ্রয়ী এবং কার্যকরভাবে সমাধান করতে
        প্রতিশ্রুতিবদ্ধ। আমাদের কিছু পরিষেবা নিচে দেয়া হলো
      </p>

      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6 tablet:my-10">
        {servicesData.map((service) => (
          <div className=" tablet:hover:translate-y-4 relative rounded-lg border-orange-500 border-[2px] shadow-lg tablet:hover:shadow-2xl duration-700 transition-all min-h-60 tablet:min-h-96 group overflow-hidden grid place-items-center">
            <div>
              <div className="relative group-hover:opacity-0 duration-700 object-cover rounded-full mx-auto">
                <img
                  className="blur-[2px] brightness-50"
                  src={`/serviceImage/${service.image}`}
                  alt=""
                />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <h1 className="text-center text-orange-500 font-bold text-3xl tablet:text-4xl laptop:text-6xl">
                    {service.title} <br />
                  </h1>
                  <h1 className="flex laptop:hidden text-center text-[12px] p-1 border-t-2 text-white font-semibold border-orange-500">
                    <span className="text-center">
                      বিস্তারিত জানতে ক্লিক করুন
                    </span>
                  </h1>
                </div>
              </div>

              {/* Hovered Items */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 min-w-80 tablet:w-full flex justify-center">
                <div className="grid grid-cols-1 tablet:grid-cols-2 items-center justify-center">
                  <div className="font-bold text-xl tablet:text-2xl laptop:text-3xl mr-0 tablet:mr-4 border-b-2 tablet:border-b-0 border-orange-500 text-right">
                    {service.title}
                  </div>
                  <div className="grid grid-cols-2 tablet:grid-cols-1 gap-1 tablet:gap-2 border-l-0 tablet:border-l-4 border-orange-500 mt-2 tablet:mt-0">
                    {service.subservices.map((subService) => (
                      <div className="flex items-center tablet:ml-4 hover:text-orange-500  duration-300 ml-2">
                        <FaCheck className="mr-2 text-base tablet:text-xl" />{" "}
                        <h1 className="font-bold text-base tablet:text-xl">
                          {subService}
                        </h1>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
