import React from 'react';
import SwiperCore, {Pagination, Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Link} from 'react-scroll';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import './style.scss';

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);


export default function Slider() {
  return (
    <Swiper
      pagination={{clickable: true}}
      loop
      autoplay={{delay: 4000, disableOnInteraction: true}}
      simulateTouch={false}
      className="slider"
    >
      <SwiperSlide className="swiper-slide slide slide--1 slide--dark">
        <div className="slide__wrapper">
          <h3>Лига Банк</h3>
          <p>Кредиты на любой случай</p>
          <Link
            className="slide__button  button"
            duration={500}
            smooth
            offset={-30}
            to="calculator"
          >Рассчитать кредит
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide slide slide--2 slide--light">
        <div className="slide__wrapper">
          <h3>Лига Банк</h3>
          <p>Ваша уверенность в&nbsp;завтрашнем дне</p>
        </div>
      </SwiperSlide>
      <SwiperSlide className="swiper-slide slide slide--3 slide--light">
        <div className="slide__wrapper">
          <h3>Лига Банк</h3>
          <p>Всегда рядом</p>
          <Link
            className="slide__button button"
            duration={500}
            smooth
            offset={-30}
            to="branches"
          >Найти отделение
          </Link>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
