import React, { useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import BlogCard from "./BlogCard";
import Pagination from "../../components/Pagination";

const AllBlogs = ({ blogs }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the blogs to show on the current page
  const currentBlogs = blogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div id="all-blogs" className="mt-5 tablet:mt-10 bg-gradient-to-br to-lime-500/15 from-green-500/15 p-5 tablet:p-7 laptop:p-8 rounded shadow-xl">
      <SectionTitle subTitle={"আমাদের ব্লগসমূহ"}></SectionTitle>

      <div className="flex flex-wrap place-content-center gap-6 mt-5 tablet:mt-10">
        {currentBlogs.map((blog) => (
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

export default AllBlogs;
