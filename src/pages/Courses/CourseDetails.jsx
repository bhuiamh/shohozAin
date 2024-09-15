import React from "react";

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
            <p className="text-white md:text-start text-center text-lg pt-4 w-full md:w-6/12">
              শিক্ষা আইন এমন বিধি ও নিয়মাবলী নির্ধারণ করে যা শিক্ষার্থীদের জন্য
              মানসম্মত শিক্ষা নিশ্চিত করে। এটি শিক্ষা প্রতিষ্ঠান এবং শিক্ষকদের
              দায়িত্ব ও আচরণ নির্ধারণ করে, শিক্ষার্থীদের অধিকার রক্ষা করে এবং
              শিক্ষার সমান সুযোগ প্রদান নিশ্চিত করে। আইনটি শিক্ষা ব্যবস্থার
              কার্যকারিতা ও সুশাসন নিশ্চিত করতে সাহায্য করে।
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl text-center tablet:text-2xl tablet:pb-1 font-extrabold text-orange-500">
          পরবর্তী ব্যাচের সময়সূচী
        </h1>
        <div></div>
      </div>
    </div>
  );
};

export default CourseDetails;
