import React from "react";
import advocateImg from "../../../assets/advocate.png";
import bgImage from "../../../assets/cover.png";
import SectionTitle from "../../Shared/SectionTitle";
import { Link } from "react-router-dom";
const AuthorTalk = () => {
  return (
    <div className="max-w-[1280px] mx-auto mt-24 tablet:mt-32 px-4 tablet:px-0">
      <div className="">
        <SectionTitle title={"কিছু কথা"} subTitle={"আমি ও সহজ আইন"} />
        <div className="mt-10 table:mt-14 laptop:mt-16 tablet:flex laptop:flex-grow laptop:flex-row-reverse tablet:flex-row-reverse tablet:flex-grow items-end">
          <div
            className="mx-auto flex items-center w-fit bg-cover bg-image"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <img
              className="h-48 w-auto tablet:h-80 laptop:h-96 "
              src={advocateImg}
              alt="Advocate Amir Hamza Limon"
            />
          </div>
          <div className="cursor-default tablet:w-4/6 w-full text-base tablet:text-xl font-semibold mt-10 tablet:mt-10 laptop:mt-0">
            <h1>আসসালামু আলাইকুম,</h1>

            <h1 className="py-1">
              আমি এডভোকেট মোঃ আমির হামজা (লিমন), আমি কুড়িগ্রাম জেলার রৌমারি
              উপজেলার নিবৃত্ত পল্লী খতিয়ায় জন্মগ্রহণ করি। আমি ২০০৫ সালে
              দাঁতভাঙ্গা বি.এল হাইস্কুল থেকে মাধ্যমিক পরীক্ষায় উত্তীর্ণ হয়ে
              উচ্চ মাধ্যমিক, আইন বিভাগ থেকে সম্মান (স্নাতক) এবং স্নাতকোত্তর
              ডিগ্রি অর্জন করি। ২০১৪ সালে বাংলাদেশ বার কাউন্সিলে এডভোকেট হিসাবে
              তালিকাভুক্ত হয়ে ঢাকা বার এসোসিয়েশনে যোগদান করি। পরবর্তীতে আমি
              বাংলাদেশ সুপ্রিম কোর্টের হাইকোর্ট বিভাগের আইনজীবী হিসাবে
              তালিকাভুক্ত হই। আমি নিয়মিত আইন প্রাকটিস করি।
            </h1>

            <h1 className="py-1">
              <span className="text-orange-700">সহজ আইনের</span> পক্ষ থেকে
              আপনাকে স্বাগতম। সহজ আইন নিয়মিত আপনাদেরকে সঠিক আইনগত পরামর্শ দিয়ে
              আসছে এবং ভবিষ্যতেও আইনগত পরামর্শ দিতে প্রতিশ্রুতিবদ্ধ। আমি জানি,
              আমার পেশাগত ব্যস্ততার কারণে আমার কাছ থেকে সেবা পেতে আপনাদের
              বিঘ্নতা ঘটে। এজন্য আমি আন্তরিকভাবে দুঃখিত। এজন্য সেবা দেয়ার
              সুন্দর একটি ব্যবস্থা চালু করেছি। আপনি চাইলে খুব সহজেই আমার কাছ
              থেকে আইনি পরামর্শ পেতে পারেন। এজন্য আপনাকে মেনু থেকে <Link onClick={() => window.scrollTo(0, 0)} className="text-orange-700" to={'/live-talk'}>লাইভ কথা
              বলুন</Link> ক্লিক করে পরবর্তী নির্দেশনা অনুসরণ করতে হবে
            </h1>
            <h1> ধন্যবাদ।</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorTalk;
