import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";

const Courses = () => {
  const activePathname = useLocation().pathname;
  return (
    <div className="max-w-[1280px] mx-auto mt-20 tablet:mt-28 px-4 tablet:px-0">
      {activePathname === "/course" && (
        <Helmet>
          <title>
            About Us @ ShohozAin - Your Trusted Partner in Legal Services
          </title>
          <meta
            name="description"
            content="Learn more about ShohozAin, your trusted partner in legal services. Discover our mission to simplify legal processes, our expert team, and how we empower individuals and businesses with reliable legal assistance."
          />
          <meta
            name="keywords"
            content="About ShohozAin, legal services, trusted legal partner, legal assistance, ShohozAin mission, legal team, legal solutions"
          />
        </Helmet>
      )}
      <div className="">
        <SectionTitle
          title={"আমাদের কোর্সসমূহ"}
          subTitle={
            "এই কোর্সে ফৌজদারি, দেওয়ানি, পারিবারিক, বাণিজ্যিক আইন এবং সংবিধান নিয়ে সংক্ষিপ্ত ধারণা দেওয়া হবে।"
          }
        ></SectionTitle>
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6 tablet:my-10">
          <div className="card card-compact bg-base-100 w-auto  p-4 shadow-xl">
            <iframe
              // width="560"
              height="315"
              src="https://www.youtube.com/embed/rNJt3Pw_3k0?si=Q4gvINwtIJLojDzk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />

            <div className="card-body">
              <h2 className="card-title">সম্পূর্ণ আইন কোর্স!</h2>
              <div className="card-actions justify-start">
                <button className="w-32 rounded-md px-2 py-3 hover:text-white bg-orange-500 border-orange-500 tablet:hover:border-orange-700 tablet:hover:bg-orange-700">
                  বিস্তারিত
                </button>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xl tablet:text-2xl tablet:pb-1 font-extrabold text-orange-500">
              আইনে আপনার যাত্রা শুরু করুন
            </h1>
            <p className="text-base tablet:text-xl mb-4 tablet:mb-6 font-semibold">
              এই কোর্সে আপনি ফৌজদারি, দেওয়ানি, পারিবারিক এবং বাণিজ্যিক আইন সহ
              বাংলাদেশের সংবিধান ও মৌলিক অধিকার সম্পর্কে বিস্তারিত জানতে পারবেন।
              বিভিন্ন আইনি শাখার মূলনীতি, বাস্তব প্রয়োগ এবং প্রক্রিয়া নিয়ে
              পর্যাপ্ত ধারণা প্রদান করা হবে, যা আপনাকে আইনি জগতে সফলতার জন্য
              প্রস্তুত করবে।
            </p>
            <div className="flex gap-8 justify-start">
              <Link to="" target="_blank">
                <button className="w-32 rounded-md px-2 py-3 hover:text-white bg-orange-500 border-orange-500 tablet:hover:border-orange-700 tablet:hover:bg-orange-700">
                  অনুসন্ধান করুন
                </button>
              </Link>
              <Link to="" target="_blank">
                <button className="w-32 rounded-md px-2 py-3 bg-transparent hover:text-white border border-orange-500 tablet:hover:border-orange-700 tablet:hover:bg-orange-700">
                  সাফল্য
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* card carousel  */}
        <div>
          <h1 className="text-xl text-center tablet:text-2xl my-20 tablet:pb-1 font-extrabold text-orange-500">
            সাফল্যের গল্প
          </h1>
          <div className="carousel gap-8  rounded-box">
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                alt="Burger"
              />
            </div>
          </div>
        </div>

        {/* আমাদের মিশন */}

        <div>
          <h1 className="text-xl tablet:text-2xl my-20 text-center tablet:pb-1 font-extrabold text-orange-500">
            আমাদের মিশন
          </h1>
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-6 tablet:my-10">
            <div className="card  w-fit ">
              <figure className=" rounded-xl">
                <img src="/serviceImage/poramorso@shohozAin.png" alt="" />
              </figure>
            </div>
            <div>
              <p className="text-base tablet:text-xl mb-4 tablet:mb-6 font-semibold">
                <span className=" text-orange-500 font-bold mr-2">
                  আমাদের মিশন কেন:
                </span>
                আইন বিষয়ক শিক্ষার মাধ্যমে নাগরিকদের আইনি সচেতনতা এবং পেশাগত
                দক্ষতা বৃদ্ধি করা। আমরা বিশ্বাস করি যে সুসজ্জিত আইনজীবীরা সমাজে
                গুরুত্বপূর্ণ ভূমিকা পালন করতে পারে, তাই তাদের বাস্তব সমস্যার
                সমাধানে প্রস্তুত করে আন্তর্জাতিক মানের শিক্ষা প্রদান করি।
              </p>
              <p className="text-base tablet:text-xl mb-4 tablet:mb-6 font-semibold">
                <span className=" text-orange-500 font-bold mr-2">
                  আমাদের মিশন কি:
                </span>
                আমাদের মিশন হলো আইন বিষয়ক উচ্চমানের শিক্ষা প্রদান করে নাগরিকদের
                আইনি সচেতনতা বৃদ্ধি এবং পেশাগত দক্ষতা উন্নত করা।
              </p>
              <p className="text-base tablet:text-xl mb-4 tablet:mb-6 font-semibold">
                <span className=" text-orange-500 font-bold mr-2">
                  আমাদের মিশন কিভাবে:
                </span>
                আমরা উচ্চমানের শিক্ষা, বাস্তব জীবনের অভিজ্ঞতা এবং আন্তর্জাতিক
                মানদণ্ড অনুসরণ করে আমাদের মিশন বাস্তবায়ন করি। আমাদের কোর্সগুলো
                বাস্তবমুখী, গবেষণা ভিত্তিক এবং ব্যবহারের উপযোগী, যা
                শিক্ষার্থীদের আইনি জ্ঞানে সমৃদ্ধ করে এবং তাদের পেশাগত দক্ষতা
                বৃদ্ধি করে।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
