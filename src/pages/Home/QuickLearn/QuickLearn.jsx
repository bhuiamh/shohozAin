import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./QuickLearn.css";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import { CiYoutube } from "react-icons/ci";
import { Link } from "react-router-dom";
import thumbnail1 from "../../../assets/thumbnail/thambnail1.jpg";
import thumbnail10 from "../../../assets/thumbnail/thambnail10.jpg";
import thumbnail11 from "../../../assets/thumbnail/thambnail11.jpg";
import thumbnail12 from "../../../assets/thumbnail/thambnail12.jpg";
import thumbnail13 from "../../../assets/thumbnail/thambnail13.jpg";
import thumbnail14 from "../../../assets/thumbnail/thambnail14.jpg";
import thumbnail15 from "../../../assets/thumbnail/thambnail15.jpg";
import thumbnail16 from "../../../assets/thumbnail/thambnail16.jpg";
import thumbnail17 from "../../../assets/thumbnail/thambnail17.jpg";
import thumbnail2 from "../../../assets/thumbnail/thambnail2.jpg";
import thumbnail3 from "../../../assets/thumbnail/thambnail3.jpg";
import thumbnail4 from "../../../assets/thumbnail/thambnail4.jpg";
import thumbnail5 from "../../../assets/thumbnail/thambnail5.jpg";
import thumbnail6 from "../../../assets/thumbnail/thambnail6.jpg";
import thumbnail7 from "../../../assets/thumbnail/thambnail7.jpg";
import thumbnail8 from "../../../assets/thumbnail/thambnail8.jpg";
import thumbnail9 from "../../../assets/thumbnail/thambnail9.jpg";
import SectionTitle from "../../Shared/SectionTitle";

function QuickLearn() {
  return (
    <div className="w-screen my-5 tablet:my-10 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 tablet:px-0">
        <SectionTitle
          title={"দ্রুত জানুন"}
          subTitle={"আমদের ইউটিউব ভিডিও থেকে জেনে নিন"}
          animation={
            "https://lottie.host/af93cece-3d68-4bb2-be9e-dd4a79109cc9/lM4D4p8CuK.json"
          }
        ></SectionTitle>
      </div>

      <div className=" overflow-hidden">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={false}
          navigation={false}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <Link
              to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
              target="_blank"
              className="absolute bottom-0 right-0"
            >
              <CiYoutube className="text-2xl tablet:text-5xl tablet:hover:text-orange-700 text-orange-500 font-bold" />
            </Link>
            <img src={thumbnail1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
              target="_blank"
              className="absolute bottom-0 right-0"
            >
              <CiYoutube className="text-2xl tablet:text-5xl tablet:hover:text-orange-700 text-orange-500 font-bold" />
            </Link>
            <img src={thumbnail2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
              target="_blank"
              className="absolute bottom-0 right-0"
            >
              <CiYoutube className="text-2xl tablet:text-5xl tablet:hover:text-orange-700 text-orange-500 font-bold" />
            </Link>
            <img src={thumbnail3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
              target="_blank"
              className="absolute bottom-0 right-0"
            >
              <CiYoutube className="text-2xl tablet:text-5xl tablet:hover:text-orange-700 text-orange-500 font-bold" />
            </Link>
            <img src={thumbnail4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
              target="_blank"
              className="absolute bottom-0 right-0"
            >
              <CiYoutube className="text-2xl tablet:text-5xl tablet:hover:text-orange-700 text-orange-500 font-bold" />
            </Link>
            <img src={thumbnail5} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
              target="_blank"
              className="absolute bottom-0 right-0"
            >
              <CiYoutube className="text-2xl tablet:text-5xl tablet:hover:text-orange-700 text-orange-500 font-bold" />
            </Link>
            <img src={thumbnail6} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
              target="_blank"
              className="absolute bottom-0 right-0"
            >
              <CiYoutube className="text-2xl tablet:text-5xl tablet:hover:text-orange-700 text-orange-500 font-bold" />
            </Link>
            <img src={thumbnail7} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
              target="_blank"
              className="absolute bottom-0 right-0"
            >
              <CiYoutube className="text-2xl tablet:text-5xl tablet:hover:text-orange-700 text-orange-500 font-bold" />
            </Link>
            <img src={thumbnail8} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
              target="_blank"
              className="absolute bottom-0 right-0"
            >
              <CiYoutube className="text-2xl tablet:text-5xl tablet:hover:text-orange-700 text-orange-500 font-bold" />
            </Link>
            <img src={thumbnail9} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
              target="_blank"
              className="absolute bottom-0 right-0"
            >
              <CiYoutube className="text-2xl tablet:text-5xl tablet:hover:text-orange-700 text-orange-500 font-bold" />
            </Link>
            <img src={thumbnail10} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
              target="_blank"
              className="absolute bottom-0 right-0"
            >
              <CiYoutube className="text-2xl tablet:text-5xl tablet:hover:text-orange-700 text-orange-500 font-bold" />
            </Link>
            <img src={thumbnail11} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
              target="_blank"
              className="absolute bottom-0 right-0"
            >
              <CiYoutube className="text-2xl tablet:text-5xl tablet:hover:text-orange-700 text-orange-500 font-bold" />
            </Link>
            <img src={thumbnail12} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
              target="_blank"
              className="absolute bottom-0 right-0"
            >
              <CiYoutube className="text-2xl tablet:text-5xl tablet:hover:text-orange-700 text-orange-500 font-bold" />
            </Link>
            <img src={thumbnail13} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
              target="_blank"
              className="absolute bottom-0 right-0"
            >
              <CiYoutube className="text-2xl tablet:text-5xl tablet:hover:text-orange-700 text-orange-500 font-bold" />
            </Link>
            <img src={thumbnail14} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
              target="_blank"
              className="absolute bottom-0 right-0"
            >
              <CiYoutube className="text-2xl tablet:text-5xl tablet:hover:text-orange-700 text-orange-500 font-bold" />
            </Link>
            <img src={thumbnail15} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
              target="_blank"
              className="absolute bottom-0 right-0"
            >
              <CiYoutube className="text-2xl tablet:text-5xl tablet:hover:text-orange-700 text-orange-500 font-bold" />
            </Link>
            <img src={thumbnail16} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <Link
              to="https://youtu.be/gUJvd2IWn0k?si=X8DZyDS5iOIIFjbe"
              target="_blank"
              className="absolute bottom-0 right-0"
            >
              <CiYoutube className="text-2xl tablet:text-5xl tablet:hover:text-orange-700 text-orange-500 font-bold" />
            </Link>
            <img src={thumbnail17} alt="slide_image" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default QuickLearn;
