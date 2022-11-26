import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/slider.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="/assets/images/slider/slider1.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/images/slider/slider2.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/images/slider/slider3.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/images/slider/slider4.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/assets/images/slider/slider5.webp" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
