import React, {useCallback, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import './style.scss';

import {getClassName} from '../../utils';
import {CreditData, CreditType} from '../../const';
import {resetOptions, setCreditType, setInitialPayment, setInitialPaymentRate, setPeriod, setTotalPrice, setStep} from '../../store/actions';
import {getCreditType} from '../../store/credit/selectors';

const CreditToTitle = {
  home: 'Ипотечное кредитование',
  auto: 'Автомобильное кредитование',
};

const types = Object.values(CreditType);

function CreditPurpose({className}) {
  const checkedCredit = useSelector(getCreditType);
  const [isOpen, setOpenStatus] = useState(false);
  const dispatch = useDispatch();

  const resetCreditParameters = useCallback((type) => {
    const {totalSum: {min: minTotalPrice}, initialPayment: {min: minInitialRate}, period: {min: minPeriod}} = CreditData[type];
    const mintInitialPayment = minInitialRate * minTotalPrice / 100;

    dispatch(setCreditType(type));
    dispatch(setTotalPrice(minTotalPrice));
    dispatch(setInitialPayment(mintInitialPayment));
    dispatch(setInitialPaymentRate(minInitialRate));
    dispatch(setPeriod(minPeriod));
    dispatch(resetOptions());
  }, [dispatch]);

  const handleOptionClick = useCallback((evt) => {
    const type = evt.target.id;
    setOpenStatus(false);
    resetCreditParameters(type);
    dispatch(setStep(2));
  }, [dispatch, resetCreditParameters]);

  const handleSelectClick = useCallback(() => setOpenStatus((prev) => !prev), []);

  const selectText = useMemo(() => checkedCredit ? CreditToTitle[checkedCredit] : 'Выберите цель кредита', [checkedCredit]);


  const formClass = useMemo(() => getClassName(className, 'purpose'), [className]);

  const iconId = isOpen ? '#arrow-up' : '#arrow-down';
  return (
    <form id="purpose" className={formClass}>
      <span
        className={getClassName('purpose__select', isOpen &&'purpose__select--open')}
        onClick={handleSelectClick}
        tabIndex="0"
      >{selectText}
        <svg className="purpose__icon" width="18" height="11">
          <use xlinkHref={iconId}></use>
        </svg>
      </span>
      <ul className="purpose__options">
        {types.map((type) => (
          <li
            key={type}
            id={type}
            className="purpose__option"
            onClick={handleOptionClick}
            tabIndex="0"
          >{CreditToTitle[type]}
          </li>
        ))}
      </ul>
    </form>
  );
}

CreditPurpose.propTypes = {
  className: PropTypes.string.isRequired,
};

export default CreditPurpose;
