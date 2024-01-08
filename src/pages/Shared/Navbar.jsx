import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/shohozain.png";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex items-center min-h-16 px-10 bg-base-300">
      <div className="flex-1">
        <Link>
          <img src={logo} alt="Shohoz Ain" className="h-20 w-20" />
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown">Here is Navitem</div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
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
                <CgProfile /> প্রোফাইল
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
