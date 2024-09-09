import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import PricingPlans from "../../components/PricingPlans";
import { Helmet } from "react-helmet";

const LiveTalk = () => {
  return (
    <div className="max-w-[1280px] mx-auto mt-24 tablet:mt-32 px-4 tablet:px-0 cursor-pointer">
      <Helmet>
        <title>Live Talk @ ShohozAin - Instant Legal Advice and Support</title>
        <meta
          name="description"
          content="Engage in Live Talk with ShohozAin's legal experts for instant advice and support. Connect with professionals in real-time to discuss your legal concerns and get immediate assistance."
        />
        <meta
          name="keywords"
          content="Live Talk ShohozAin, instant legal advice, real-time legal support, live chat legal help, ShohozAin live assistance, talk to legal experts"
        />
      </Helmet>

      <SectionTitle
        title={"সরাসরি কথা বলুন"}
        subTitle={"আমাদের সাথে সরাসরি কথা বলতে প্যকেজ সিলেক্ট করুন"}
      ></SectionTitle>
      <p className="text-base tablet:text-xl mb-10 font-semibold mt-10 cursor-default text-justify">
        আপনার আইনি সমস্যার সহজ সমাধান চাই? আমরা আপনার জন্য সার্বক্ষণ উপস্থিত।
        মাত্র কয়েক ক্লিকে আপনি আমাদের বিশেষজ্ঞ আইনজীবীদের সাথে সরাসরি যোগাযোগ
        করতে পারবেন। ভিডিও কল বা অফিসে এসে আপনার সমস্যাটি বিস্তারিতভাবে আলোচনা
        করুন। আমাদের বিভিন্ন ধরনের প্যাকেজের মধ্য থেকে আপনার জন্য উপযুক্তটি
        নির্বাচন করুন। আরও জানতে
        <span className="text-orange-500 cursor-pointer">এখানে</span> ক্লিক করুন
        অথবা
        <span className="text-orange-500 cursor-pointer">000000000000000</span>
        নম্বরে কল করুন।
      </p>

      <PricingPlans category="liveTalk" />
      <div></div>
    </div>
  );
};

export default LiveTalk;
