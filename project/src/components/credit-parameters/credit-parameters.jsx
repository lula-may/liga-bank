import React, {useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import CreditPriceField from '../credit-price-field/credit-price-field';
import {Credit} from '../../data/credit';
import CreditRangeField from '../credit-range-field/credit-range-field';
import RangeSlider from '../range-slider/range-slider';
import { getPluralNumeral } from '../../utils';

const getPeriodLabel = (value) => getPluralNumeral(value, 'год', 'года', 'лет');

function CreditParameters(props) {
  const {className, credit} = props;
  const {totalSum, initialPayment, period} = Credit[credit];
  const {min: minPrice} = totalSum;
  const {min: minRate, max: maxRate, label: paymentLabel} = initialPayment;
  const {min: minPeriod, max: maxPeriod, label: periodLabel} = period;

  const [totalPrice, setTotalPrice] = useState(0);
  const [payment, setInitialPayment] = useState(0);
  const [paymentRate, setPaymentRate] = useState(0);
  const [term, setTerm] = useState(0);

  const getMinPayment = useCallback(() => Math.round(totalPrice * minRate / 100), [minRate, totalPrice]);
  const getMaxPayment = useCallback(() => Math.round(totalPrice * maxRate / 100), [maxRate, totalPrice]);

  const onPaymentChange = useCallback((value) => {
    // setInitialPayment(value);
    setPaymentRate(value * 100 / totalPrice);
  }, [totalPrice]);

  useEffect(() => setTotalPrice(minPrice), [minPrice]);
  useEffect(() => {
    if (!paymentRate) {
      setPaymentRate(minRate);
    }}, [minRate, paymentRate]);

  useEffect(() => setInitialPayment(Math.round(totalPrice * paymentRate / 100)), [paymentRate, totalPrice]);

  useEffect(() => setTerm(minPeriod), [minPeriod]);

  return (
    <form method="post" id="form-parameters" className={className}>
      <CreditPriceField
        priceParams={totalSum}
        currentPrice={totalPrice}
        onChange={setTotalPrice}
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
          onRangeChange={setPaymentRate}
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
        onChange={setTerm}
      >
        <RangeSlider
          className="range range--period"
          formatLabel={(value) => `${value} ${getPeriodLabel(value)}`}
          initialValue={term}
          minValue={minPeriod}
          maxValue={maxPeriod}
          name="period"
          onRangeChange={setTerm}
        />
      </CreditRangeField>
    </form>
  );
}

CreditParameters.propTypes = {
  className: PropTypes.string.isRequired,
  credit: PropTypes.string.isRequired,
};

export default CreditParameters;
