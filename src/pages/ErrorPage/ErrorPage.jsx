import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import logo from "../../assets/shohozain.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <Helmet>
        <title>Error @ ShohozAin - Secure Legal Services Portal</title>
        <meta
          name="description"
          content="Oops! It looks like something went wrong on ShohozAin. If you need assistance with our legal services portal, please contact our support team for help. We are here to assist you with secure and reliable access to legal professionals and case management."
        />
        <meta
          name="keywords"
          content="ShohozAin error, legal services issue, support, secure access, online legal help, case management assistance"
        />
      </Helmet>

      {/* Logo */}
      <div className="">
        <img
          src={logo}
          alt="Shohoz Ain Logo"
          className="h-12 tablet:h-16 laptop:h-20 w-auto"
        />
      </div>

      {/* 404 Error Text */}

      <div className="flex">
        <h1 className="text-[100px] tablet:text-[150px] laptop:text-[200px] h-24 tablet:h-36 laptop:h-52 animate-pulse font-extrabold text-orange-500">
          4
        </h1>
        <h1 className="text-[100px] tablet:text-[150px] laptop:text-[200px] h-24 tablet:h-36 laptop:h-52  font-extrabold text-orange-500">
          0
        </h1>
        <h1 className="text-[100px] tablet:text-[150px] laptop:text-[200px] h-24 tablet:h-36 laptop:h-52 animate-pulse font-extrabold text-orange-500">
          4
        </h1>
      </div>

      {/* Main Content */}
      <div className="text-center">
        <p className="text-sm tablet:text-base laptop:text-lg mt-4 mb-5 font-semibold">
          দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা পাওয়া যায়নি। এই পৃষ্ঠা মুছে ফেলা
          হয়েছে বা লিঙ্কটি ভুল হতে পারে।
        </p>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          className="text-orange-500 tablet:hover:bg-orange-500 tablet:hover:text-white duration-300 font-bold px-3 py-1 border border-orange-500 rounded"
          to={"/"}
        >
          হোম এ ফিরে যান
        </Link>

        <div className="mt-10 grid grid-cols-1 tablet:grid-cols-3 gap-4 place-content-center font-semibold">
          <div className="flex gap-4">
            <div className="h-12 w-12 border-2 border-orange-500 rounded-md flex justify-center items-center">
              <FaLocationDot className="text-orange-500" size={20} />
            </div>
            <div className="flex flex-col items-start">
              <h1 className="text-sm font-bold">ঠিকানা</h1>
              <h1 className="text-xs text-start">
                এইচ এইচ প্রোপার্টিস, সি/১, রোড ১০,
                <br /> পূর্ব গোরান, খিলগাঁও, ঢাকা
              </h1>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="h-12 w-12 border-2 border-orange-500 rounded-md flex justify-center items-center">
              <IoCall className="text-orange-500" size={20} />
            </div>
            <div className="flex flex-col items-start">
              <h1 className="text-xs font-bold">ফোন নাম্বার</h1>
              <h1 className="text-xs text-start">
                +880 167 104 3256 <br /> +880 167 104 3256
              </h1>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="h-12 w-12 border-2 border-orange-500 rounded-md flex justify-center items-center">
              <MdEmail className="text-orange-500" size={20} />
            </div>
            <div className="flex flex-col items-start">
              <h1 className="text-xs font-bold">ইমেইল</h1>
              <h1 className="text-xs text-start">
                contact@shohozain.com <br /> amirhamzalemon@gmail.com
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
