import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
// Import Swiper styles
import Swiper from 'swiper/bundle';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import './style.scss';

export default function Slider() {
  const sliderRef = useRef(null);
  const [slider, setSlider] = useState(null);

  useEffect(() => {
    if (sliderRef.current !== null && slider === null) {
      const instance = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: true,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        simulateTouch: false,
      });
      setSlider(instance);
    }

  }, [slider]);
  return (
    <div className="swiper-container" ref={sliderRef}>
      <h2 className="visually-hidden">Наши преимущества</h2>
      <div className="swiper-wrapper">
        {/* Slides */}
        <div className="swiper-slide slide slide--1 slide--dark">
          <div className="slide__wrapper">
            <h3>Лига Банк</h3>
            <p>Кредиты на любой случай</p>
            <Link class="slide__button  button" to="/">Рассчитать кредит</Link>

          </div>
        </div>
        <div className="swiper-slide slide slide--2 slide--light">
          <div className="slide__wrapper">
            <h3>Лига Банк</h3>
            <p>Ваша уверенность в&nbsp;завтрашнем дне</p>
          </div>
        </div>
        <div className="swiper-slide slide slide--3 slide--light">
          <div className="slide__wrapper">
            <h3>Лига Банк</h3>
            <p>Всегда рядом</p>
            <Link class="slide__button button" to="/">Найти отделение</Link>
          </div>
        </div>
      </div>
      {/* pagination */}
      <div className="swiper-pagination"></div>
    </div>  );
}
