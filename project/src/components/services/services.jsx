import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import ServiceTabs from '../service-tabs/service-tabs';
import ServiceSlider from '../service-slider/service-slider';
import {TabType, Viewport} from '../../const';

function Services({viewportType}) {
  const [activeTab, setActiveTab] = useState(TabType.DEPOSIT);
  const onTabClick = useCallback((evt) => {
    const newTab = evt.currentTarget.id;
    if (newTab !== activeTab) {
      setActiveTab(newTab);
    }
  }, [activeTab]);

  const isDesktop = viewportType === Viewport.DESKTOP;

  if (isDesktop) {
    return (
      <section className="services">
        <div className="services__container">
          {isDesktop &&
          <ServiceTabs
            activeTab={activeTab}
            onClick={onTabClick}
            viewportType={Viewport.DESKTOP}
          />}
        </div>
      </section>
    );
  }

  return <ServiceSlider viewportType={viewportType}/>;
}

Services.propTypes = {
  viewportType: PropTypes.string.isRequired,
};

export default Services;

