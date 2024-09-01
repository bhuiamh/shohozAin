import React, { useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import BlogCard from "./BlogCard";
import Pagination from "../../components/Pagination";

const PopularBlogs = ({blogs}) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the blogs to show on the current page
  const mostReactedBlogs = blogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div id="popular-blogs" className="mt-5 tablet:mt-7 laptop:mt-10">
      <SectionTitle subTitle={"আমাদের পপুলার ব্লগসমূহ"}></SectionTitle>
      <div className="flex flex-wrap place-content-center gap-6 mt-5 tablet:mt-10">
        {mostReactedBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      <Pagination
        totalItems={blogs.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PopularBlogs;
