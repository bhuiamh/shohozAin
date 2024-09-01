import React, { useState } from "react";

const BlogSearch = () => {
  const blogs = [
    { id: 1, title: "বাংলা ভাষার ইতিহাস", content: "বাংলা ভাষা একটি সমৃদ্ধ ভাষা যার ইতিহাস বহু পুরাতন।" },
    { id: 2, title: "বিদ্যুৎ প্রকৌশল", content: "বিদ্যুৎ প্রকৌশল একটি গুরুত্বপূর্ণ শাখা যা আমাদের জীবনকে আলোকিত করে।" },
    { id: 3, title: "প্রকৃতির সৌন্দর্য", content: "প্রকৃতির সৌন্দর্য আমাদের মনকে প্রশান্তি দেয়।" },
    { id: 4, title: "বাংলা সাহিত্য", content: "বাংলা সাহিত্য বিশ্বসাহিত্যের এক অনন্য অংশ।" },
    { id: 5, title: "গণিতের মজার সমস্যা", content: "গণিতে কিছু সমস্যা আছে যা আমাদের মস্তিষ্ককে উদ্দীপিত করে।" },
    { id: 6, title: "ইন্টারনেট নিরাপত্তা", content: "ইন্টারনেট ব্যবহারের সময় নিরাপত্তা বজায় রাখা অত্যন্ত গুরুত্বপূর্ণ।" },
    { id: 7, title: "বিজ্ঞান ও প্রযুক্তি", content: "বিজ্ঞান ও প্রযুক্তি আমাদের জীবনকে সহজ করে দিয়েছে।" },
    { id: 8, title: "বাংলাদেশের খাবার", content: "বাংলাদেশের খাবার বিভিন্নতায় ভরপুর এবং খুবই সুস্বাদু।" },
    { id: 9, title: "ক্যারিয়ার গাইডলাইন", content: "ক্যারিয়ার নিয়ে সঠিক পরিকল্পনা করা খুবই গুরুত্বপূর্ণ।" },
    { id: 10, title: "ভ্রমণ কাহিনী", content: "ভ্রমণ আমাদের জ্ঞানকে বিস্তৃত করে এবং নতুন অভিজ্ঞতা প্রদান করে।" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter blogs based on search term
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Limit the number of blogs displayed to 5
  const limitedBlogs = filteredBlogs.slice(0, 5);

  return (
    <div className="w-96">
      <input
        type="text"
        placeholder="খুঁজুন..."
        value={searchTerm}
        onChange={handleSearch}
        className="font-semibold bg-transparent block w-full border-0 py-2 text-orange-500 shadow-sm ring-0 placeholder:text-orange-500/50 focus:ring-0 border-b-2 tablet:border-b-4 border-orange-500 focus:border-orange-500 focus:scale-105 duration-300 mobile:text-sm mobile:leading-6"
      />
      {searchTerm && (
        <ul>
          {limitedBlogs.map((blog) => (
            <li key={blog.id} className="mb-4">
              <h2 className="font-bold">{blog.title}</h2>
              <p>{blog.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogSearch;
