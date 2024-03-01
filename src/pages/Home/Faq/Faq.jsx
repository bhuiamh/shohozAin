import React, { useState, useRef, useEffect } from "react";
import SectionTitle from "../../Shared/SectionTitle";

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

  return (
    <div className="p-10">
      <div className="pb-12">
        <SectionTitle
          title={"সাধারন জিজ্ঞাসা"}
          subTitle={"সচরাচর যেসব প্রশ্ন যেসব প্রশ্ন আপনারা জিজ্ঞেস করেন"}
        ></SectionTitle>
        <div className="mx-auto">
          <div className="border-b border-gray-200">
            {faqs.map((faq, index) => (
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
                    <p className="font-semibold">{faq.answer}</p>
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

const faqs = [
  {
    question: "জমির নামজারি করার নিয়ম ?",
    answer:
      "জমির নামজারির জন্য আপনাকে প্রথমে আবেদনপত্র পূরণ করে সংশ্লিষ্ট উপজেলা সার্ভে অফিসে জমা দিতে হবে। এরপর সার্ভে অফিসার জমি পরিমাপ করে নামজারির অনুমোদন দেবেন।",
  },

  {
    question: "দলিলের ভুল সংশোধন করার নিয়ম ?",
    answer:
      "ভুল সংশোধনের জন্য সংশ্লিষ্ট সাব-রেজিস্ট্রার অফিসে আবেদন করুন এবং আবেদনের সাথে প্রয়োজনীয় কাগজপত্র (আবেদনপত্র, ভুল দলিলের মূল কপি, সংশোধিত দলিলের খসড়া, ন্যাশনাল আইডি কার্ডের স্ক্যান কপি, পাসপোর্ট সাইজের ছবি, ফি) জমা দিতে হবে।",
  },

  {
    question: "দলিল বাতিল করার নিয়ম ?",
    answer:
      "দলিল বাতিল করার জন্য সংশ্লিষ্ট সাব-রেজিস্ট্রার অফিসে আবেদন করুন এবং আবেদনের সাথে প্রয়োজনীয় কাগজপত্র (আবেদনপত্র, দলিলের মূল কপি, বাতিলের কারণ উল্লেখ করে একটি নোটিশ, ন্যাশনাল আইডি কার্ডের স্ক্যান কপি, পাসপোর্ট সাইজের ছবি, ফি) জমা দিতে হবে।",
  },

  {
    question: "খতিয়ানের ভুল সংশোধন করার নিয়ম ?",
    answer:
      "ভুল সংশোধনের জন্য সংশ্লিষ্ট উপজেলা সার্ভে অফিসে আবেদন করুন এবং আবেদনের সাথে প্রয়োজনীয় কাগজপত্র (আবেদনপত্র, খতিয়ানের স্ক্যান কপি, ভুলের প্রমাণ, ন্যাশনাল আইডি কার্ডের স্ক্যান কপি, পাসপোর্ট সাইজের ছবি, ফি) জমা দিতে হবে।",
  },

  {
    question: "খতিয়ানের করণিক ভুল সংশোধন করার নিয়ম ?",
    answer:
      "করণিক ভুল সংশোধনের জন্য সংশ্লিষ্ট উপজেলা সার্ভে অফিসে আবেদন করুন এবং আবেদনের সাথে প্রয়োজনীয় কাগজপত্র (আবেদনপত্র, খতিয়ানের স্ক্যান কপি, ভুলের প্রমাণ, ন্যাশনাল আইডি কার্ডের স্ক্যান কপি, পাসপোর্ট সাইজের ছবি, ফি)জমা দিতে হবে।",
  },

  {
    question: "দেওয়ানী মামলার শেষ করতে কতদিন লাগে ?",
    answer:
      "মামলার ধরণ, জটিলতা, এবং আদালতের কার্যপ্রণালীর উপর নির্ভর করে দেওয়ানী মামলার শেষ করতে কতদিন লাগবে তা নির্ধারণ করা কঠিন। সাধারণত, একটি দেওয়ানী মামলা শেষ করতে কয়েক বছর সময় লাগতে পারে।",
  },

  {
    question: "নামজারি করার খরচ কত ?",
    answer:
      "নামজারির খরচ নির্ভর করে জমির পরিমাণ, মূল্য এবং নামজারির ধরনে। খরচের মোটামুটি ধারণা: আবেদন ফি: ৫০ টাকা, মাপ ফি: প্রতি শতক জমির জন্য ১০ টাকা, নামজারি ফি: জমির মূল্যের ০.৫%, ডাক টিকিট: ৫০ টাকা, অন্যান্য খরচ: (প্রযোজ্য হলে)",
  },

  {
    question: "নামজারি বাতিল করার নিয়ম কি ?",
    answer:
      "নামজারি বাতিলের জন্য আপনাকে নিম্নলিখিত পদক্ষেপগুলি অনুসরণ করতে হবে: আবেদনপত্র: সংশ্লিষ্ট উপজেলা সার্ভে অফিসে একটি আবেদনপত্র জমা দিতে হবে। কারণ উল্লেখ: আবেদনপত্রে নামজারি বাতিল করার কারণ স্পষ্টভাবে উল্লেখ করতে হবে। প্রয়োজনীয় কাগজপত্র: আবেদনপত্রের সাথে প্রয়োজনীয় কাগজপত্র (মূল দলিল, নামজারি সনদ, ইত্যাদি) জমা দিতে হবে। বিচার-বিবেচনা: উপজেলা সার্ভে অফিসার আপনার আবেদন বিবেচনা করে নামজারি বাতিলের সিদ্ধান্ত নেবেন।",
  },

  {
    question: "বন্টন মামলা কিভাবে করতে হয় ?",
    answer:
      "বন্টন মামলা করার জন্য আপনাকে নিম্নলিখিত পদক্ষেপগুলি অনুসরণ করতে হবে: আবেদনপত্র: সংশ্লিষ্ট পারিবারিক আদালতে একটি আবেদনপত্র জমা দিতে হবে। মামলার বিবরণ: আবেদনপত্রে সম্পত্তির বিবরণ, ভাগ্যের হিস্যা, এবং মামলার কারণ স্পষ্টভাবে উল্লেখ করতে হবে। প্রয়োজনীয় কাগজপত্র: আবেদনপত্রেআবেদনপত্রের সাথে প্রয়োজনীয় কাগজপত্র (মূল দলিল, ওয়ারিশ সনদ, ইত্যাদি) জমা দিতে হবে। মামলার বিচার: আদালত আপনার মামলার বিচার করে সম্পত্তির বন্টনের রায় দেবেন।",
  },
  {
    question: "ওয়ারিশ সম্পত্তি না পেলে করণীয় কি ?",
    answer:
      "ওয়ারিশ সম্পত্তি না পেলে আপনি নিম্নলিখিত পদক্ষেপগুলি গ্রহণ করতে পারেন: আলোচনা: প্রথমে ওয়ারিশদের সাথে আলোচনার মাধ্যমে সমস্যা সমাধানের চেষ্টা করুন। ওয়ারিশ সনদ: আপনার ওয়ারিশ হিসেবে স্বীকৃতির জন্য ওয়ারিশ সনদ তৈরি করুন। আইনি পদক্ষেপ: আলোচনায় সমাধান না হলে, পারিবারিক আদালতে মামলা দায়ের করুন।",
  },
];

export default FAQ;
