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
          //   <div key={blog.id} className="border p-4 rounded-lg shadow-md w-full max-w-md">
          //     <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
          //     <p className="text-gray-700 mb-4">{blog.description}</p>
          //     <p className="text-sm text-gray-500">Written by: {blog.writer}</p>
          //     <p className="text-sm text-gray-500">Reactions: {blog.reactions}</p>
          //     <div className="mt-4">
          //       {blog.comments && blog.comments.length > 0 && (
          //         <div>
          //           <h3 className="text-lg font-semibold">Comments:</h3>
          //           <ul className="list-disc pl-5">
          //             {blog.comments.map((comment, index) => (
          //               <li key={index} className="text-sm text-gray-600">
          //                 <strong>{comment.commenter}:</strong> {comment.comment}
          //               </li>
          //             ))}
          //           </ul>
          //         </div>
          //       )}
          //     </div>
          //   </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default CategoryBlogs;
