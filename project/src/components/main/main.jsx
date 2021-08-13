import React, {Fragment, useState, useEffect, useCallback} from 'react';

import Footer from '../footer/footer';
import Header from '../header/header';
import Slider from '../slider/slider';
import Services from '../services/services';
import CreditForm from '../credit-form/credit-form';
import {Navigation} from '../../const';
import { defineViewportWidth } from '../../utils';

function Main() {
  const [viewport, setViewport] = useState(defineViewportWidth());
  const changeDevice = useCallback(() => {
    const newViewport = defineViewportWidth();
    if (newViewport !== viewport) {
      setViewport(newViewport);
    }
  }, [viewport]);

  useEffect(() => {
    window.removeEventListener('resize', changeDevice);
    window.addEventListener('resize', changeDevice);
  });

  return (
    <Fragment>
      <Header
        currentPage={Navigation.CREDIT}
        viewportType={viewport}
      />
      <Slider />
      <Services viewportType={viewport}/>
      <CreditForm />
      <Footer viewportType={viewport} />
    </Fragment>
  );
}

export default Main;
