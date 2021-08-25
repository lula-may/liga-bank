import React, {Fragment, useEffect, useCallback} from 'react';

import Footer from '../footer/footer';
import Header from '../header/header';
import Slider from '../slider/slider';
import Services from '../services/services';
import CreditForm from '../credit-form/credit-form';
import {Navigation} from '../../const';
import { defineViewportWidth } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { getViewport } from '../../store/page/selectors';
import { setViewport } from '../../store/actions';

function Main() {
  const viewport = useSelector(getViewport);
  const dispatch = useDispatch();

  const changeDevice = useCallback(() => {
    const newViewport = defineViewportWidth();
    if (newViewport !== viewport) {
      dispatch(setViewport(newViewport));
    }
  }, [dispatch, viewport]);

  useEffect(() => {
    window.addEventListener('resize', changeDevice);
    return () => {
      window.removeEventListener('resize', changeDevice);
    };
  }, [changeDevice]);

  return (
    <Fragment>
      <Header
        currentPage={Navigation.CREDIT}
      />
      <Slider />
      <Services/>
      <CreditForm />
      <Footer/>
    </Fragment>
  );
}

export default Main;
