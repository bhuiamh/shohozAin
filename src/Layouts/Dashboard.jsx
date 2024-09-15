import React from "react";

import { Link, Outlet } from "react-router-dom";
import DashboardNagivator from "../pages/dashboard/DashboardNagivator";

const Dashboard = () => {
  return (
    <div className="w-full mt-14 laptop:mt-20 border border-black min-h-[calc(100vh-56px)] laptop:min-h-[calc(100vh-80px)] flex">
      <div className="w-[20%]">
        <div className="p-5">
          <h1 className="text-center text-2xl font-bold">ড্যাশবোর্ড</h1>
          <DashboardNagivator/>
        </div>
      </div>
      <div className="bg-amber-300/5 w-[80%]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
