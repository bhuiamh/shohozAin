import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { format } from "date-fns"; // Make sure you have date-fns installed
import { Helmet } from "react-helmet";

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
          console.log(`No blog found with id ${blogId}`);
        }
        setBlog(foundBlog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]); // Added blogId as a dependency to refetch if it changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>No blog found</div>;
  }
  // Format the date only if the blog is available
  const formattedDate = format(new Date(blog.dateAndTime), "MMMM d, yyyy");
  const navigateTypeOfCategory = blog.typeOfCategory;
  console.log(blog?.typeOfCategory,navigateTypeOfCategory, "typeOfCategory");

  return (
    <div className="max-w-[1280px] mx-auto mt-24 tablet:mt-24 px-4 tablet:px-0">
      {/* Basic container with padding */}
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
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="tablet:px-3 laptop:px-4 flex gap-1 tablet:gap-2 laptop:gap-3">
          <Link
            to="/blogs"
            className="cursor-pointer h-6 laptop:h-8 w-fit px-2 text-xs tablet:text-sm laptop:text-base bg-amber-500 text-white flex items-center rounded-l-md rounded-r-3xl"
            onClick={window.scrollTo(0, 0)}
          >
            ব্লগ
          </Link>
          <Link to={"/blogs"}
            className="cursor-pointer h-6 laptop:h-8 w-fit px-2 text-xs tablet:text-sm laptop:text-base bg-orange-500 text-white flex items-center rounded-l-md rounded-r-3xl"
            onClick={() => {
              // window.history.back();
              window.scrollTo({ navigateTypeOfCategory }, 0);
            }}
          >
            {blog.category.substring(0, 20)}...
          </Link>

          <div className="cursor-default h-6 laptop:h-8 w-fit px-2 text-xs tablet:text-sm laptop:text-base bg-amber-500 text-white flex items-center rounded-l-md rounded-r-3xl">
            {blog.title.substring(0, 25)}...
          </div>
        </div>
        <div className="grid grid-cols-12"></div>
        {/* Grid layout */}
        <main className="col-span-full md:col-span-8">
          {/* Main content area */}
          <article className="shadow rounded-lg overflow-hidden">
            {/* Article styling */}
            <h1>{blog.typeOfCategory}</h1>

            <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
            <div className="flex items-center text-sm text-gray-600 mb-4">
              <span className="mr-4">By: {blog.writer}</span>
              <span>{formattedDate}</span>
            </div>
            <img
              src="placeholder.jpg" // Replace with image path or logic
              alt="Blog post featured image"
              className="w-full h-auto object-cover rounded-t-lg"
            />
            {/* Featured image */}
            <div className="p-4">
              {/* Content area */}
              <p className="text-base text-gray-800 mb-6">{blog.description}</p>
              <div className="mb-6">
                <span className="text-lg font-semibold">Reactions:</span>
                <span className="ml-2 text-orange-600">{blog.reaction}</span>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Comments:</h2>
                {blog.comments.length > 0 ? (
                  blog.comments.map((comment, index) => (
                    <div
                      key={index}
                      className="mb-4 p-4 bg-gray-100 rounded-lg"
                    >
                      <p className="font-semibold">{comment.commenter}</p>
                      <p className="text-gray-800">{comment.comment}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">No comments yet.</p>
                )}
              </div>
            </div>
          </article>
        </main>
        {/* Optional sidebar area for future implementation */}
        <aside className="col-span-full md:col-span-4 hidden md:block">
          {/* Sidebar content goes here */}
          <div className="p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Related Articles</h2>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogDetails;
