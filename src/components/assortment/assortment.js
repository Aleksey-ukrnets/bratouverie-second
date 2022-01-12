import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

//images

import pants from './pants.png'
import hudi from './hudi.png'

//swiper
import "swiper/css";
import "swiper/css/grid"
import "swiper/css/pagination"

import './style.scss'

import SwiperCore, {
    Grid,Pagination
  } from 'swiper';
  

  // install Swiper modules

  

  function AssortmentSwiper() {

    return (
      <>
      <Swiper style={{ '--swiper-pagination-color': 'rgb(206, 71, 155)',
                        '--swiper-pagination-bullet-height' : '12px',
                        '--swiper-pagination-bullet-width' : '12px', }} slidesPerView={1} 
   spaceBetween={20} grabCursor={true}  breakpoints={{
    "320": {
        "slidesPerView":1,
        "spaceBetween": 20,
        
      },
    "420": {
      "slidesPerView":2,
      "spaceBetween": 20,
      
    },
    "768": {
      "slidesPerView": 3,
      "spaceBetween": 20,
      'rows': 2
    },
    "1024": {
      "slidesPerView": 5,
      "spaceBetween": 20,
    },
    "1440": {
        "slidesPerView": 4,
        "spaceBetween": 20,
      }
  }}  className="mySwiper">
      <div className='swiper__wrapper' >
        <SwiperSlide className="swipe_second"><img src={pants} /></SwiperSlide>
        <SwiperSlide className="swipe_second"><img src={pants} /></SwiperSlide>
        <SwiperSlide className="swipe_second"><img src={hudi} /></SwiperSlide>
        <SwiperSlide className="swipe_second"><img src={hudi} /></SwiperSlide>
        <SwiperSlide className="swipe_second"><img src={pants} /></SwiperSlide>
        <SwiperSlide className="swipe_second"><img src={pants} /></SwiperSlide>
        <SwiperSlide className="swipe_second"><img src={hudi} /></SwiperSlide>
        <SwiperSlide className="swipe_second"><img src={hudi} /></SwiperSlide>
        <SwiperSlide className="swipe_second"><img src={pants} /></SwiperSlide>
        <SwiperSlide className="swipe_second"><img src={pants} /></SwiperSlide>
        <SwiperSlide className="swipe_second"><img src={hudi} /></SwiperSlide>
        <SwiperSlide className="swipe_second"><img src={hudi} /></SwiperSlide>
        <SwiperSlide className="swipe_second"><img src={pants} /></SwiperSlide>
        <SwiperSlide className="swipe_second"><img src={pants} /></SwiperSlide>
        <SwiperSlide className="swipe_second"><img src={hudi} /></SwiperSlide>
        <SwiperSlide className="swipe_second"><img src={hudi} /></SwiperSlide>
        <SwiperSlide className="swipe_second"><img src={pants} /></SwiperSlide>
        <SwiperSlide className="swipe_second"><img src={pants} /></SwiperSlide>
        <SwiperSlide className="swipe_second"><img src={hudi} /></SwiperSlide>
        <SwiperSlide className="swipe_second"><img src={hudi} /></SwiperSlide>  
        </div>
    </Swiper>
      </>
    )
  }




const Assortment = () => {
    return (
      <section className="assortment">
        <div className="assortment__wrapper">
          <h3 className="assortment__title">Весь ассортимент</h3>
          {<AssortmentSwiper />}
        </div>
      </section>
    )
  }
  export default Assortment