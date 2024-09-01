import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../Shared/SectionTitle";
import BlogCategories from "./BlogCategories";
import CategoryBlogs from "./CategoryBlogs";
import PopularBlogs from "./PopularBlogs";
import RecentBlogs from "./RecentBlogs";
import AllBlogs from "./AllBlogs";

// import blogData from './blogs.json';

const fetchBlogs = async () => {
  try {
    const response = await fetch("./blogs.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching the JSON file:", error);
    return [];
  }
};


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogsByCategory, setBlogsByCategory] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const data = await fetchBlogs();
        setBlogs(data);

        // Group blogs by category and typeOfCategory
        const groupedBlogs = data.reduce((acc, blog) => {
          if (!acc[blog.category]) {
            acc[blog.category] = {};
          }
          if (!acc[blog.category][blog.typeOfCategory]) {
            acc[blog.category][blog.typeOfCategory] = [];
          }
          acc[blog.category][blog.typeOfCategory].push(blog);
          return acc;
        }, {});

        setBlogsByCategory(groupedBlogs);
      } catch (error) {
        console.error("Error processing blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, []);

  // Check if blogsByCategory is populated
  const categories = Object.keys(blogsByCategory);

  return (
    <div className="max-w-[1280px] min-h-screen mx-auto mt-24 tablet:mt-32 px-4 tablet:px-0 w-full">
      <Helmet>
        <title>
          Legal Blogs @ ShohozAin - Expert Insights & Practical Legal Advice
        </title>
        <meta
          name="description"
          content="Explore ShohozAin's legal blog for expert insights, practical advice, and the latest updates on legal matters. Stay informed and empowered with our comprehensive articles on various legal topics."
        />
        <meta
          name="keywords"
          content="ShohozAin blog, legal blogs, legal insights, legal advice, legal updates, practical legal tips, ShohozAin articles, legal news"
        />
      </Helmet>
      <SectionTitle
        title={"আমাদের ব্লগ"}
        subTitle={"আইন সম্পর্কে বিস্তারিত জানুন"}
      ></SectionTitle>
      <p className="text-base tablet:text-xl mb-4 font-semibold mt-10">
        জমি সংক্রান্ত সমস্যা, মামলা-মোকদ্দমা, বা চুক্তি নিয়ে চিন্তিত?
        ব্যক্তিগত, পারিবারিক, বা ব্যবসায়িক বিষয়ে আইনি পরামর্শের প্রয়োজন? সহজ
        আইন ব্লগে আপনি পাবেন এসব সমস্যা সমাধানের জন্য সঠিক তথ্য ও দিকনির্দেশনা।
        আমাদের ব্লগে আমরা জমি সংক্রান্ত জটিলতা, দেওয়ানী মামলা, পারিবারিক
        সমস্যা, চুক্তি প্রবল মোকাবিলা, আরবিট্রেশন, অর্থ ঋণ, চেক সংক্রান্ত মামলা
        ইত্যাদি বিভিন্ন বিষয়ে বিস্তারিত আলোচনা করি। আরো জানতে আমাদের ব্লগ পড়ুন
        এবং আপনার আইনি জ্ঞান বাড়ান।
      </p>
      
      <BlogCategories />

      {loading ? (
        <div>Loading...</div>
      ) : categories.length > 0 ? (
        categories.map((category, index) => (
          Object.keys(blogsByCategory[category]).map((typeOfCategory) => (
            <CategoryBlogs
              key={`${category}-${typeOfCategory}`}
              category={category}
              typeOfCategory={typeOfCategory}
              blogs={blogsByCategory[category][typeOfCategory]}
            />
          ))
        ))
      ) : (
        <div>No blogs available</div>
      )}

       <AllBlogs blogs={blogs} />
      {/*<RecentBlogs />
      <PopularBlogs /> */}
    </div>
  );
};

export default Blogs;
