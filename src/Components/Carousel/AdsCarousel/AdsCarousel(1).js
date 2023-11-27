import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import"./AdsCarousel.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

const AdsCarousel = () => {
    return (

  <>
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <img src="https://img.freepik.com/premium-psd/horizontal-web-banner-with-laptop-laptop-mockup_451189-71.jpg" className="w-full h-[260px]" /></SwiperSlide>
        <SwiperSlide> <img src="https://resources.commerceup.io/?key=https%3A%2F%2Fprod-admin-images.s3.ap-south-1.amazonaws.com%2FWbjerLzUeW0cgVsOq5zQ%2Fresources%2Fimage-FLOoaUpQO.jpg&width=1000&resourceKey=WbjerLzUeW0cgVsOq5zQ&background=no" className="w-full h-[260px]" /></SwiperSlide>
        <SwiperSlide><img src="https://blog.daraz.lk/wp-content/uploads/2021/12/Banner-17.png" className="w-full h-[260px]" /></SwiperSlide>
      </Swiper>
    </>
    );
};

export default AdsCarousel;


//    <div className="carousel">
//   <div id="item1" className="carousel-item w-full">
//    
//   </div> 
//   <div id="item2" className="carousel-item w-full">
//     
//   </div> 
//   <div id="item3" className="carousel-item w-full">
//    
//   </div> 
// </div> 
// <div className="flex justify-center w-full py-2 gap-2">
//   <a href="#item1" className="btn btn-xs">1</a> 
//   <a href="#item2" className="btn btn-xs">2</a> 
// <a href="#item3" className="btn btn-xs">3</a> 