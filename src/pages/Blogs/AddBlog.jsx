import React, { useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import TextInput from "../../components/TextInput";
import SelectField from "../../components/SelectField";
import { blogCategories } from "../../data/blogCategories";
import { Helmet } from "react-helmet";
import SectionTitle from "../Shared/SectionTitle";
import { FaRegClock } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import { PrimaryButton } from "../../components/Buttons";

const AddBlog = () => {
  // State for blog fields
  const [id, setId] = useState("");
  const [typeOfCategory, setTypeOfCategory] = useState("");
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");

  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState("");

  const handleFileChange = (event) => {
    const fileInput = event.target;
    const file = event.target.files[0];
    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      const width = img.width;
      const height = img.height;
      const aspectRatio = width / height;

      if (file) {
        // Check file size (500 KB = 500 * 1024 bytes)
        if (file.size < 500 * 1024) {
          if (aspectRatio == 16 / 9) {
            console.log("File is valid");
            setImage(file);
          } else {
            fileInput.value = "";
            setImage(null);
            Swal.fire({
              title: "<strong>দুঃখিত!</strong>",
              html: `<strong>ছবির আকার ১৬:৯ অনুপাতের হতে হবে।</strong>`,
              color: "black",
              icon: "error",
              iconColor: "#f97316",
              confirmButtonColor: "#f97316",
              confirmButtonText: "ঠিক আছে",
            });
          }
        } else {
          fileInput.value = ""; // Clear the file input
          setImage(null);
          Swal.fire({
            title: "<strong>দুঃখিত!</strong>",
            html: `<strong>ফাইলের আকার ৫০০ কেবির বেশি হতে পারবে না।</strong>`,
            color: "black",
            icon: "error",
            iconColor: "#f97316",
            confirmButtonColor: "#f97316",
            confirmButtonText: "ঠিক আছে",
          });
        }
      }
    };
  };

  const editorRef = useRef(null);

  const [dateAndTime, setDateAndTime] = useState(() => {
    const now = new Date();

    // Convert to Bangladesh time by adding 6 hours (UTC+6)
    now.setHours(now.getHours() + 6);

    // Format the date as 'YYYY-MM-DDTHH:MM' in local time
    const formattedDate = now.toISOString().slice(0, 16);

    return formattedDate;
  });

  const handleSetCurrentDateTime = (event) => {
    event.preventDefault();
    
    const now = new Date();
    
    // Convert to Bangladesh time by adding 6 hours (UTC+6)
    now.setHours(now.getHours() + 6);
    
    // Format the date as 'YYYY-MM-DDTHH:MM' in local time
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

  // const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const handleUpload = async (e) => {
    e.preventDefault();
    console.log(image, "image");
    if (!image) {
      alert("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    console.log(formData, "formData");
    try {
      // Optional: Add a delay if making multiple requests
      // await delay(1000); // Delay of 1 second

      const response = await axios.post(
        "https://api.imgur.com/3/image",
        formData,
        {
          headers: {
            Authorization: `Client-ID 30f6038370d6626`, // Replace with your actual Client ID
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const { data } = response;
      if (data.success) {
        setImageURL(data.data.link);
        alert("Image uploaded successfully!");
        console.log(data.data.link);
      } else {
        alert("Upload failed.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("An error occurred during the upload.");
    }
  };

  return (
    <div className="max-w-[1280px] min-h-screen mx-auto mt-[90px] tablet:mt-32 px-4 tablet:px-0 w-full">
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
          <div className="mb-0 laptop:mb-4 flex flex-wrap tablet:flex-nowrap items-end gap-4 tablet:gap-6 laptop:gap-10">
            <TextInput
              name="id"
              placeholder="ব্লগ আইডি"
              value="000113456"
              onChange={(e) => setId(e.target.value)}
            />
            <TextInput
              name="title"
              placeholder="ব্লগের শিরোনাম"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <div className="w-full flex gap-4 items-end justify-between">
              <input
                type="file"
                accept="image/*"
                className="h-8 file-input border-none focus:border-none focus:outline-none file-input-accent w-full laptop:w-64 text-sm text-orange-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-orange-500 file:text-white hover:file:bg-orange-600 "
                onChange={handleFileChange}
              />
             <div className="w-fit">
             <PrimaryButton disabled={!image} onClick={handleUpload}>
                Upload
              </PrimaryButton>
             </div>
            </div>
          </div>

          <div className="mt-4 tablet:mt-0 mb-4 flex flex-wrap tablet:flex-nowrap gap-4 tablet:gap-6 laptop:gap-10">
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
            <div className="relative w-full">
              <TextInput
                name="dateAndTime"
                type="datetime-local"
                placeholder="তারিখ ও সময়"
                value={dateAndTime}
                onChange={(e) => setDateAndTime(e.target.value)}
              />
              <button
                onClick={handleSetCurrentDateTime}
                className="text-orange-500 hover:text-orange-600 focus:text-orange-600 absolute right-3 laptop:right-9 top-1/2 translate-y-[-33%] "
              >
                <FaRegClock />
              </button>
            </div>
          </div>
          <div className="my-10">
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

          <PrimaryButton
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded"
          >
            সাবমিট
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
