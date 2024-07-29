import React from "react";
import logo from "../../assets/shohozain.png";
import SectionTitle from "../Shared/SectionTitle";
import { Player } from "@lottiefiles/react-lottie-player";
import { GoEye } from "react-icons/go";
const Login = () => {
  return (
    <div className="pt-[80px]">
      <SectionTitle
        title={"লগইন করুন"}
        subTitle={"বিস্তারিত জানতে আমাদের সাথে যুক্ত হন"}
      ></SectionTitle>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 laptop:px-8">
        <div className="mobile:mx-auto mobile:w-full mobile:max-w-sm">
          <img className="mx-auto h-24 w-auto" src={logo} alt="Your Company" />
        </div>

        <div className="mt-1 mobile:mx-auto mobile:w-full mobile:max-w-sm">
          <form className="" action="#" method="POST">
            <div className="space-y-4">
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
                className="bg-transparent w-full border-0 py-2 text-orange-500 shadow-sm ring-0  placeholder:text-orange-500/50 focus:ring-0 border-b-2 border-orange-500 focus:border-orange-500 focus:scale-105 duration-300 mobile:text-sm mobile:leading-6 flex items-center"
              />
            </div>
            <div className="flex justify-end mt-1">
              {/* todo need to change a to Link */}
              <a
                href="#"
                className="text-xs text-end text-orange-500 hover:text-orange-700"
              >
                পাসওয়ার্ড ভুলে গেছেন ?
              </a>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              >
                সাইন ইন করুন
              </button>
            </div>
          </form>

          <p className="mt-5 font-semibold text-center text-sm text-orange-500">
            নতুন মেম্বার ?
            <a
              href="#"
              className="font-bold leading-6 ml-2 text-orange-600 hover:text-orange-700"
            >
              সাইন আপ করুন
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
