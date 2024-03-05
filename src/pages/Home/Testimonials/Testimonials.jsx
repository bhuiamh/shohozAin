import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";

import "swiper/css";
import SectionTitle from "../../Shared/SectionTitle";
import { partnersData } from "../../../data/data";
import { Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <>
      <div>
        <div className="">
          <SectionTitle
            title={"আমাদের ক্লায়েন্ট"}
            subTitle={"যেসব কোম্পানির সাথে আমি কাজ করেছি"}
          />
        </div>
      </div>
      {/* <Swiper
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
        className="mt-7 tablet:mt-10"
      >
        {partnersData.map((item) => {
          const imgName = item.img.split(".")[0];

          return (
            <SwiperSlide key={item.id}>
              <div className="h-full w-full flex justify-center items-center">
                <img
                  src={`/partner/${imgName}.png`}
                  alt=""
                  className="h-full w-auto object-contain grayscale tablet:hover:grayscale-0 opacity-80 tablet:hover:opacity-100 transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper> */}
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
        className="mt-7 laptop:mt-10"
      >
        {partnersData.map((item) => {
          const imgName = item.img.split(".")[0];

          return (
            <SwiperSlide key={item.id}>
              <a href="">
                <div className="h-96 w-96">
                  <img
                    src={`/partner/${imgName}.png`}
                    alt=""
                    className=" tablet:h-10 w-auto grayscale tablet:hover:grayscale-0 opacity-80 tablet:hover:opacity-100 transition-all duration-300 "
                  />
                </div>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Testimonials;
