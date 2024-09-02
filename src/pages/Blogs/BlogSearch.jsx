import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import { MdClear } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogSearch = ({ blogs }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter blogs based on search term
  const filteredBlogs = blogs.filter(
    (blog) =>
      // Search by title
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    // Search by description
    // || blog.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Limit the number of blogs displayed to 5
  const limitedBlogs = filteredBlogs.slice(0, 5);

  return (
    <div className="full relative">
      <input
        type="text"
        placeholder={`ব্লগ খুঁজুন...`}
        value={searchTerm}
        onChange={handleSearch}
        className="font-semibold bg-transparent block w-full border-0 pl-0 tablet:pl-2 py-0 tablet:py-1 text-orange-500 shadow-sm ring-0 placeholder:text-orange-500/50 focus:ring-0 border-b-2 border-orange-500 focus:border-orange-500 focus:scale-105 duration-300 text-sm tablet:text-base laptop:text-lg"
      />
      <button
        onClick={() => setSearchTerm("")}
        className="absolute top-1/2 -right-1 laptop:right-3 -translate-y-1/2"
      >
        {searchTerm ? <MdClear /> : null}
      </button>
      {searchTerm && (
        <ul className="absolute w-72 tablet:w-auto  top-10 laptop:right-0 -right-2 bg-gradient-to-br form:to-lime-100/5 form:from-green-100/5 p-1 tablet:p-2 laptop:p-3 rounded shadow-xl backdrop-blur-md">
          {limitedBlogs.map((blog) => (
            <li key={blog.id} className="mb-2">
              <Link
                to={`/blogs/${blog.id}`}
                className=" text-white hover:text-white/70  px-1 py-1 w-full"
              >
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogSearch;
