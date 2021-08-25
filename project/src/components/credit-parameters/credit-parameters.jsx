import React, {useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import CreditPriceField from '../credit-price-field/credit-price-field';
import CreditRangeField from '../credit-range-field/credit-range-field';
import Option from '../option/option';
import RangeSlider from '../range-slider/range-slider';

import { getPeriodLabel } from '../../utils';
import {CreditData, OptionType } from '../../const';
import {getTotalSum, getInitialPayment, getPaymentRate, getPeriod, getCreditType, getValidityStatus, getCascoStatus, getLifeInsuranceStatus, getMatCapitalStatus} from '../../store/credit/selectors';
import { setCasco, setInitialPayment, setInitialPaymentRate, setLifeInsurance, setMatCapital, setPeriod, updateInitialPaymentRate} from '../../store/actions';


function CreditParameters({className}) {
  const type = useSelector(getCreditType);
  const totalPrice = useSelector(getTotalSum);
  const isValid = useSelector(getValidityStatus);
  const payment = useSelector(getInitialPayment);
  const paymentRate = useSelector(getPaymentRate);
  const term = useSelector(getPeriod);
  const OptionStatus = {
    [OptionType.CASCO]: useSelector(getCascoStatus),
    [OptionType.LIFE_INSURANCE]: useSelector(getLifeInsuranceStatus),
    [OptionType.MAT_CAPITAL]: useSelector(getMatCapitalStatus),
  };

  const parameters = CreditData[type];
  const {totalSum, initialPayment, period, options} = parameters;
  const {min: minRate, max: maxRate, label: paymentLabel} = initialPayment;
  const {min: minPeriod, max: maxPeriod, label: periodLabel} = period;

  const dispatch = useDispatch();
  const minPayment = totalPrice * minRate / 100;

  const onPaymentChange = useCallback((value) => {
    dispatch(setInitialPayment(value));
    dispatch(updateInitialPaymentRate());
  }, [dispatch]);

  const onRateChange = useCallback((value) => {
    dispatch(setInitialPaymentRate(value));
    dispatch(setInitialPayment(totalPrice * value / 100));
  }, [dispatch, totalPrice]);

  const onPeriodChange = useCallback((value) => dispatch(setPeriod(value)), [dispatch]);


  const onOptionChange = useCallback(({title, isChecked}) => {
    switch (title) {
      case OptionType.CASCO:
        dispatch(setCasco(isChecked));
        break;
      case OptionType.LIFE_INSURANCE:
        dispatch(setLifeInsurance(isChecked));
        break;
      case OptionType.MAT_CAPITAL:
        dispatch(setMatCapital(isChecked));
        break;
      default:
    }
  }, [dispatch]);

  return (
    <form method="post" id="form-parameters" className={className}>
      <CreditPriceField
        priceParams={totalSum}
      />
      <CreditRangeField
        currentValue={payment}
        fieldName="initial-payment"
        fieldUnit="рублей"
        isDisabled={!isValid}
        label={paymentLabel}
        max={totalPrice}
        min={minPayment}
        onChange={onPaymentChange}
      >
        <RangeSlider
          className="range range--initial-payment"
          formatLabel={(value) => `${Math.round(value)}%`}
          initialValue={paymentRate}
          isDisabled={!isValid}
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
        isDisabled={!isValid}
        label={periodLabel}
        max={maxPeriod}
        min={minPeriod}
        onChange={onPeriodChange}
      >
        <RangeSlider
          className="range range--period"
          formatLabel={(value) => `${value} ${getPeriodLabel(value)}`}
          initialValue={term}
          isDisabled={!isValid}
          minValue={minPeriod}
          maxValue={maxPeriod}
          name="period"
          onRangeChange={onPeriodChange}
        />
      </CreditRangeField>
      {options.map(({title, label}) => (
        <Option
          key={title}
          title={title}
          label={label}
          isChecked={OptionStatus[title]}
          onChange={onOptionChange}
        />
      ))}
    </form>
  );
}

CreditParameters.propTypes = {
  className: PropTypes.string.isRequired,
};

export default CreditParameters;
