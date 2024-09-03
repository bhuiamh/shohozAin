import React from "react";
import FaqImage1 from "/serviceImage/onnano@shohozAin.png";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <Link
      onClick={() => window.scrollTo(0, 0)}
      to={`/blogs/${blog.id}`}
      className="group w-72 tablet:w-96 h-auto rounded-lg tablet:rounded-xl laptop:rounded-2xl overflow-hidden shadow-2xl border-2 tablet:border-4 border-orange-500 relative"
    >
      <div className="z-10 relative">
        <img className="w-full h-full" src={FaqImage1} alt="" />
      </div>
      <div className="bg-black/10 w-full h-24 backdrop-blur-sm -mt-10 z-20 absolute bottom-0 left-0 px-4 pt-2 tablet:group-hover:h-full tablet:group-hover:backdrop-blur-md transition-all duration-500">
        <h1 className=" font-semibold text-orange-500">{blog.title}</h1>

        <p className="text-white/80 text-[10px] tablet:text-xs laptop:text-sm cursor-default">
          <span className="tablet:group-hover:hidden">{`${blog.description.substring(
            0,
            120
          )}...`}</span>{" "}
          <span className="hidden tablet:group-hover:inline">{`${blog.description.substring(
            0,
            400
          )}...`}</span>
          <button className=" text-orange-500 font-semibold">
            পুরোটা পড়ুন
          </button>
        </p>
      </div>

      
    </Link>
  );
};

export default BlogCard;
