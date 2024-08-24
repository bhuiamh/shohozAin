import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
import "swiper/css";
import SectionTitle from "../../Shared/SectionTitle";
import { partnersData } from "../../../data/data";
import { Autoplay } from "swiper/modules";

const ClientSwiper = () => {
  return (
    <div className="max-w-[1280px] mt-24 tablet:mt-32 px-4 tablet:px-0 ">
      <div className="max-w-[1280px] mx-auto ">
        <SectionTitle
          title={"আমাদের ক্লায়েন্ট"}
          subTitle={"যেসব কোম্পানির সাথে আমি কাজ করেছি"}
        />
      </div>
      <Swiper
        loop
        autoplay={{
          delay: 1, // Adjust the delay for autoplay
          disableOnInteraction: false,
        }}
        speed={3000} // Adjust the speed for sliding
        modules={[Autoplay]}
        draggable={true} // Allow dragging on mobile devices
        mousewheel={true} // Allow scrolling on mobile devices
        grabCursor={true} // Use grab cursor on mobile devices
        noSwiping={true} // Allow swiping on mobile devices
        slidesPerView={3} // Show only two slide on small screens
        spaceBetween={16} // Add space between slides
        breakpoints={{
          1750: {
            spaceBetween: 48,
            slidesPerView: 6,
          },
          1536: {
            spaceBetween: 48,
            slidesPerView: 5,
          },
          1380: {
            spaceBetween: 32,
            slidesPerView: 5,
          },
          1280: {
            spaceBetween: 32,
            slidesPerView: 4,
          },
          769: {
            spaceBetween: 32,
            slidesPerView: 3,
          },
          440: {
            spaceBetween: 32,
            slidesPerView: 3,
          },
          0: {
            spaceBetween: 32,
            slidesPerView: 3,
          },
        }}
        className="mt-10"
      >
        {partnersData.map((item) => {
          const imgName = item.img.split(".")[0];

          return (
            <SwiperSlide key={item.id}>
              <div className="w-full flex justify-center items-center">
                <img
                  src={`/partner/${imgName}.png`}
                  alt=""
                  className="tablet:tablet:hover:opacity-100 transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ClientSwiper;
