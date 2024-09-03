import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/shohozain.png";

const Footer = () => {
  return (
    <footer className="w-full bg-base-200 mt-32 pt-10">
      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 max-w-[1280px] justify-center mx-auto text-base-content mb-10 laptop:mb-2 px-4 laptop:px-0">
        <div className="">
          <h1 className="text-orange-500 font-bold text-xl mb-2">
            সহজ আইন লিমিটেড
          </h1>
          <div className="flex flex-col">
            <Link className="link font-bold link-hover">
              সাহায্য এবং সহযোগিতা
            </Link>
            <Link className="link font-bold link-hover">শর্তাবলী</Link>
            <Link className="link font-bold link-hover">প্রাইভেসি পলিসি</Link>
          </div>
        </div>
        <div className="">
          <h1 className="text-orange-500 font-bold text-xl mb-2">অন্যান্য</h1>
          <div className="flex flex-col">
            <Link onClick={() => window.scrollTo(0, 0)} to="/about-us" className="link font-bold link-hover">আমাদের সম্পর্কে</Link>
            <Link onClick={() => window.scrollTo(0, 0)} to="/faq" className="link font-bold link-hover">সাধারন জিজ্ঞাসা</Link>
            <Link onClick={() => window.scrollTo(0, 0)} to="/blogs" className="link font-bold link-hover">ব্লগ</Link>
          </div>
        </div>
        <div className="">
          <h1 className="text-orange-500 font-bold text-xl mb-2">যোগাযোগ</h1>
          <div className="flex flex-col">
            <Link className="font-bold flex">
              <FaLocationDot className="text-xl text-orange-500 mr-2" />
              এইচ এইচ প্রোপার্টিস, সি/১, রোড ১০, পূর্ব গোরান, খিলগাঁও, ঢাকা
            </Link>
            <Link className="font-bold flex">
              <IoCall className="text-xl text-orange-500 mr-2" />
              +8801671-043256
            </Link>
            <Link className="font-bold flex">
              <IoMdMail className="text-orange-500 text-xl mr-2" />
              amirhamzalemon@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 tablet:grid-cols-2 items-center justify-between px-10 py-1 border-t bg-base-300 text-base-content border-orange-500">
        <div className="flex items-center justify-center tablet:justify-start space-x-4">
          <img src={logo} alt="Shohoz Ain" className="h-20 w-20" />
          <p className="text-orange-500">
            <span className="font-extrabold text-xl">সহজ আইন লিমিটেড</span>
            <br />
            রক্ষণাবেক্ষন ও সার্বিক নিরাপত্তায়
            <Link
              target="blank"
              to="https://bhuiamh.netlify.app/"
              className="text-orange-700 font-semibold pl-1"
            >
              মাহমুদুল হাসান ভূঁইয়া
            </Link>
          </p>
        </div>
        <h1 className="text-base text-end tablet:text-end laptop:text-end mt-5 laptop:mt-0">
          © 2024 All Rights Reserved | Shohoz Ain
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
