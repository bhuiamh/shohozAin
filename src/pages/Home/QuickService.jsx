import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import useScreenSize from "../../hooks/useScreenSize";

import thumbnail1 from "../../assets/thumbnail/thambnail1.jpg";
import thumbnail2 from "../../assets/thumbnail/thambnail2.jpg";
import thumbnail3 from "../../assets/thumbnail/thambnail3.jpg";
import thumbnail4 from "../../assets/thumbnail/thambnail4.jpg";
import thumbnail5 from "../../assets/thumbnail/thambnail5.jpg";
import thumbnail6 from "../../assets/thumbnail/thambnail6.jpg";
import thumbnail7 from "../../assets/thumbnail/thambnail7.jpg";
import thumbnail8 from "../../assets/thumbnail/thambnail8.jpg";
import thumbnail9 from "../../assets/thumbnail/thambnail9.jpg";
import thumbnail10 from "../../assets/thumbnail/thambnail10.jpg";
import thumbnail11 from "../../assets/thumbnail/thambnail11.jpg";
import thumbnail12 from "../../assets/thumbnail/thambnail12.jpg";
import thumbnail13 from "../../assets/thumbnail/thambnail13.jpg";
import thumbnail14 from "../../assets/thumbnail/thambnail14.jpg";
import thumbnail15 from "../../assets/thumbnail/thambnail15.jpg";
import thumbnail16 from "../../assets/thumbnail/thambnail16.jpg";
import thumbnail17 from "../../assets/thumbnail/thambnail17.jpg";

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
      small: 2.5,
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
        <SwiperSlide className="relative">
          <Link
            to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
            target="_blank"
            className="absolute bottom-0 right-0"
          >
            <CiYoutube className="text-xl md:text-5xl hover:text-orange-700 text-orange-500 font-bold" />
          </Link>
          <img src={thumbnail1} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Link
            to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
            target="_blank"
            className="absolute bottom-0 right-0"
          >
            <CiYoutube className="text-xl md:text-5xl hover:text-orange-700 text-orange-500 font-bold" />
          </Link>
          <img src={thumbnail2} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Link
            to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
            target="_blank"
            className="absolute bottom-0 right-0"
          >
            <CiYoutube className="text-xl md:text-5xl hover:text-orange-700 text-orange-500 font-bold" />
          </Link>
          <img src={thumbnail3} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Link
            to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
            target="_blank"
            className="absolute bottom-0 right-0"
          >
            <CiYoutube className="text-xl md:text-5xl hover:text-orange-700 text-orange-500 font-bold" />
          </Link>
          <img src={thumbnail4} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Link
            to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
            target="_blank"
            className="absolute bottom-0 right-0"
          >
            <CiYoutube className="text-xl md:text-5xl hover:text-orange-700 text-orange-500 font-bold" />
          </Link>
          <img src={thumbnail5} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Link
            to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
            target="_blank"
            className="absolute bottom-0 right-0"
          >
            <CiYoutube className="text-xl md:text-5xl hover:text-orange-700 text-orange-500 font-bold" />
          </Link>
          <img src={thumbnail6} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Link
            to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
            target="_blank"
            className="absolute bottom-0 right-0"
          >
            <CiYoutube className="text-xl md:text-5xl hover:text-orange-700 text-orange-500 font-bold" />
          </Link>
          <img src={thumbnail7} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Link
            to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
            target="_blank"
            className="absolute bottom-0 right-0"
          >
            <CiYoutube className="text-xl md:text-5xl hover:text-orange-700 text-orange-500 font-bold" />
          </Link>
          <img src={thumbnail8} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Link
            to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
            target="_blank"
            className="absolute bottom-0 right-0"
          >
            <CiYoutube className="text-xl md:text-5xl hover:text-orange-700 text-orange-500 font-bold" />
          </Link>
          <img src={thumbnail9} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Link
            to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
            target="_blank"
            className="absolute bottom-0 right-0"
          >
            <CiYoutube className="text-xl md:text-5xl hover:text-orange-700 text-orange-500 font-bold" />
          </Link>
          <img src={thumbnail10} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Link
            to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
            target="_blank"
            className="absolute bottom-0 right-0"
          >
            <CiYoutube className="text-xl md:text-5xl hover:text-orange-700 text-orange-500 font-bold" />
          </Link>
          <img src={thumbnail11} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Link
            to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
            target="_blank"
            className="absolute bottom-0 right-0"
          >
            <CiYoutube className="text-xl md:text-5xl hover:text-orange-700 text-orange-500 font-bold" />
          </Link>
          <img src={thumbnail12} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Link
            to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
            target="_blank"
            className="absolute bottom-0 right-0"
          >
            <CiYoutube className="text-xl md:text-5xl hover:text-orange-700 text-orange-500 font-bold" />
          </Link>
          <img src={thumbnail13} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Link
            to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
            target="_blank"
            className="absolute bottom-0 right-0"
          >
            <CiYoutube className="text-xl md:text-5xl hover:text-orange-700 text-orange-500 font-bold" />
          </Link>
          <img src={thumbnail14} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Link
            to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
            target="_blank"
            className="absolute bottom-0 right-0"
          >
            <CiYoutube className="text-xl md:text-5xl hover:text-orange-700 text-orange-500 font-bold" />
          </Link>
          <img src={thumbnail15} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Link
            to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
            target="_blank"
            className="absolute bottom-0 right-0"
          >
            <CiYoutube className="text-xl md:text-5xl hover:text-orange-700 text-orange-500 font-bold" />
          </Link>
          <img src={thumbnail16} className="rounded-t-xl w-full" />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Link
            to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
            target="_blank"
            className="absolute bottom-0 right-0"
          >
            <CiYoutube className="text-xl md:text-5xl hover:text-orange-700 text-orange-500 font-bold" />
          </Link>
          <img src={thumbnail17} className="rounded-t-xl w-full" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default QuickService;
