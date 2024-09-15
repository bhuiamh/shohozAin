import React from "react";
import { SCHEDULES } from "../../data/Schedules";
import { Link } from "react-router-dom";
import Features from "./Features";
import CourseStage from "./CourseStage";

const CourseDetails = () => {
  return (
    <div className="w-full">
      <div className="h-fit bg-no-repeat py-28 bg-cover bg-center bg-[url('../../../src/assets/banner/banner.jpeg')]">
        <div>
          <div className="container mx-auto space-y-4">
            <h1 className="text-4xl md:text-7xl text-center md:text-start space-y-4 text-orange-500">
              শিক্ষা আইন শিক্ষার্থীদের শিক্ষার অধিকার নিশ্চিত করে এবং প্রতিষ্ঠান
              ও শিক্ষকদের জন্য নিয়ম নির্ধারণ করে।
            </h1>
            <p className="text-slate-300 md:text-start text-center text-lg pt-4 w-full md:w-6/12">
              শিক্ষা আইন এমন বিধি ও নিয়মাবলী নির্ধারণ করে যা শিক্ষার্থীদের জন্য
              মানসম্মত শিক্ষা নিশ্চিত করে। এটি শিক্ষা প্রতিষ্ঠান এবং শিক্ষকদের
              দায়িত্ব ও আচরণ নির্ধারণ করে, শিক্ষার্থীদের অধিকার রক্ষা করে এবং
              শিক্ষার সমান সুযোগ প্রদান নিশ্চিত করে। আইনটি শিক্ষা ব্যবস্থার
              কার্যকারিতা ও সুশাসন নিশ্চিত করতে সাহায্য করে।
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto space-y-4 mt-28">
        <h1 className="text-xl text-center tablet:text-2xl tablet:pb-1 font-extrabold text-orange-500">
          পরবর্তী ব্যাচের সময়সূচী
        </h1>
        <div className="bg-slate-500 tablet:text-2xl tablet:pb-1 dark:bg-slate-800 w-full p-8 rounded divide-y-2 space-y-3">
          {/* schedule */}

          {/* with out responsive */}
          <div className="flex justify-between ">
            {SCHEDULES.map((schedule, index) => (
              <div key={index}>
                <div>
                  <div className="flex gap-5 items-center">
                    <h2 className="text-orange-400">
                      <schedule.icon className="w-12 h-12" />
                    </h2>

                    <div>
                      <h2 className="text-slate-300">{schedule.status}</h2>
                      <h2 className="text-2xl text-slate-50">
                        {schedule.date}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="text-slate-300 tablet:text-2xl tablet:pb-1 text-center mt-4 text-xl">
              If you are interested To{" "}
              <span className="text-2xl text-orange-500 capitalize">
                Enroll in 11th batch
              </span>
              , register on the website
            </p>
          </div>
        </div>
        {/* পেমেন্ট */}
        <div className="text-center">
          <Link to="/">
            <button className="bg-orange-500 hover:bg-orange-700 py-4 px-10 hover:text-white rounded">
              পেমেন্ট করুণ
            </button>
          </Link>
        </div>
        <div>
          <Features />
          <CourseStage />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
