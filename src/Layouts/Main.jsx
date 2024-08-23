import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
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
  console.log(noNavbarFooter);

  return (
    <div className="w-full h-[100vh] flex flex-col items-center">
      {noNavbarFooter || <Navbar />}
      <Outlet />
      {noNavbarFooter || <Footer />}
    </div>
  );
};

export default Main;
