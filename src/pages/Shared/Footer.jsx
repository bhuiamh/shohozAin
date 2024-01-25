import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/shohozain.png";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { BsFacebook, BsTwitterX, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="footer grid-cols-1 tablet:grid-cols-3 p-10 bg-base-200 text-base-content">
        <div>
          <header className="text-orange-500 font-bold text-xl">
            সহজ আইন লিমিটেড
          </header>
          <Link className="link font-bold link-hover">
            সাহায্য এবং সহযোগিতা
          </Link>
          <Link className="link font-bold link-hover">শর্তাবলী</Link>
          <Link className="link font-bold link-hover">প্রাইভেসি পলিসি</Link>
        </div>
        <div>
          <header className="text-orange-500 font-bold text-xl">
            অন্যান্য
          </header>
          <Link className="link font-bold link-hover">আমাদের সম্পর্কে</Link>
          <Link className="link font-bold link-hover">সাধারন জিজ্ঞাসা</Link>
          <Link className="link font-bold link-hover">ব্লগ</Link>
        </div>
        <div>
          <header className="text-orange-500 font-bold text-xl">যোগাযোগ</header>
          <div className="font-bold flex">
            <FaLocationDot className="text-xl text-orange-500 mr-2" />
            এইচ এইচ প্রোপার্টিস, সি/১, রোড ১০, পূর্ব গোরান, খিলগাঁও, ঢাকা
          </div>
          <div className="font-bold flex">
            <IoCall className="text-xl text-orange-500 mr-2" />
            +8801671-043256
          </div>
          <div className="font-bold flex">
            <IoMdMail className="text-orange-500 text-xl mr-2" />
            amirhamzalemon@gmail.com
          </div>
        </div>
      </div>
      <div className="footer gap-y-2 px-10 py-1 border-t bg-base-300 text-base-content border-orange-500">
        <aside className="items-center grid-flow-col">
          <img src={logo} alt="Shohoz Ain" className="h-20 w-20" />
          <p className="text-orange-500">
            <span className="font-extrabold text-xl">সহজ আইন লিমিটেড</span>
            <br />
            রক্ষণাবেক্ষন ও সার্বিক নিরাপত্তায়{" "}
            <Link
              target="blank"
              to="https://bhuiamh.netlify.app/"
              className="text-orange-700"
            >
              মাহমুদুল হাসান ভূঁইয়া
            </Link>
          </p>
        </aside>
        <nav className="tablet:place-self-center justify-self-center tablet:justify-self-end">
          <div className="grid grid-flow-col items-center gap-4">
            <Link target="blank" to="https://www.youtube.com/@ShohozAin">
              <BsYoutube className="text-2xl text-orange-500 hover:text-orange-700" />
            </Link>

            <Link target="blank" to="https://www.facebook.com/shohozain">
              <BsFacebook className="text-2xl text-orange-500 hover:text-orange-700" />
            </Link>
            <Link target="blank" to="https://twitter.com/AdvocateLemon">
              <BsTwitterX className="text-2xl text-orange-500 hover:text-orange-700" />
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
