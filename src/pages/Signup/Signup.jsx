import React, { useEffect, useState } from "react";
import logo from "../../assets/shohozain.png";
import SectionTitle from "../Shared/SectionTitle";
import { Link } from "react-router-dom";
import TextInput from "../../components/TextInput";
import { GoEyeClosed, GoEye } from "react-icons/go";
import LocationSelector from "../../components/LocationSelector";
import SelectField from "../../components/SelectField";
import { Helmet } from "react-helmet";

const Signup = () => {
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [age, setAge] = useState("");
  const [selectedOccupation, setSelectedOccupation] = useState("");
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const occupations = [
    { _id: "1", occupation: "ডাক্তার" },
    { _id: "2", occupation: "ইঞ্জিনিয়ার" },
    { _id: "3", occupation: "শিক্ষক" },
    { _id: "4", occupation: "ব্যবসায়ী" },
    { _id: "5", occupation: "আইনজীবী" },
    { _id: "6", occupation: "সরকারি কর্মচারী" },
    { _id: "7", occupation: "কৃষক" },
    { _id: "8", occupation: "পুলিশ" },
    { _id: "9", occupation: "সাংবাদিক" },
    { _id: "10", occupation: "ব্যাংকার" },
    { _id: "11", occupation: "অন্যান্য" },
  ];

  useEffect(() => {
    if (
      name &&
      emailOrPhone &&
      age &&
      division &&
      district &&
      upazila &&
      password &&
      confirmPassword
    ) {
      if (password === confirmPassword) {
        alert("Password Matched");
        setDisabled(false);
      }
    } else {
      setDisabled(true);
    }
  }, [
    name,
    emailOrPhone,
    division,
    district,
    upazila,
    password,
    confirmPassword,
  ]);

  const handleSignup = (event) => {
    event.preventDefault();
    console.log({
      name,
      emailOrPhone,
      age,
      division,
      district,
      upazila,
      password,
      confirmPassword,
    });
  };

  return (
    <div className="py-10 tablet:py-14 laptop:py-20">
      <Helmet>
        <title>
          Signup @ ShohozAin - Join the Leading Legal Services Platform
        </title>
        <meta
          name="description"
          content="Signup for ShohozAin and join the leading legal services platform. Create your account to access expert legal advice, manage cases, and connect with professionals. Quick and secure registration process."
        />
        <meta
          name="keywords"
          content="ShohozAin signup, legal services registration, join legal platform, create account, legal advice, case management"
        />
      </Helmet>

      <SectionTitle
        title={"সাইন আপ করুন"}
        subTitle={"আমাদের সাথে যুক্ত হতে আপনার অ্যাকাউন্ট তৈরি করুন"}
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
          <form onSubmit={handleSignup} className="" action="#" method="POST">
            <div className="space-y-4">
              <TextInput
                name="name"
                placeholder="আপনার নাম"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextInput
                name="emailORPhone"
                placeholder="ইমেইল অথবা ফোন নম্বর"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
              />
              <div className="flex gap-2">
                <TextInput
                  name="age"
                  type="number"
                  placeholder="বয়স"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
                <SelectField
                  id="occupation"
                  name="occupation"
                  value={selectedOccupation}
                  onChange={(e) => setSelectedOccupation(e.target.value)}
                  options={occupations}
                  placeholder="পেশা নির্বাচন করুন"
                />
              </div>
              <LocationSelector
                onDivisionChange={setDivision}
                onDistrictChange={setDistrict}
                onUpazilaChange={setUpazila}
              />

              <TextInput
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="পাসওয়ার্ড"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="relative">
                <TextInput
                  name="confirm-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="পাসওয়ার্ড নিশ্চিত করুন"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-orange-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <GoEye /> : <GoEyeClosed />}
                </div>
              </div>
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
                সাইন আপ করুন
              </button>
            </div>
          </form>

          <p className="mt-5 font-semibold text-center text-sm text-orange-500">
            ইতিমধ্যে একটি অ্যাকাউন্ট আছে?
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="/login"
              className="font-bold leading-6 ml-2 text-orange-600 tablet:hover:text-orange-700"
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
