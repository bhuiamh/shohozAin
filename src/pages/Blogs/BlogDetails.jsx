import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { Helmet } from "react-helmet";
import StepProcess from "../../components/StepProcess";
import FaqImage1 from "/serviceImage/onnano@shohozAin.png";
import BlogInformation from "./BlogInformation";

const BlogDetails = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const { blogId } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/blogs.json`);
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        const data = await response.json();

        // Convert `blogId` to a number if necessary and find the blog
        const foundBlog = data.find((blog) => blog.id === Number(blogId));
        if (!foundBlog) {
          // console.log(`No blog found with id ${blogId}`);
        }
        setBlog(foundBlog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>No blog found</div>;
  }
  // Format the date only if the blog is available

  return (
    <div className="max-w-[1280px] mx-auto mt-24 tablet:mt-24 px-4 tablet:px-0">
      <Helmet>
        <title>{`${blog.title} @ ShohozAin - Expert Insights on Legal Matters`}</title>
        <meta
          name="description"
          content={`Read the latest blog post on ShohozAin: ${blog.title}. Discover expert insights, legal advice, and useful information to help you manage your legal matters. Stay updated with our comprehensive articles and tips. ${blog.description}`}
        />
        <meta
          name="keywords"
          content={`${blog.title}, ShohozAin blog, legal advice, expert insights, legal tips, case management, legal services`}
        />
      </Helmet>

      <div className="">
        <StepProcess blog={blog} />
        <div className="grid grid-cols-2 tablet:grid-cols-12 gap-10 mt-6">
          <div className="col-span-2 tablet:col-span-9 bg-amber-500/5 p-4 tablet:p-6">
            <h1 className="text-xl tablet:text-2xl laptop:text-3xl font-bold text-orange-500">
              {blog.title}
            </h1>

            <div className="grid grid-cols-2 tablet:grid-cols-12 gap-3 tablet:gap-5 mt-3 tablet:mt-5">
              <div className="col-span-12 tablet:col-span-8">
                <img
                  className="w-full h-full  border border-orange-500 rounded-md overflow-hidden"
                  src={FaqImage1}
                  alt=""
                />
              </div>

              <BlogInformation blog={blog} />
            </div>
          </div>
          <div className="col-span-2 tablet:col-span-3 h-96 bg-lime-500"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
