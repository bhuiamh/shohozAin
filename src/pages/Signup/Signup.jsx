import React from "react";
import logo from "../../assets/shohozain.png";
import SectionTitle from "../Shared/SectionTitle";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="my-auto">
      <SectionTitle
        title={"সাইন আপ করুন"}
        subTitle={"আমাদের সাথে যুক্ত হতে আপনার অ্যাকাউন্ট তৈরি করুন"}
      ></SectionTitle>

      <div className="flex flex-1 flex-col justify-center px-6 laptop:px-8">
        <div className="mobile:mx-auto mobile:w-full mobile:max-w-sm">
          <img className="mx-auto h-24 w-auto" src={logo} alt="Your Company" />
        </div>

        <div className="mt-1 mobile:mx-auto mobile:w-full mobile:max-w-sm">
          <form className="" action="#" method="POST">
            <div className="space-y-4">
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Full Name"
                className="bg-transparent block w-full border-0 py-2 text-orange-500 shadow-sm ring-0  placeholder:text-orange-500/50 focus:ring-0 border-b-2 border-orange-500 focus:border-orange-500 focus:scale-105 duration-300 mobile:text-sm mobile:leading-6"
              />

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                className="bg-transparent block w-full border-0 py-2 text-orange-500 shadow-sm ring-0  placeholder:text-orange-500/50 focus:ring-0 border-b-2 border-orange-500 focus:border-orange-500 focus:scale-105 duration-300 mobile:text-sm mobile:leading-6"
              />

              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                className="bg-transparent w-full border-0 py-2 text-orange-500 shadow-sm ring-0  placeholder:text-orange-500/50 focus:ring-0 border-b-2 border-orange-500 focus:border-orange-500 focus:scale-105 duration-300 mobile:text-sm mobile:leading-6"
              />

              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                placeholder="Confirm Password"
                className="bg-transparent w-full border-0 py-2 text-orange-500 shadow-sm ring-0  placeholder:text-orange-500/50 focus:ring-0 border-b-2 border-orange-500 focus:border-orange-500 focus:scale-105 duration-300 mobile:text-sm mobile:leading-6"
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                সাইন আপ করুন
              </button>
            </div>
          </form>

          <p className="mt-5 font-semibold text-center text-sm text-orange-500">
            ইতিমধ্যে একটি অ্যাকাউন্ট আছে?
            <Link
              to="/login"
              className="font-bold leading-6 ml-2 text-orange-600 hover:text-orange-700"
            >
              লগইন করুন
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
