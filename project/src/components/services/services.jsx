import React, {useCallback, useState} from 'react';
import './style.scss';

import ServiceTabs from '../service-tabs/service-tabs';
import ServiceSlider from '../service-slider/service-slider';
import {TabType, Viewport} from '../../const';
import { useSelector } from 'react-redux';
import { getViewport } from '../../store/page/selectors';

function Services() {
  const viewportType = useSelector(getViewport);
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

export default Services;

