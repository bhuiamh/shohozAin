import React from "react";
import { Helmet } from "react-helmet";
import SectionTitle from "../Shared/SectionTitle";
import BlogCard from "./BlogCard";


const Blogs = () => {


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
        subTitle={"দেওয়ানী, ফৌজদারি ও পারিবারিক আইন সম্পর্কে বিস্তারিত জানুন।"}
      ></SectionTitle>

     <BlogCard/>
    </div>
  );
};

export default Blogs;
