import React from "react";
import advocateImg from "../../../assets/advocate.png";
import bgImage from "../../../assets/cover.png";
import SectionTitle from "../../Shared/SectionTitle";
const AuthorTalk = () => {
  return (
    <div className="max-w-[1280px] mx-auto mt-24 tablet:mt-32 px-4 tablet:px-0">
      <div className="">
        <SectionTitle title={"কিছু কথা"} subTitle={"আমি ও সহজ আইন"} />
        <div className="tablet:flex laptop:flex-grow laptop:flex-row-reverse tablet:flex-row-reverse tablet:flex-grow items-end">
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
          <div className="tablet:w-4/6 w-full text-base tablet:text-xl font-semibold mt-10 tablet:mt-10 laptop:mt-0">
            <h1>আসসালামু আলাইকুম,</h1>

            <h1 className="py-1">
              আমি এডভোকেট আমির হামজা লিমন। আমি একজন আইনজীবী এবং বাংলাদেশ সুপ্রিম
              কোর্ট ও হাই কোর্টে সিভিল সার্ভিস প্রদান করি। আমার লাইসেন্স নম্বর
              ০০০০০০০০০০।
            </h1>

            <h1 className="py-1">
              <span className="text-orange-700">সহজ আইনের</span> পক্ষ থেকে
              আপনাদের স্বাগতম। সহজ আইন সবসময় আপনাদেরকে সঠিক সিদ্ধান্ত ও পরামর্শ
              দিয়ে আসছে। আপনাদের সেবা দেওয়ার জন্য আমি প্রতিশ্রুতিবদ্ধ। আমি
              জানি, আমার পেশাগত ব্যস্ততার কারণে আমার কাছ থেকে সেবা পেতে বিঘ্নতা
              ঘটে। এজন্য আমি আন্তরিকভাবে দুঃখিত। আপনার সেবা দেওয়ার ব্যাপারটিকে
              আরও সুন্দর ও নিরবচ্ছিন্ন করার জন্য আমি একটি সুন্দর ব্যবস্থা করেছি।
              এখন থেকে কিছু ফি প্রদানের মাধ্যমে আপনি আমার সাথে খুব সহজেই আমার
              কাছ থেকে আইনি পরামর্শ পেতে পারেন। এই ব্যবস্থার মাধ্যমে আমি আশা
              করি, আপনারা আরও সহজেই আমার সেবা পেতে পারবেন।
            </h1>
            <h1> ধন্যবাদ।</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorTalk;
