import React, { useState, useEffect } from "react";
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";

import {
  FaShare,
  FaFacebookMessenger,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
  FaTimes,
  FaComment,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  format,
  differenceInDays,
  differenceInWeeks,
  differenceInMonths,
  differenceInYears,
} from "date-fns";
import TextInput from "../../components/TextInput";

const BlogInformation = ({ blog }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [comment, setComment] = useState("");

  const handleLike = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };

  const handleComment = () => {
    console.log(comment, "comment");
  };
  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  useEffect(() => {
    if (isOpen) {
      const handleOutsideClick = (event) => {
        if (event.target.id === "modal-overlay") {
          closeModal();
        }
      };
      window.addEventListener("click", handleOutsideClick);
      return () => window.removeEventListener("click", handleOutsideClick);
    }
  }, [isOpen]);

  const currentUrl = encodeURIComponent(window.location.href);
  const text = encodeURIComponent("Check this out!");

  const shareLinks = [
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
      icon: (
        <FaFacebook className="text-blue-600 text-3xl group-hover:text-orange-500" />
      ),
    },
    {
      name: "Messenger",
      url: `fb://messaging/intent/?text=${text}%20${currentUrl}`,
      icon: (
        <FaFacebookMessenger className="text-blue-800 text-3xl group-hover:text-orange-500" />
      ),
    },
    {
      name: "WhatsApp",
      url: `https://wa.me/?text=${text}%20${currentUrl}`,
      icon: (
        <FaWhatsapp className="text-green-600 text-3xl group-hover:text-orange-500" />
      ),
    },
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`,
      icon: (
        <FaLinkedin className="text-blue-700 text-3xl  group-hover:text-orange-500" />
      ),
    },
    {
      name: "Twitter",
      url: `https://twitter.com/intent/tweet?url=${currentUrl}&text=${text}`,
      icon: (
        <FaTwitter className="text-blue-400 text-3xl group-hover:text-orange-500" />
      ),
    },
  ];

  const blogDate = new Date(blog.dateAndTime);
  const formattedDate = format(blogDate, "MMMM d, yyyy");
  const daysAgo = differenceInDays(new Date(), blogDate);
  const weeksAgo = differenceInWeeks(new Date(), blogDate);
  const monthsAgo = differenceInMonths(new Date(), blogDate);
  const yearsAgo = differenceInYears(new Date(), blogDate);

  let timeAgoText = "";
  if (yearsAgo >= 1) {
    timeAgoText = `${yearsAgo} year${yearsAgo > 1 ? "s" : ""} ago`;
  } else if (monthsAgo >= 1) {
    timeAgoText = `${monthsAgo} month${monthsAgo > 1 ? "s" : ""} ago`;
  } else if (weeksAgo >= 1) {
    timeAgoText = `${weeksAgo} week${weeksAgo > 1 ? "s" : ""} ago`;
  } else if (daysAgo >= 1) {
    timeAgoText = `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`;
  } else {
    timeAgoText = "Today";
  }
  console.log(blog, "<<<<<<<<<<<<<<<<<blog");
  return (
    <div className="flex flex-col justify-between col-span-12 tablet:col-span-4 h-96 ">
      <div className="">
        <h1 className="text-base tablet:text-lg laptop:text-xl font-bold text-orange-500">
          {blog.writer}
        </h1>
        <p className="text-sm tablet:text-base laptop:text-lg ">
          {formattedDate}{" "}
          <span className="text-[12px] tablet:text-sm laptop:text-base text-orange-500/80">
            {timeAgoText}
          </span>
        </p>
        <div className="flex items-center gap-2 pt-2">
          <div className="flex items-center justify-center gap-2 w-28 h-8 bg-orange-500/10 rounded-full">
            {liked ? (
              <BiSolidLike
                onClick={() => setLiked(false)}
                className={`text-xl text-orange-500 cursor-pointer ${
                  isClicked && "animate-ping"
                }`}
              />
            ) : (
              <BiLike
                onClick={() => {
                  setLiked(true);
                  setDisliked(false);
                  handleLike();
                }}
                className={`text-xl text-orange-500 cursor-pointer`}
              />
            )}

            <h1>
              {liked
                ? blog.reaction + 1 > 999
                  ? "1K"
                  : blog.reaction + 1
                : blog.reaction > 999
                ? "1K"
                : blog.reaction}
            </h1>

            <h1>|</h1>
            {disliked ? (
              <BiSolidDislike
                onClick={() => setDisliked(false)}
                className="text-xl text-orange-500 cursor-pointer"
              />
            ) : (
              <BiDislike
                onClick={() => {
                  setDisliked(true);
                  setLiked(false);
                }}
                className="text-xl text-orange-500 cursor-pointer"
              />
            )}
          </div>
          <button
            onClick={openModal}
            className="flex items-center justify-center gap-2 px-3 h-8 bg-orange-500/10 rounded-full cursor-pointer"
          >
            <FaShare className="text-xl text-orange-500" /> Share
          </button>

          {isOpen && (
            <div
              id="modal-overlay"
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20"
            >
              <div className="bg-white p-4 rounded-lg shadow-lg relative">
                <button onClick={closeModal} className="absolute top-2 right-2">
                  <FaTimes className="text-orange-500 text-xl" />
                </button>
                <h2 className="text-xl font-semibold mb-4 text-orange-500">
                  ব্লগ শেয়ার করুন
                </h2>
                <div className="flex gap-2 justify-around">
                  {shareLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center group"
                    >
                      {link.icon}
                      <span className="mt-2 text-sm font-normal">
                        {link.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="flex items-center justify-center gap-2 px-3 h-8 bg-orange-500/10 rounded-full cursor-pointer">
            <FaComment className="text-xl text-orange-500" />{" "}
            {blog.comments && blog.comments.length}
          </div>
        </div>



       {/*Comment Section  */}

        <div className="space-y-1 h-[230px] overflow-y-scroll mt-1">
          {blog.comments.map((comment, index) => (
            <div className="chat chat-start">
              <div className="chat-image avatar ">
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="chat-bubble bg-orange-500">{comment.comment}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2 w-full  bg-orange-500/20 rounded-full px-2 py-1 mt-2">
        <div className="w-5 h-5 rounded-full">
          <img
            alt="User Avatar"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <TextInput
          onChange={(e) => setComment(e.target.value)}
          scale={100}
          height="h-8"
          border={2}
          name="comment"
          placeholder="আপনার মন্তব্য লিখুন"
        />
        <FaComment
          onClick={() => handleComment()}
          className="text-xl text-orange-500 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default BlogInformation;
