import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import BlogCard from "./BlogCard";
import Pagination from "../../components/Pagination";

const RecentBlogs = () => {
  return (
    <div id="recent-blogs" className="mt-5 tablet:mt-7 laptop:mt-10">
      <SectionTitle subTitle={"আমাদের সমসাময়িক ব্লগসমূহ"}></SectionTitle>
      <div className="flex flex-wrap place-content-center gap-6 mt-5 tablet:mt-10">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />    
      </div>
      <Pagination/>
    </div>
  );
};

export default RecentBlogs;
