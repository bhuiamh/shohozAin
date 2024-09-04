import React, { useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import TextInput from "../../components/TextInput";
import SelectField from "../../components/SelectField";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { blogCategories } from "../../data/blogCategories";

const AddBlog = () => {
  // State for blog fields
  const [id, setId] = useState(""); // You might want to handle ID differently, e.g., auto-generate or handle by backend
  const [typeOfCategory, setTypeOfCategory] = useState(""); 
  const [category, setCategory] = useState(""); // Update category based on typeOfCategory
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); // Managed by the editor
  const [writer, setWriter] = useState("");
  const [dateAndTime, setDateAndTime] = useState(new Date());
  const editorRef = useRef(null);

  const userName = "Mahmudul Hasan Bhuia";

  const writers = [
    { id: 1, name: "সহজ আইন" },
    { id: 2, name: userName },
  ];

  const handleAddBlog = async (event) => {
    event.preventDefault();
    const content = editorRef.current.getContent();
    const selectedCategory = blogCategories.find(
      (category) => category.typeOfCategory === typeOfCategory
    );
    const blog = {
      id: id,
      typeOfCategory: typeOfCategory,
      category: selectedCategory ? selectedCategory.category : "",
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
      <form onSubmit={handleAddBlog}>
        <div className="mb-4">
          <TextInput
            name="id"
            placeholder="ব্লগ আইডি"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
         
        </div>
        <div className="mb-4">
          <TextInput
            name="title"
            placeholder="ব্লগের শিরোনাম"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4 flex gap-5">
          <SelectField
            options={blogCategories}
            name="typeOfCategory"
            placeholder="ব্লগের ধরণ"
            value={typeOfCategory}
            onChange={(e) => {
              setTypeOfCategory(e.target.value);
              const selectedCategory = blogCategories.find(
                (category) => category.typeOfCategory === e.target.value
              );
              setCategory(selectedCategory ? selectedCategory.category : "");
            }}
          />
          <SelectField
            options={writers}
            name="writer"
            placeholder="ব্লগের লেখক"
            value={writer}
            onChange={(e) => setWriter(e.target.value)}
          />
        </div>
        <div className="mb-4">
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
        <div className="mb-4">
          <label className="block mb-2 text-sm font-semibold text-gray-700">তারিখ ও সময়:</label>
          <DatePicker
            selected={dateAndTime}
            onChange={(date) => setDateAndTime(date)}
            showTimeSelect
            dateFormat="Pp"
            className="block w-full border-2 border-orange-500 rounded px-3 py-2 text-gray-700"
          />
        </div>
        <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">সাবমিট</button>
      </form>
    </div>
  );
};

export default AddBlog;
