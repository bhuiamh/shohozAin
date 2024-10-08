import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import BlogSearch from "./BlogSearch";

const BlogCategories = () => {
  const categories = [

    { id: 1, typeOfCategory: "jomi-songkarno", name: "জমি সংক্রান্ত" },
    { id: 2, typeOfCategory: "dewani-mokoddoma", name: "দেওয়ানী মোকদ্দমা" },
    { id: 3, typeOfCategory: "paribarik-somossa", name: "পারিবারিক সমস্যা" },
    { id: 4, typeOfCategory: "Chukti-probol-mokoddoma", name: "চুক্তি প্রবল মোকদ্দমা" },
    { id: 5, typeOfCategory: "arbitration-mokoddoma", name: "আরবিট্রেশন মোকদ্দমা" },
    { id: 6, typeOfCategory: "ortho-rin-mokoddoma", name: "অর্থ ঋণ মোকদ্দমা" },
    { id: 7, typeOfCategory: "check-songkranto-mokoddoma", name: "চেক সংক্রান্ত মামলা মোকদ্দমা" },
    { id: 8, typeOfCategory: "recent-blogs", name: "সমসাময়িক ব্লগসমূহ" },
    { id: 9, typeOfCategory: "popular-blogs", name: "পপুলার ব্লগসমূহ" },
    { id: 10, typeOfCategory: "all-blogs", name: "সকল ব্লগ"},

  ];

  const handleScroll = (category) => {
    const element = document.getElementById(category.typeOfCategory);
    if (element) {
      // Get the element's position relative to the top of the document
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      
      // Scroll to the position with an offset
      window.scrollTo({
        top: elementPosition - 100, // Adjust 100 pixels up
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className="">
        <SectionTitle subTitle={"ব্লগ ক্যাটাগরি"} />
    
      <div className="mt-5 tablet:mt-10 flex flex-wrap gap-2">
        {categories.map((category) => (
          <div
            onClick={() => handleScroll(category)}
            key={category.id}
            id={`category-${category.id}`}
            className="p-1 tablet:p-2 laptop:p-3 border tablet:border-2 border-orange-500 rounded tablet:hover:bg-orange-500 hover:text-white cursor-pointer"
          >
            <h2 className="text-sm tablet:text-base laptop:text-lg font-semibold">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCategories;
