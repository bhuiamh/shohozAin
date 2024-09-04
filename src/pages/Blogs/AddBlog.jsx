import React, { useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import TextInput from "../../components/TextInput";
import SelectField from "../../components/SelectField";
import { blogCategories } from "../../data/blogCategories";
import { Helmet } from "react-helmet";
import SectionTitle from "../Shared/SectionTitle";
import { FaRegClock } from "react-icons/fa";

const AddBlog = () => {
  // State for blog fields
  const [id, setId] = useState("");
  const [typeOfCategory, setTypeOfCategory] = useState("");
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");

  const editorRef = useRef(null);

  const [dateAndTime, setDateAndTime] = useState(() => {
    const now = new Date();
    // Format date as 'YYYY-MM-DDTHH:MM'
    return now.toISOString().slice(0, 16);
  });

  const handleSetCurrentDateTime = (event) => {
    event.preventDefault();
    const now = new Date();
    // Format date as 'YYYY-MM-DDTHH:MM'
    const formattedDate = now.toISOString().slice(0, 16);
    setDateAndTime(formattedDate);
  };

  const userName = "Mahmudul Hasan Bhuia";

  const writers = [
    { id: 1, name: "সহজ আইন" },
    { id: 2, name: userName },
  ];

  const handleAddBlog = async (event) => {
    event.preventDefault();
    const content = editorRef.current.getContent();

    const selectedCategory = blogCategories.find(
      (category) => category.name === typeOfCategory
    );
    const blog = {
      id: id,
      typeOfCategory: selectedCategory.typeOfCategory,
      category: typeOfCategory,
      title: title,
      description: content,
      writer: writer,
      dateAndTime: dateAndTime.toISOString().slice(0, 19).replace("T", " "),
    };
    console.log(blog, "from addBlog page");

    // Handle form submission, e.g., send blog data to your API
  };

  return (
    <div className="max-w-[1280px] min-h-screen mx-auto mt-24 tablet:mt-32 px-4 tablet:px-0 w-full">
      <Helmet>
        <title>
          Add a New Blog @ ShohozAin - Share Your Expertise & Insights
        </title>
        <meta
          name="description"
          content="Use ShohozAin's Add Blog feature to share your expertise and insights. Create and publish your blog post easily, reaching our audience with your valuable content."
        />
        <meta
          name="keywords"
          content="ShohozAin blog, add blog, share expertise, publish blog, blog creation, blog post, content creation, ShohozAin articles"
        />
      </Helmet>
      <SectionTitle
        title={"নতুন ব্লগ"}
        subTitle={"ব্লগের সমস্ত তথ্য সঠিকভাবে দিন"}
      ></SectionTitle>
      <div className="mt-8 bg-amber-500/5 p-4 tablet:p-6 rounded">
        <form onSubmit={handleAddBlog}>
          <div className="mb-4 flex items-end gap-10">
            <TextInput
              name="id"
              placeholder="ব্লগ আইডি"
              value="It's generated automatically"
              onChange={(e) => setId(e.target.value)}
            />
            <TextInput
              name="title"
              placeholder="ব্লগের শিরোনাম"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="file"
              className="file-input file-input-bordered file-input-accent w-full max-w-xs"
            />
          </div>

          <div></div>

          <div className="mb-4 flex gap-10">
            <SelectField
              options={blogCategories}
              name="name"
              placeholder="ব্লগের ধরণ"
              value={typeOfCategory}
              onChange={(e) => {
                setTypeOfCategory(e.target.value);
              }}
            />
            <SelectField
              options={writers}
              name="name"
              placeholder="ব্লগের লেখক"
              value={writer}
              onChange={(e) => setWriter(e.target.value)}
            />
            <div className="relative">
              <TextInput
                name="dateAndTime"
                type="datetime-local"
                placeholder="তারিখ ও সময়"
                value={dateAndTime}
                onChange={(e) => setDateAndTime(e.target.value)}
              />
              <button
                onClick={handleSetCurrentDateTime}
                className="text-orange-500 hover:text-orange-600 focus:text-orange-600 absolute right-9 top-1/2 translate-y-[-65%] "
              >
                <FaRegClock />
              </button>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-xl tablet:text-2xl pb-2 pl-1 font-bold text-orange-500">
              {" "}
              ব্লগের ডিসক্রিপশন নিচে লিখুন
            </h1>
            <Editor
              apiKey="nn2nvboqzkqj66u5i6ufnt24x4nnvrrl80fd8g5zzcmwqytl"
              onInit={(evt, editor) => (editorRef.current = editor)}
              init={{
                plugins: [
                  "anchor",
                  "autolink",
                  "charmap",
                  "codesample",
                  "emoticons",
                  "image",
                  "link",
                  "lists",
                  "media",
                  "searchreplace",
                  "table",
                  "visualblocks",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | emoticons charmap | removeformat",
              }}
              initialValue="আপনার ব্লগটি এখানে লিখুন"
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded"
          >
            সাবমিট
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
