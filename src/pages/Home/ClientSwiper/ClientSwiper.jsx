import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
import SectionTitle from "../../Shared/SectionTitle";
import { partnersData } from "../../../data/data";
import "./ClientSwiper.css";

import img1 from "../../../assets/thumbnail/thambnail1.jpg";
import img2 from "../../../assets/thumbnail/thambnail2.jpg";
import img3 from "../../../assets/thumbnail/thambnail3.jpg";
import img4 from "../../../assets/thumbnail/thambnail4.jpg";
import img5 from "../../../assets/thumbnail/thambnail5.jpg";
import img6 from "../../../assets/thumbnail/thambnail6.jpg";
import img7 from "../../../assets/thumbnail/thambnail7.jpg";
import img8 from "../../../assets/thumbnail/thambnail8.jpg";
import img9 from "../../../assets/thumbnail/thambnail9.jpg";
import img10 from "../../../assets/thumbnail/thambnail10.jpg";
import img11 from "../../../assets/thumbnail/thambnail11.jpg";
import img12 from "../../../assets/thumbnail/thambnail12.jpg";
import img13 from "../../../assets/thumbnail/thambnail13.jpg";
import img14 from "../../../assets/thumbnail/thambnail14.jpg";
import img15 from "../../../assets/thumbnail/thambnail15.jpg";
import img16 from "../../../assets/thumbnail/thambnail16.jpg";
import img17 from "../../../assets/thumbnail/thambnail17.jpg";
import img18 from "../../../assets/thumbnail/thambnail18.jpg";

const ClientSwiper = () => {
  return (
    <div className="mt-24 tablet:mt-32  mx-auto">
      <div className="max-w-[1280px] px-4 tablet:px-0 mx-auto">
        <SectionTitle
          title={"আমাদের ক্লায়েন্ট"}
          subTitle={"যেসব কোম্পানির সাথে আমি কাজ করেছি"}
        />
      </div>

     
     
      <div className="grid items-center">
        {/* Slider Div */}
        <div className="h-16 tablet:h-[200px] relative w-full grid items-center overflow-hidden">
          {/* Slide Track */}
          <div className="x-slide-track">
            {/* Slide */}
            <div className="x-slide">
              <img className="x-img" src={img1} alt="" />
            </div>
            <div className="x-slide">
              <img className="x-img" src={img2} alt="" />
            </div>
            <div className="x-slide">
              <img className="x-img" src={img3} alt="" />
            </div>
            <div className="x-slide">
              <img className="x-img" src={img4} alt="" />
            </div>
            <div className="x-slide">
              <img className="x-img" src={img5} alt="" />
            </div>
            <div className="x-slide">
              <img className="x-img" src={img6} alt="" />
            </div>
            <div className="x-slide">
              <img className="x-img" src={img7} alt="" />
            </div>
            <div className="x-slide">
              <img className="x-img" src={img8} alt="" />
            </div>
            <div className="x-slide">
              <img className="x-img" src={img9} alt="" />
            </div>
            <div className="x-slide">
              <img className="x-img" src={img10} alt="" />
            </div>
            <div className="x-slide">
              <img className="x-img" src={img11} alt="" />
            </div>
            <div className="x-slide">
              <img className="x-img" src={img12} alt="" />
            </div>
            <div className="x-slide">
              <img className="x-img" src={img13} alt="" />
            </div>
            <div className="x-slide">
              <img className="x-img" src={img14} alt="" />
            </div>
            <div className="x-slide">
              <img className="x-img" src={img15} alt="" />
            </div>
            <div className="x-slide">
              <img className="x-img" src={img16} alt="" />
            </div>
            <div className="x-slide">
              <img className="x-img" src={img17} alt="" />
            </div>
            <div className="x-slide">
              <img className="x-img" src={img18} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSwiper;
