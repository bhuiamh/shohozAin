import React from "react";
import { CgLock, CgLogOut, CgProfile } from "react-icons/cg";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { RiLiveLine } from "react-icons/ri";
import { TbCoinTaka } from "react-icons/tb";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-full mt-14 laptop:mt-20 border border-black min-h-[calc(100vh-56px)] laptop:min-h-[calc(100vh-80px)] flex">
      <div className="w-[20%]">
        <div className="p-5">
          <h1 className="text-center text-2xl font-bold">ড্যাশবোর্ড</h1>
          <div>
            <Link
              className="flex justify-between items-center font-semibold px-3 jbg-transparent border border-orange-500 w-full rounded text-center text-orange-500 py-1 my-2 tablet:hover:bg-orange-500 tablet:hover:text-white duration-300"
              to="profile"
            >
              প্রোফাইল <CgProfile size={20} />
            </Link>
            <Link
              className="flex justify-between items-center font-semibold px-3 jbg-transparent border border-orange-500 w-full rounded text-center text-orange-500 py-1 my-2 tablet:hover:bg-orange-500 tablet:hover:text-white duration-300"
              to="profile"
            >
             আমার প্যকেজ <MdOutlineMiscellaneousServices size={20} />
            </Link>
            <Link
              className="flex justify-between items-center font-semibold px-3 jbg-transparent border border-orange-500 w-full rounded text-center text-orange-500 py-1 my-2 tablet:hover:bg-orange-500 tablet:hover:text-white duration-300"
              to="profile"
            >
              লাইভ কথা বলুন
              <RiLiveLine size={20} />
            </Link>
            <Link
              className="flex justify-between items-center font-semibold px-3 jbg-transparent border border-orange-500 w-full rounded text-center text-orange-500 py-1 my-2 tablet:hover:bg-orange-500 tablet:hover:text-white duration-300"
              to="profile"
            >
              পেমেন্ট ইনফরমেশন <TbCoinTaka size={20} />
            </Link>
            <Link
              className="flex justify-between items-center font-semibold px-3 bg-transparent border border-orange-500 w-full rounded text-center text-orange-500 py-1 my-2 tablet:hover:bg-orange-500 tablet:hover:text-white duration-300"
              to="change-password"
            >
              পাসওয়ার্ড পরিবর্তন <CgLock size={20} />
            </Link>
            <Link
              className="flex justify-between items-center font-semibold px-3 bg-transparent border border-orange-500 w-full rounded text-center text-orange-500 py-1 my-2 tablet:hover:bg-orange-500 tablet:hover:text-white duration-300"
              to="logout"
            >
              লগআউট <CgLogOut size={20} />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-amber-300 w-[80%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
