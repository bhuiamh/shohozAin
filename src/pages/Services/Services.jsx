import React, { useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import { FaCheck } from "react-icons/fa";
import { servicesData } from "./ServicesData";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";

const Services = () => {
  const activePathname = useLocation().pathname;
  return (
    <div className="max-w-[1280px] mx-auto mt-20 tablet:mt-28 px-4 tablet:px-0 cursor-pointer">
      {activePathname === "/services" && (
        <Helmet>
          <title>
            Services @ ShohozAin - Comprehensive Legal Solutions for All Your
            Needs
          </title>
          <meta
            name="description"
            content="Explore the wide range of legal services offered by ShohozAin. From legal consultation to case management and document preparation, our expert team is here to provide reliable and tailored solutions for individuals and businesses."
          />
          <meta
            name="keywords"
            content="ShohozAin services, legal solutions, legal consultation, case management, document preparation, legal advice, business legal services, personal legal services"
          />
        </Helmet>
      )}

      <SectionTitle
        title={"আমাদের সেবাসমূহ"}
        subTitle={"আপনি আমাদের কাছ থেকে যেসকল আইনি সেবা পাবেন"}
      ></SectionTitle>
      <p className="text-base tablet:text-xl mb-4 font-semibold mt-10 text-justify">
        আপনি কি জমি সংক্রান্ত সমস্যায় আছেন ? আপনার নামে কি মামলা-মোকদ্দমা হয়েছে
        ? আপনি কি চুক্তি নিয়ে চিন্তিত ? আপনার কি ব্যক্তিগত, পারিবারিক বা
        ব্যবসায়িক বিষয়ে আইনি দিকনির্দেশনা প্রয়োজন ? চিন্তা নেই! সহজ আইন আছে
        আপনার পাশে। আমরা আপনার সকল আইনি সমস্যা সমাধানের জন্য প্রস্তুত। সহজ আইনের
        মাধ্যমে আপনি আপনার জমি সংক্রান্ত সমস্যা, দেওয়ানী মোকদ্দমা, পারিবারিক
        সমস্যা ও মোকদ্দমা, চুক্তি প্রবল মোকদ্দমা, আরবিট্রেশন মোকদ্দমা, অর্থ ঋণ মোকদ্দমা, চেক সংক্রান্ত মামলা মোকদ্দমা সহ যাবতিয় আইনগত পরামর্শ পেতে পারেন । আমাদের আরো কিছু পরিষেবা নিচে দেয়া হলো।
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
                  <div className="font-bold text-xl tablet:text-2xl laptop:text-3xl mr-0 tablet:mr-4 border-b-2 tablet:border-b-0 border-orange-500 text-left tablet:text-right">
                    {service.title}
                  </div>
                  <div className="grid grid-cols-2 tablet:grid-cols-1 gap-1 tablet:gap-2 border-l-0 tablet:border-l-4 border-orange-500 mt-2 tablet:mt-0">
                    {service.subservices.map((subService, index) => (
                      <Link target="_blank" to={"/live-talk"} key={index} className="flex items-center tablet:ml-4 hover:text-orange-500  duration-300 ml-2">
                        <FaCheck className="mr-2 text-base tablet:text-xl" />
                        <h1 className="font-bold text-xs  tablet:text-xl">
                          {subService}
                        </h1>
                      </Link>
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
