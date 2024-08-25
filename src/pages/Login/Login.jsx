import React, { useEffect, useState } from "react";
import logo from "../../assets/shohozain.png";
import SectionTitle from "../Shared/SectionTitle";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { Link } from "react-router-dom";
import TextInput from "../../components/TextInput";
import { Helmet } from "react-helmet";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(true);

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
      <Helmet>
        <title>
          Login @ ShohozAin - Secure Access to Your Legal Services Portal
        </title>
        <meta
          name="description"
          content="Login to ShohozAin, your trusted legal services portal. Access personalized legal assistance, manage your cases, and connect with experienced professionals. Secure and user-friendly."
        />
        <meta
          name="keywords"
          content="ShohozAin login, legal services, secure access, online legal help, case management, legal professionals"
        />
      </Helmet>

      <SectionTitle
        title={"লগইন করুন"}
        subTitle={"বিস্তারিত জানতে আমাদের সাথে যুক্ত হন"}
      ></SectionTitle>

      <div className="flex flex-1 flex-col justify-center px-6 laptop:px-8">
        <div className="mobile:mx-auto mobile:w-full mobile:max-w-sm">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img
              className="mx-auto h-24 w-auto"
              src={logo}
              alt="Your Company"
            />
          </Link>
        </div>

        <div className="mt-1 mobile:mx-auto mobile:w-full mobile:max-w-sm">
          <form onSubmit={handleLogin} className="" action="#" method="POST">
            <div className="space-y-4">
              <TextInput
                name="emailORPhone"
                placeholder="ইমেইল অথবা ফোন নম্বর"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="relative">
                <TextInput
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="পাসওয়ার্ড"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-orange-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <GoEye /> : <GoEyeClosed />}
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-1 ">
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="#"
                className="text-xs text-end text-orange-500 tablet:hover:text-orange-700"
              >
                পাসওয়ার্ড ভুলে গেছেন ?
              </Link>
            </div>

            <div className="mt-4">
              <button
                disabled={disabled}
                type="submit"
                className={`flex w-full justify-center rounded-md ${
                  disabled
                    ? "bg-orange-300"
                    : "bg-orange-600 tablet:hover:bg-orange-700"
                } px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600`}
              >
                সাইন ইন করুন
              </button>
            </div>
          </form>

          <p className="mt-5 font-semibold text-center text-sm text-orange-500">
            নতুন মেম্বার ?
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="/signup"
              className="font-bold leading-6 ml-2 text-orange-600 tablet:hover:text-orange-700"
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
