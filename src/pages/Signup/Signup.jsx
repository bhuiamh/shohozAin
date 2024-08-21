import React, { useState } from "react";
import logo from "../../assets/shohozain.png";
import SectionTitle from "../Shared/SectionTitle";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [zela, setZela] = useState("");
  const [upzela, setUpzela] = useState("");
  const [union, setUnion] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disabled, setDisabled] = useState(true);

  // Update the disabled state based on input fields
  React.useEffect(() => {
    if (
      name &&
      emailOrPhone &&
      zela &&
      upzela &&
      union &&
      password &&
      confirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, emailOrPhone, zela, upzela, union, password, confirmPassword]);

  const handleSignup = (event) => {
    event.preventDefault();
    // Handle signup logic here
    console.log({
      name,
      emailOrPhone,
      zela,
      upzela,
      union,
      password,
      confirmPassword,
    });
  };

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
          <form onSubmit={handleSignup} className="" action="#" method="POST">
            <div className="space-y-4">
              <input
                name="name"
                type="text"
                required
                placeholder="আপনার নাম"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent block w-full border-0 py-2 text-orange-500 shadow-sm ring-0 placeholder:text-orange-500/50 focus:ring-0 border-b-2 border-orange-500 focus:border-orange-500 focus:scale-105 duration-300 mobile:text-sm mobile:leading-6"
              />

              <input
                name="emailORPhone"
                type="text"
                required
                placeholder="ইমেইল অথবা ফোন নম্বর"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="bg-transparent block w-full border-0 py-2 text-orange-500 shadow-sm ring-0 placeholder:text-orange-500/50 focus:ring-0 border-b-2 border-orange-500 focus:border-orange-500 focus:scale-105 duration-300 mobile:text-sm mobile:leading-6"
              />

              <div className="flex space-x-2">
                <input
                  name="zela"
                  type="text"
                  required
                  placeholder="জেলা"
                  value={zela}
                  onChange={(e) => setZela(e.target.value)}
                  className="bg-transparent block w-full border-0 py-2 text-orange-500 shadow-sm ring-0 placeholder:text-orange-500/50 focus:ring-0 border-b-2 border-orange-500 focus:border-orange-500 focus:scale-105 duration-300 mobile:text-sm mobile:leading-6"
                />
                <input
                  name="upzela"
                  type="text"
                  required
                  placeholder="উপজেলা"
                  value={upzela}
                  onChange={(e) => setUpzela(e.target.value)}
                  className="bg-transparent block w-full border-0 py-2 text-orange-500 shadow-sm ring-0 placeholder:text-orange-500/50 focus:ring-0 border-b-2 border-orange-500 focus:border-orange-500 focus:scale-105 duration-300 mobile:text-sm mobile:leading-6"
                />
                <input
                  name="union"
                  type="text"
                  required
                  placeholder="ইউনিয়ন"
                  value={union}
                  onChange={(e) => setUnion(e.target.value)}
                  className="bg-transparent block w-full border-0 py-2 text-orange-500 shadow-sm ring-0 placeholder:text-orange-500/50 focus:ring-0 border-b-2 border-orange-500 focus:border-orange-500 focus:scale-105 duration-300 mobile:text-sm mobile:leading-6"
                />
              </div>

              <input
                name="password"
                type="password"
                required
                placeholder="পাসওয়ার্ড"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent w-full border-0 py-2 text-orange-500 shadow-sm ring-0 placeholder:text-orange-500/50 focus:ring-0 border-b-2 border-orange-500 focus:border-orange-500 focus:scale-105 duration-300 mobile:text-sm mobile:leading-6"
              />

              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                placeholder="পাসওয়ার্ড নিশ্চিত করুন"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-transparent w-full border-0 py-2 text-orange-500 shadow-sm ring-0 placeholder:text-orange-500/50 focus:ring-0 border-b-2 border-orange-500 focus:border-orange-500 focus:scale-105 duration-300 mobile:text-sm mobile:leading-6"
              />
            </div>

            <div className="mt-4">
              <button
                disabled={disabled}
                type="submit"
                className={`flex w-full justify-center rounded-md ${
                  disabled
                    ? "bg-orange-300"
                    : "bg-orange-600 hover:bg-orange-700"
                } px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600`}
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
