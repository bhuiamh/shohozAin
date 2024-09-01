import React, { useEffect, useState } from "react";
import {  Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const Main = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "halloween"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const location = useLocation();
  const noNavbarFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center">
      {noNavbarFooter || <Navbar />}
     {!noNavbarFooter || <div className="p-10 w-full flex justify-start">
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to="/"
          className="text-orange-500 tablet:hover:bg-orange-500 tablet:hover:text-white duration-300 font-bold px-3 py-1 border border-orange-500 rounded"
        >
          হোম
        </Link>
      </div>}
      <Outlet />
      {noNavbarFooter || <Footer />}
    </div>
  );
};

export default Main;
