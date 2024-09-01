import React from "react";
import FaqImage1 from "/serviceImage/onnano@shohozAin.png";
// import FaqImage1 from "/serviceImage/square.webp";
import { FaHeart, FaRegComment } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCard = ({blog}) => {
  return (
    <Link to={`/blogs/${blog.id}`} className="group w-96 h-auto rounded-t-lg tablet:rounded-t-xl laptop:rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-500 relative">
      <div className="z-10 relative">
        <img className="w-full h-full" src={FaqImage1} alt="" />
      </div>
      <div className="bg-black/10 w-full h-24 backdrop-blur-sm -mt-10 z-20 absolute bottom-0 left-0 px-4 pt-2 tablet:group-hover:h-full tablet:group-hover:backdrop-blur-md transition-all duration-500">
        <h1 className=" font-semibold text-orange-500">
         {blog.title}
        </h1>

        <p className="text-white/80 text-[10px] tablet:text-xs laptop:text-sm cursor-default">
        <span className="tablet:group-hover:hidden">{`${blog.description.substring(0, 120)}...`}</span>  <span className="hidden tablet:group-hover:inline">{`${blog.description.substring(0, 400)}...`}</span>
          <button className=" text-orange-500 font-semibold">
            পুরোটা পড়ুন
          </button>
        </p>
      </div>

      {/* <div className="w-full flex items-center gap-2 pt-2 tablet:pt-3 laptop:pt-4 cursor-pointer">
          <FaHeart size={20} className="text-orange-500" />
          <div className="w-20 h-8 tablet:w-full tablet:h-8 font-semibold border-2 text-orange-500 border-orange-500 rounded-full flex items-center justify-between px-2">
            মন্তব্য করুন
            <FaRegComment className="text-orange-500" />
          </div>
          <FaShareAlt size={20} className="text-orange-500" />
        </div> */}
      {/* </div> */}
    </Link>
  );
};

export default BlogCard;
