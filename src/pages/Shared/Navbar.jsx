import React, { useEffect, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { CiDark, CiLight, CiSettings } from "react-icons/ci";
import { GoLaw } from "react-icons/go";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { MdConnectWithoutContact } from "react-icons/md";
import { RiHome2Fill, RiLiveLine } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";
import { ImBlog } from "react-icons/im";


import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/shohozain.png";

const Navbar = () => {
  const activeRoute = useLocation().pathname;

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
      <Link onClick={() => window.scrollTo(0, 0)}
        className={`${
          activeRoute === "/" ? "text-orange-700" : "text-orange-500"
        } font-semibold flex items-center tablet:hover:text-orange-700 `}
      >
        <RiHome2Fill className="mr-1" /> হোম
      </Link>
      <Link onClick={() => window.scrollTo(0, 0)}
        to="live-talk"
        className={`${
          activeRoute === "/live-talk" ? "text-orange-700" : "text-orange-500"
        } font-semibold flex items-center tablet:hover:text-orange-700 relative`}
      >
        <span className={`absolute -left-3 loading loading-ring loading-lg ${activeRoute === "/live-talk" ? "text-orange-700" : "text-orange-500"}`}></span>
        <RiLiveLine className="mr-1" /> লাইভ কথা বলুন
      </Link>
      <Link onClick={() => window.scrollTo(0, 0)}
        to="services"
        className={`${
          activeRoute === "/services" ? "text-orange-700" : "text-orange-500"
        } font-semibold flex items-center tablet:hover:text-orange-700 `}
      >
        <LiaHandsHelpingSolid className="mr-1" /> সার্ভিস সমুহ
      </Link>
      <Link onClick={() => window.scrollTo(0, 0)} to="contact-us" className={`${
          activeRoute === "/contact-us" ? "text-orange-700" : "text-orange-500"
        } font-semibold flex items-center tablet:hover:text-orange-700 `}>
        <MdConnectWithoutContact className="mr-1" /> যোগাযোগ
      </Link>
      <Link onClick={() => window.scrollTo(0, 0)}
        to="about-us"
        className={`${
          activeRoute === "/about-us" ? "text-orange-700" : "text-orange-500"
        } font-semibold flex items-center tablet:hover:text-orange-700 `}
      >
        <GoLaw className="mr-1" /> আমাদের সমন্ধে
      </Link>
      <Link onClick={() => window.scrollTo(0, 0)}
        to="blogs"
        className={`${
          activeRoute === "/blogs" ? "text-orange-700" : "text-orange-500"
        } font-semibold flex items-center tablet:hover:text-orange-700 `}
      >
        <ImBlog className="mr-1" /> ব্লগ
      </Link>
    </>
  );

  return (
    <div className="w-full flex justify-center fixed z-50 bg-base-300/50 backdrop-blur-md">
      <div className="w-full flex items-center p-0 px-4 tablet:px-0 max-w-[1280px]">
        <div className="flex-auto">
          <Link onClick={() => window.scrollTo(0, 0)} to="/">
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
          <Link onClick={() => window.scrollTo(0, 0)}
            to="login"
            className="text-orange-500 tablet:hover:bg-orange-500 tablet:hover:text-white duration-300 font-bold px-3 py-1 border border-orange-500 rounded"
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
                <Link onClick={() => window.scrollTo(0, 0)} className="font-semibold text-orange-500 tablet:hover:text-orange-700">
                  <CgProfile />
                  প্রোফাইল
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} className="mt-2 font-semibold text-orange-500 tablet:hover:text-orange-700">
                  <CiSettings /> সেটিং
                </Link>
              </li>
              <li>
                <Link  className="mt-2 font-semibold text-red-600 tablet:hover:text-red-700">
                  <AiOutlineLogout /> লগ আউট
                </Link>
              </li>
              <li
                onClick={handleTheme}
                className="mt-2 font-semibold text-orange-500 tablet:hover:text-orange-700"
              >
                {theme == "halloween" && (
                  <h1 className="flex">
                    
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
