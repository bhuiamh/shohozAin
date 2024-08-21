import React, { useEffect, useState } from "react";
import logo from "../../assets/shohozain.png";
import SectionTitle from "../Shared/SectionTitle";
import { Player } from "@lottiefiles/react-lottie-player";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { Link } from "react-router-dom";
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(true);

  // Update the disabled state based on email and password fields
  useEffect(() => {
    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  
  return (
    <div className="my-auto ">
      <SectionTitle
        title={"লগইন করুন"}
        subTitle={"বিস্তারিত জানতে আমাদের সাথে যুক্ত হন"}
      ></SectionTitle>

      <div className="flex flex-1 flex-col justify-center px-6 laptop:px-8">
        <div className="mobile:mx-auto mobile:w-full mobile:max-w-sm">
          <img className="mx-auto h-24 w-auto" src={logo} alt="Your Company" />
        </div>

        <div className="mt-1 mobile:mx-auto mobile:w-full mobile:max-w-sm">
          <form onSubmit={handleLogin} className="" action="#" method="POST">
            <div className="space-y-4">
              <input
                name="emailORPhone"
                type="text"
                required
                placeholder="ইমেইল অথবা ফোন নম্বর"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent block w-full border-0 py-2 text-orange-500 shadow-sm ring-0  placeholder:text-orange-500/50 focus:ring-0 border-b-2 border-orange-500 focus:border-orange-500 focus:scale-105 duration-300 mobile:text-sm mobile:leading-6"
              />

             <div className="relative">
             <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="পাসওয়ার্ড"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent w-full border-0 py-2 text-orange-500 shadow-sm ring-0  placeholder:text-orange-500/50 focus:ring-0 border-b-2 border-orange-500 focus:border-orange-500 focus:scale-105 duration-300 mobile:text-sm mobile:leading-6 flex items-center"
              />
                <div
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-orange-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <GoEye /> : <GoEyeClosed />}
              </div>
             </div>

            
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
              disabled={disabled}
                type="submit"
                className={`flex w-full justify-center rounded-md ${disabled ? "bg-orange-300" : "bg-orange-600 hover:bg-orange-700"} px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600`}
              >
                সাইন ইন করুন
              </button>
            </div>
          </form>

          <p className="mt-5 font-semibold text-center text-sm text-orange-500">
            নতুন মেম্বার ?
            <Link
              to="/signup"
              className="font-bold leading-6 ml-2 text-orange-600 hover:text-orange-700"
            >
              সাইন আপ করুন
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
