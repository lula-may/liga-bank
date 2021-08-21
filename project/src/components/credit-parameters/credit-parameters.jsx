import React, {useCallback} from 'react';
import PropTypes from 'prop-types';

import CreditPriceField from '../credit-price-field/credit-price-field';
import CreditRangeField from '../credit-range-field/credit-range-field';
import RangeSlider from '../range-slider/range-slider';
import { getPluralNumeral } from '../../utils';
import {Credit} from '../../data/credit';
import { useDispatch, useSelector } from 'react-redux';
import {getTotalSum, getInitialPayment, getPaymentRate, getPeriod, getCreditType} from '../../store/selectors';
import { setInitialPayment, setInitialPaymentRate, setPeriod, setTotalPrice } from '../../store/actions';

const getPeriodLabel = (value) => getPluralNumeral(value, 'год', 'года', 'лет');

function CreditParameters({className}) {
  const type = useSelector(getCreditType);
  const totalPrice = useSelector(getTotalSum);
  const payment = useSelector(getInitialPayment);
  const paymentRate = useSelector(getPaymentRate);
  const term = useSelector(getPeriod);

  const creditParameters = Credit[type];
  const {totalSum, initialPayment, period} = creditParameters;
  // const {min: minPrice} = totalSum;
  const {min: minRate, max: maxRate, label: paymentLabel} = initialPayment;
  const {min: minPeriod, max: maxPeriod, label: periodLabel} = period;

  const dispatch = useDispatch();
  const getMinPayment = useCallback(() => Math.round(totalPrice * minRate / 100), [minRate, totalPrice]);
  const getMaxPayment = useCallback(() => Math.round(totalPrice * maxRate / 100), [maxRate, totalPrice]);

  const onTotalPriceChange = useCallback((price) => dispatch(setTotalPrice(price)), [dispatch]);

  const onPaymentChange = useCallback((value) => {
    dispatch(setInitialPayment(value));
    dispatch(setInitialPaymentRate(value * 100 / totalPrice));
  }, [dispatch, totalPrice]);

  const onRateChange = useCallback((value) => {
    dispatch(setInitialPaymentRate(value));
    dispatch(setInitialPayment(totalPrice * value / 100));
  }, [dispatch, totalPrice]);

  const onPeriodChange = useCallback((value) => dispatch(setPeriod(value)), [dispatch]);
  return (
    <form method="post" id="form-parameters" className={className}>
      <CreditPriceField
        priceParams={totalSum}
        currentPrice={totalPrice}
        onChange={onTotalPriceChange}
      />
      <CreditRangeField
        currentValue={payment}
        fieldName="initial-payment"
        fieldUnit="рублей"
        label={paymentLabel}
        max={getMaxPayment()}
        min={getMinPayment()}
        onChange={onPaymentChange}
      >
        <RangeSlider
          className="range range--initial-payment"
          formatLabel={(value) => `${Math.round(value)}%`}
          initialValue={paymentRate}
          minValue={minRate}
          maxValue={maxRate}
          name="initial-payment"
          onRangeChange={onRateChange}
          step={5}
        />
      </CreditRangeField>
      <CreditRangeField
        currentValue={term}
        fieldName="period"
        fieldUnit={getPeriodLabel(term)}
        label={periodLabel}
        max={maxPeriod}
        min={minPeriod}
        onChange={onPeriodChange}
      >
        <RangeSlider
          className="range range--period"
          formatLabel={(value) => `${value} ${getPeriodLabel(value)}`}
          initialValue={term}
          minValue={minPeriod}
          maxValue={maxPeriod}
          name="period"
          onRangeChange={onPeriodChange}
        />
      </CreditRangeField>
    </form>
  );
}

CreditParameters.propTypes = {
  className: PropTypes.string.isRequired,
  // credit: PropTypes.string.isRequired,
};

export default CreditParameters;
