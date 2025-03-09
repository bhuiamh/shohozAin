import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import BlogCard from "./BlogCard";
import Pagination from "../../components/Pagination";

const CategoryBlogs = ({ category, typeOfCategory, blogs }) => {
  return (
    <div id={typeOfCategory} className="mt-5 tablet:mt-10 bg-gradient-to-br to-lime-500/15 from-green-500/15 p-5 tablet:p-7 laptop:p-8 rounded shadow-xl">
      <SectionTitle subTitle={`${category} ব্লগ`} />
      

      <div className="flex flex-wrap place-content-center gap-6 mt-5 tablet:mt-10">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default CategoryBlogs;
