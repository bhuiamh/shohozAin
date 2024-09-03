import React from "react";
import { Link } from "react-router-dom";

const StepProcess = ({blog}) => {


    const handleScroll = (category) => {
        setTimeout(() => {
          const element = document.getElementById(category);
          if (element) {
            const elementPosition =
              element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: elementPosition - 100,
              behavior: "smooth",
            });
          }
        }, 500); // Adjust delay as needed
      };


  return (
    <div className="tablet:px-3 laptop:px-4 flex gap-1 tablet:gap-2 laptop:gap-3">
      <Link
        to="/blogs"
        className="cursor-pointer h-6 laptop:h-8 w-fit px-2 text-xs tablet:text-sm laptop:text-base bg-amber-500 text-white flex items-center rounded-l-md rounded-r-3xl"
      >
        ব্লগ
      </Link>
      <Link
        to={"/blogs"}
        className="cursor-pointer h-6 laptop:h-8 w-fit px-2 text-xs tablet:text-sm laptop:text-base bg-orange-500 text-white flex items-center rounded-l-md rounded-r-3xl"
        onClick={() => handleScroll(blog.typeOfCategory)}
      >
        {blog.category.substring(0, 15)}...
      </Link>

      <div className="cursor-default h-6 laptop:h-8 w-fit px-2 text-xs tablet:text-sm laptop:text-base bg-amber-500 text-white flex items-center rounded-l-md rounded-r-3xl">
        {blog.title.substring(0, 25)}...
      </div>
    </div>
  );
};

export default StepProcess;
