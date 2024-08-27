import React from "react";
import FaqImage1 from "/serviceImage/onnano@shohozAin.png";
import { FaHeart, FaRegComment } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";

const BlogCard = () => {

    const faqText =
    "কয়েক প্রকারের দলিল আছে, যেগুলো সম্পত্তি হস্তান্তরের দলিল নয়, যেমন- বায়নাপত্র দলিল, পাওয়ার অব অ্যাটর্নি (আমমোক্তারনামা) দলিল, উইল দলিল, অছিয়ত দলিল, চুক্তিপত্র দলিল ইত্যাদি  রেজিস্ট্রি অফিসে বাতিলকরণ দলিল রেজিস্ট্রির মাধ্যমে সংশ্লিষ্ট দলিলের পক্ষগণ সকলের সম্মতিতে একত্রে দলিল সম্পাদনের মাধ্যমে বাতিল করতে পারেন। সম্পত্তি হস্তান্তরের বিভিন্ন দলিল যেমন, সাফ কবলা, দানপত্র, হেবার ঘোষণাপত্র, হেবাবিল এওয়াজ ইত্যাদি দলিল রেজিস্ট্রি অফিসে বাতিলকরণ দলিল রেজিস্ট্রি করে বাতিল করা যায় না। আইনগত ও যৌক্তিক কারণে বাতিলের প্রয়োজন হলে আদালতে মোকদ্দমা দায়ের করে বাতিলের করতে হয়। এমনিভাবে রেজিস্ট্রিকৃত জাল দলিল বাতিলের ক্ষমতা সাব-রেজিস্ট্রার এর নেই। জাল দলিল বাতিলের ক্ষমতা আদালতের উপর ন্যস্ত করা হয়েছে। তাই দলিল জাল হলে জাল দলিলটি বাতিলের জন্য আদালতে মোকদ্দমা দায়ের করতে হবে। সুনির্দিষ্ট প্রতিকার আইন, ১৮৭৭ এর ৩৯ ধারায় রেজিস্ট্রিকৃত দলিল বাতিলের পদ্ধতি লেখা রয়েছে। এ ধারা মোতাবেক, যে কোন ব্যক্তি যার বিরুদ্ধে লিখিত চুক্তি বাতিল কিংবা বাতিলযোগ্য, যার যুক্তিসঙ্গত সম্ভাবনা আছে যে, সেরূপ দলিল যদি অনিস্পন্ন অবস্থায় ছেড়ে দেয়া হয়, তবে তার গুরুতর ক্ষতির কারন হবে; তবে সে দলিলটি বাতিল বা বাতিলযোগ্য ঘোষনার জন্য মোকাদ্দমা দায়ের করতে পারে এবং আদালত তার স্বেচ্ছাধীন ক্ষমতা বলে উক্ত রূপে রায় প্রদান করতে পারেন ও চুক্তিটি বাতিল করার নির্দেশ দিতে পারেন। তবে যদি কোন দলিল রেজিস্ট্রেশন আইন, ১৯০৮ অনুসারে রেজিস্ট্রিকৃত হয়ে থাকে (অর্থাৎ বালাম বহিতে নকল বা কপি হয়ে থাকে), তবে আদালত এরূপ ডিক্রীর একটি কপি সংশ্লিষ্ট রেজিস্ট্রি অফিসে প্রেরন করবেন। আদালতের আদেশ প্রাপ্তির পর সংশ্লিষ্ট কর্মকর্তা, দলিলটি রেজিস্টার বইয়ের যে পৃষ্টায় নকল হয়েছে সেখানে বিলুপ্তির বিষয়ে টীকা লিপিবদ্ধ করবেন। কোন রেজিস্ট্রিকৃত দলিল আদালতে জাল বা কপট পরিচয় প্রদানকারী ব্যক্তির মাধ্যমে রেজিস্ট্রিকৃত হয়েছে মর্মে ঘোষিত হলে, সংশ্লিষ্ট আদালত হতে ডিক্রির নকল প্রাপ্তির পর রেজিস্ট্রি অফিসে সংশ্লিষ্ট রেজিস্টার বহিতে নকলের মার্জিনে এবং প্রাপ্তি সাপেক্ষে দলিলটিতেও উক্ত বিষয়ে একটি টীকা লিপিবদ্ধ করতে হবে।";
 
  return (
    <div className="w-40 tablet:w-80 h-96 rounded-t-lg tablet:rounded-t-xl laptop:rounded-t-2xl overflow-hidden bg-cover bg-gradient-to-br from-black/15 to-orange-500/15 tablet:hover:from-black/25 tablet:hover:to-orange-500/25 shadow-2xl border-b-4 border-orange-500">
      <img className="" src={FaqImage1} alt="" />
      <div className="text-xs tablet:text-sm laptop:text-base p-2 tablet:p-3 laptop:p-4">
        <h1 className=" font-semibold text-orange-500">
          জমির ই-নামজারি করার নিয়ম ?
        </h1>
        <p className="text-[10px] tablet:text-xs laptop:text-sm font-semibold text-black cursor-default">
          {`${faqText.substring(0, 200)}...`}
          <button className=" text-orange-500 font-semibold">
            পুরোটা পড়ুন
          </button>
        </p>
        <div className="w-full flex items-center gap-2 pt-2 tablet:pt-3 laptop:pt-4 cursor-pointer">
          <FaHeart size={20} className="text-orange-500" />
          <div className="w-20 h-8 tablet:w-full tablet:h-8 font-semibold border-2 text-orange-500 border-orange-500 rounded-full flex items-center justify-between px-2">
            মন্তব্য করুন
            <FaRegComment className="text-orange-500" />
          </div>
          <FaShareAlt size={20} className="text-orange-500" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
