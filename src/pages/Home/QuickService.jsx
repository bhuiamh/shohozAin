import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import useScreenSize from "../../hooks/useScreenSize";

import QuickServiceImg1 from "../../assets/QuickService/swiper1.jpg";
import QuickServiceImg2 from "../../assets/QuickService/swiper2.jpg";
import QuickServiceImg3 from "../../assets/QuickService/swiper3.jpg";
import QuickServiceImg4 from "../../assets/QuickService/swiper4.jpg";
import QuickServiceImg5 from "../../assets/QuickService/swiper5.jpg";
import QuickServiceImg6 from "../../assets/QuickService/swiper6.jpg";
import QuickServiceImg7 from "../../assets/QuickService/swiper7.jpg";
import QuickServiceImg8 from "../../assets/QuickService/swiper8.jpg";
import QuickServiceImg9 from "../../assets/QuickService/swiper9.jpg";
import QuickServiceImg10 from "../../assets/QuickService/swiper10.jpg";
import QuickServiceImg11 from "../../assets/QuickService/swiper11.jpg";
import QuickServiceImg12 from "../../assets/QuickService/swiper12.jpg";
import QuickServiceImg13 from "../../assets/QuickService/swiper13.jpg";
import SectionTitle from "../Shared/SectionTitle";
import { Link } from "react-router-dom";
import { BsPlayBtnFill } from "react-icons/bs";
import { CiYoutube } from "react-icons/ci";

const QuickService = () => {
  // Measure Screen Size
  const screenSize = useScreenSize();
  const [slides, setSlides] = useState(3);
  useEffect(() => {
    const newSlidesPerView = {
      small: 3,
      medium: 4,
      large: 5,
    }[screenSize];
    setSlides(newSlidesPerView);
  }, [screenSize]);

  return (
    <section className="shadow-base-content shadow-md mb-8">
      <SectionTitle
        title={"দ্রুত জানুন"}
        subTitle={"আমদের ইউটিউব ভিডিও থেকে জেনে নিন"}
      ></SectionTitle>
      <Swiper
        key={slides}
        spaceBetween={10}
        slidesPerView={slides}
        longSwipes={true}
      >
        {/* <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
          <h1 className="-mt-8 font-bold text-white text-center cursor-vertical-text">
            দলিল আছে কিন্তু রেকর্ড অন্যের নামে
          </h1>
        </SwiperSlide> */}
        {/* 
        <SwiperSlide>
          <img src={QuickServiceImg1} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg2} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg3} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg4} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg5} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg6} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg7} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg8} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg9} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg10} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg11} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg12} className="rounded-t-xl w-full" />
        </SwiperSlide> */}
        <SwiperSlide className="relative">
          <Link
            to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
            target="_blank"
            className="absolute bottom-0 right-0"
          >
            <CiYoutube className="text-xl md:text-5xl hover:text-orange-700 text-orange-500 font-bold" />
          </Link>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={QuickServiceImg13} className="rounded-t-xl w-full" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default QuickService;
