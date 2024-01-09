import React from "react";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import swiperImg1 from "../../assets/category/swiper1.jpg";
import swiperImg2 from "../../assets/category/swiper2.jpg";
import swiperImg3 from "../../assets/category/swiper3.jpg";
import swiperImg4 from "../../assets/category/swiper4.jpg";
import swiperImg5 from "../../assets/category/swiper5.jpg";
import swiperImg6 from "../../assets/category/swiper6.jpg";
import swiperImg7 from "../../assets/category/swiper7.jpg";
import swiperImg8 from "../../assets/category/swiper8.jpg";
import swiperImg9 from "../../assets/category/swiper9.jpg";
import swiperImg10 from "../../assets/category/swiper10.jpg";
import swiperImg11 from "../../assets/category/swiper11.jpg";
import swiperImg12 from "../../assets/category/swiper12.jpg";

const Category = () => {
  return (
    <div className="container">
      <h1 className="text-center mb-4">এক নজরে আমাদের সার্ভিস</h1>
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
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={swiperImg1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperImg2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperImg3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperImg4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperImg5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperImg6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperImg7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperImg8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperImg9} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperImg10} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperImg11} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiperImg12} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Category;
