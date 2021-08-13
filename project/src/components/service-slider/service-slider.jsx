import React from 'react';
import SwiperCore, {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import PropTypes from 'prop-types';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import './style.scss';

import TabContent from '../tab-content/tab-content';
import {TabType} from '../../const';

// install Swiper modules
SwiperCore.use([Pagination]);

const services = Object.values(TabType);

export default function ServiceSlider({viewportType}) {
  return (
    <Swiper
      pagination={{clickable: true}}
      className="service-slider"
    >
      {services.map((type) => (
        <SwiperSlide key={type}>
          <TabContent tabName={type} viewportType={viewportType}/>
        </SwiperSlide>))}
    </Swiper>
  );
}

ServiceSlider.propTypes = {
  viewportType: PropTypes.string.isRequired,
};
