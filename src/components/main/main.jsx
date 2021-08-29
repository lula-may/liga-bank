import React, {Fragment, lazy, Suspense, useEffect, useCallback} from 'react';

import Footer from '../footer/footer';
import Header from '../header/header';
import Popup from '../popup/popup';
import Services from '../services/services';
import Slider from '../slider/slider';

import {Navigation} from '../../const';
import { defineViewportWidth } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import {getPopup, getViewport } from '../../store/page/selectors';
import { setPopup, setViewport } from '../../store/actions';

const Branches = lazy(() => import('../branches/branches'));
const CreditForm = lazy(() => import('../credit-form/credit-form'));
const renderLoader = () => <p>Loading</p>;

function Main() {
  const viewport = useSelector(getViewport);
  const popupName = useSelector(getPopup);
  const isPopupShown = Boolean(popupName);

  const dispatch = useDispatch();

  const changeDevice = useCallback(() => {
    const newViewport = defineViewportWidth();
    if (newViewport !== viewport) {
      dispatch(setViewport(newViewport));
    }
  }, [dispatch, viewport]);

  const closePopup = useCallback(() => dispatch(setPopup(null)), [dispatch]);

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
      <main>
        <Slider />
        <Services/>
        <Suspense fallback={renderLoader()}>
          <CreditForm />
          <Branches />
        </Suspense>
      </main>
      <Footer/>
      {isPopupShown && <Popup id={popupName} onClose={closePopup}/>}
    </Fragment>
  );
}

export default Main;
