import React from "react";
import { Link } from "react-router-dom";
import { CgLock, CgLogOut, CgProfile } from "react-icons/cg";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { RiLiveLine } from "react-icons/ri";
import { TbCoinTaka } from "react-icons/tb";
const DashboardNagivator = () => {
  return (
    <div className="">
      <Link
        className="flex justify-between items-center font-semibold px-3 bg-orange-500/10 border border-orange-500 w-full rounded text-center py-1 my-3 tablet:hover:bg-orange-500 tablet:hover:text-white duration-300"
        to="profile"
      >
        প্রোফাইল <CgProfile size={20} />
      </Link>
      <Link
        className="flex justify-between items-center font-semibold px-3 bg-orange-500/10 border border-orange-500 w-full rounded text-center py-1 my-3 tablet:hover:bg-orange-500 tablet:hover:text-white duration-300"
        to="my-package"
      >
        আমার প্যকেজ <MdOutlineMiscellaneousServices size={20} />
      </Link>
      <Link
        className="flex justify-between items-center font-semibold px-3 bg-orange-500/10 border border-orange-500 w-full rounded text-center py-1 my-3 tablet:hover:bg-orange-500 tablet:hover:text-white duration-300"
        to="/live-talk"
      >
        লাইভ কথা বলুন
        <RiLiveLine size={20} />
      </Link>
      <Link
        className="flex justify-between items-center font-semibold px-3 bg-orange-500/10 border border-orange-500 w-full rounded text-center py-1 my-3 tablet:hover:bg-orange-500 tablet:hover:text-white duration-300"
        to="my-payment"
      >
        পেমেন্ট ইনফরমেশন <TbCoinTaka size={20} />
      </Link>
      <Link
        className="flex justify-between items-center font-semibold px-3 bg-orange-500/10 border border-orange-500 w-full rounded text-center py-1 my-3 tablet:hover:bg-orange-500 tablet:hover:text-white duration-300"
        to="change-password"
      >
        পাসওয়ার্ড পরিবর্তন <CgLock size={20} />
      </Link>
      <Link
        className="flex justify-between items-center font-semibold px-3 bg-orange-500/10 border border-orange-500 w-full rounded text-center py-1 my-3 tablet:hover:bg-orange-500 tablet:hover:text-white duration-300"
        // to="logout"
      >
        লগআউট <CgLogOut size={20} />
      </Link>
    </div>
  );
};

export default DashboardNagivator;
