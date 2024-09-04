import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import AboutUs from "../pages/AboutUs/AboutUs";
import Services from "../pages/Services/Services";
import Signup from "../pages/Signup/Signup";
import LiveTalk from "../pages/LiveTalk.jsx/LiveTalk";
import ContactUs from "../pages/ContactUs/ContactUs";
import FAQ from "../pages/Home/Faq/Faq";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blogs from "../pages/Blogs/Blogs";
import BlogDetails from "../pages/Blogs/BlogDetails";
import BlogPage from "../pages/Blogs/BlogPage";
import AddBlog from "../pages/Blogs/AddBlog";
// import LiveTalk from "../pages/LiveTalk/LiveTalk";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
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
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "blogs",
        element: <BlogPage />,
        children: [
          {
            path: "",
            element: <Blogs />,
          
          },
          {
            path: ':blogId', // Use dynamic parameter :blogId for clarity
            element: <BlogDetails />,
          },
          {
            path: "add-blog",
            element: <AddBlog />,
          }
        ],
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
