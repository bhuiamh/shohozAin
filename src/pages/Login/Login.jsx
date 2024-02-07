import React from "react";
import logo from "../../assets/shohozain.png";
import SectionTitle from "../Shared/SectionTitle";
import { Player } from "@lottiefiles/react-lottie-player";
import { GoEye } from "react-icons/go";
const Login = () => {
  return (
    <div className=" min-h-[100vh] pt-[80px]">
      <SectionTitle
        title={"লগইন করুন"}
        subTitle={"বিস্তারিত জানতে আমাদের সাথে যুক্ত হন"}
      ></SectionTitle>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 laptop:px-8">
        <div className="mobile:mx-auto mobile:w-full mobile:max-w-sm">
          <img className="mx-auto h-24 w-auto" src={logo} alt="Your Company" />
        </div>

        <div className="mt-1 mobile:mx-auto mobile:w-full mobile:max-w-sm">
          <form className="space-y-3" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-base font-bold leading-6"
              >
                ইমেল
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="user@shohozain.com"
                  className="block w-full rounded-md border-0 py-1.5 text-orange-500 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-300 focus:ring-2 focus:ring-inset focus:ring-orange-500 mobile:text-sm mobile:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-base font-bold leading-6"
                >
                  পাসওয়ার্ড
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-orange-500 hover:text-orange-700"
                  >
                    পাসওয়ার্ড ভুলে গেছেন ?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="***************"
                  className="block border-r-0 w-full rounded-md border-0 py-1.5 text-orange-500 shadow-sm ring-1 ring-inset ring-orange-300 placeholder:text-orange-300 focus:ring-2 focus:ring-inset focus:ring-orange-500 mobile:text-sm mobile:leading-6"
                />
              </div>
            </div>

            <div>
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
