import React, { useEffect, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { CiDark, CiLight, CiSettings } from "react-icons/ci";
import { GoLaw } from "react-icons/go";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { MdConnectWithoutContact } from "react-icons/md";
import { RiHome2Fill, RiLiveLine } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";

import { Link } from "react-router-dom";
import logo from "../../assets/shohozain.png";

const Navbar = () => {
  const user = true;
  // Theme Changer
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "halloween"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleTheme = (e) => {
    if (localStorage.getItem("theme") == "halloween") {
      setTheme("retro");
    } else {
      setTheme("halloween");
    }
  };

  const menuItem = (
    <>
      <Link className="text-orange-500 font-semibold flex items-center hover:text-orange-700 ">
        <RiHome2Fill className="mr-1" /> হোম
      </Link>
      <Link className="text-orange-500 font-semibold flex items-center hover:text-orange-700 ">
        <RiLiveLine className="mr-1" /> লাইভ কথা বলুন
      </Link>
      <Link
        to="services"
        className="text-orange-500 font-semibold flex items-center hover:text-orange-700"
      >
        <LiaHandsHelpingSolid className="mr-1" /> সার্ভিস সমুহ
      </Link>
      <Link className="text-orange-500 font-semibold flex items-center hover:text-orange-700">
        <MdConnectWithoutContact className="mr-1" /> যোগাযোগ
      </Link>
      <Link
        to="about-us"
        className="text-orange-500 font-semibold flex items-center hover:text-orange-700"
      >
        <GoLaw className="mr-1" /> আমাদের সমন্ধে
      </Link>
    </>
  );

  return (
    <div className="w-full flex justify-center fixed z-10 bg-base-300/50 backdrop-blur-md">
      <div className="w-full flex items-center p-0 px-4 tablet:px-0 max-w-[1280px]">
        <div className="flex-auto">
          <Link>
            <img src={logo} alt="Shohoz Ain" className="h-20 w-20" />
          </Link>
        </div>
        <div className="flex-auto">
          <div role="button" className="tablet:hidden inline-block dropdown">
            <details>
              <summary className="m-1 btn btn-ghost">
                <TiThMenu className="text-xl text-orange-500" />
              </summary>
              <ul className="p-5 gap-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                {menuItem}
              </ul>
            </details>
          </div>
          <div className="hidden tablet:inline-block">
            <div className="flex gap-4 text-[18px]">{menuItem}</div>
          </div>
        </div>
        {!user && (
          <Link
            to="login"
            className="text-orange-500 hover:bg-orange-500 hover:text-white duration-300 font-bold px-3 py-1 border border-orange-500 rounded"
          >
            লগ ইন
          </Link>
        )}
        {user && (
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar  border border-orange-500"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Profile Picture"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="font-semibold text-orange-500 hover:text-orange-700">
                  <CgProfile />
                  প্রোফাইল
                </Link>
              </li>
              <li>
                <Link className="mt-2 font-semibold text-orange-500 hover:text-orange-700">
                  <CiSettings /> সেটিং
                </Link>
              </li>
              <li>
                <Link className="mt-2 font-semibold text-red-600 hover:text-red-700">
                  <AiOutlineLogout /> লগ আউট
                </Link>
              </li>
              <li
                onClick={handleTheme}
                className="mt-2 font-semibold text-orange-500 hover:text-orange-700"
              >
                {theme == "halloween" && (
                  <h1 className="flex">
                    {" "}
                    <CiLight /> লাইট মুড
                  </h1>
                )}
                {theme == "retro" && (
                  <h1 className="flex">
                    <CiDark /> ডার্ক মুড
                  </h1>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
