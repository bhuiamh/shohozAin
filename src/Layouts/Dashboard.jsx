import React from "react";

import { Link, Outlet } from "react-router-dom";
import DashboardNagivator from "../pages/dashboard/DashboardNagivator";

const Dashboard = () => {
  return (
    <div className="max-w-[1280px] mx-auto tablet:mt-28 px-4 tablet:px-0 cursor-pointer w-full mt-14 laptop:mt-20 border border-black min-h-[calc(100vh-56px)] laptop:min-h-[calc(100vh-80px)]">
      <div className="w-full h-16 bg-red-500 tablet:px-3 laptop:px-4 flex gap-1 tablet:gap-2 laptop:gap-3 items-center">
        <Link
          to="/"
          className="cursor-pointer h-6 laptop:h-8 w-fit px-2 text-xs tablet:text-sm laptop:text-base bg-amber-500 text-white flex items-center rounded-l-md rounded-r-3xl"
        >
          হোম
        </Link>
        <Link
          to="/dashboard"
          className="cursor-pointer h-6 laptop:h-8 w-fit px-2 text-xs tablet:text-sm laptop:text-base bg-amber-500 text-white flex items-center rounded-l-md rounded-r-3xl"
        >
          ড্যাশবোর্ড
        </Link>
      </div>
      <div className="flex">
        <div className="w-[20%]">
          <div className="p-5">
            <h1 className="text-center text-2xl font-bold">ড্যাশবোর্ড</h1>
            <DashboardNagivator />
          </div>
        </div>
        <div className="bg-amber-300/5 w-[80%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
