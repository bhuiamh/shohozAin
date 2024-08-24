import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import AboutUs from "../pages/AboutUs/AboutUs";
import Services from "../pages/Services/Services";
import Signup from "../pages/Signup/Signup";
import LiveTalk from "../pages/LiveTalk.jsx/LiveTalk";
import ContactUs from "../pages/ContactUs/ContactUs";
// import LiveTalk from "../pages/LiveTalk/LiveTalk";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "live-talk",
        element: <LiveTalk />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
     
      
      
      
    ],
  },
]);
