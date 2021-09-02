import React, {useCallback, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import './style.scss';

import {clearNumber, getClassName, isValidValue} from '../../utils';
import { getTotalSum, getValidityStatus } from '../../store/credit/selectors';
import { setTotalPrice, setValidStatus, updateInitialPayment } from '../../store/actions';

function CreditPriceField(props) {
  const {
    priceParams: {min, max, label, step},
  } = props;

  const isValid = useSelector(getValidityStatus);
  const currentPrice = useSelector(getTotalSum);
  const dispatch = useDispatch();

  const infoText = useMemo(() => `От ${min.toLocaleString('ru-RU')} до ${max.toLocaleString('ru-RU')} рублей`, [max, min]);

  const isMinPrice = currentPrice === min;
  const isMaxPrice = currentPrice === max;

  const incrementPrice = useCallback(() => (currentPrice + step > max) ? max : currentPrice + step, [currentPrice, max, step]);

  const decrementPrice = useCallback(() => (currentPrice - step < min) ? min : currentPrice - step, [currentPrice, min, step]);

  const doOnPriceChange = useCallback((value) => {
    const isNewValueValid = isValidValue(value, min, max);
    dispatch(setTotalPrice(value));
    if (isValid !== isNewValueValid) {
      dispatch(setValidStatus(!isValid));
    }
    if (isNewValueValid) {
      dispatch(updateInitialPayment());
    }
  }, [dispatch, isValid, max, min]);

  const handlePriceChange = useCallback((evt) => {
    const newValue = clearNumber(evt.target.value);
    if (newValue !== currentPrice) {
      doOnPriceChange(newValue);
    }
  }, [currentPrice, doOnPriceChange]);

  const handleMinusClick = useCallback((evt) => {
    evt.preventDefault();
    const newValue = decrementPrice();
    doOnPriceChange(newValue);
  }, [decrementPrice, doOnPriceChange]);

  const handlePlusClick = useCallback((evt) => {
    evt.preventDefault();
    const newValue = incrementPrice();
    doOnPriceChange(newValue);
  }, [incrementPrice, doOnPriceChange]);

  return (
    <div className={getClassName('price-field', !isValid && 'price-field--invalid')}>
      <label className="price-field__label" htmlFor="price">{label}</label>
      <div className="price-field__wrapper">
        <button
          className="price-field__button price-field__button--minus"
          type="button"
          aria-label="Уменьшить"
          onClick={handleMinusClick}
          disabled={isMinPrice}
        >
          <svg className="price-field__icon" width="16" height="2">
            <use xlinkHref="#minus"/>
          </svg>
        </button>
        <NumberFormat
          id="price"
          type="text"
          name="price"
          onChange={handlePriceChange}
          value={currentPrice}
          thousandSeparator=" "
        />
        <span className="price-field__units">рублей</span>
        <span className="price-field__error">некорректное значение</span>
        <button
          className="price-field__button price-field__button--plus"
          type="button"
          aria-label="Увеличить"
          onClick={handlePlusClick}
          disabled={isMaxPrice}
        >
          <svg className="price-field__icon" width="16" height="16">
            <use xlinkHref="#plus"/>
          </svg>
        </button>
      </div>
      <span className="price-field__info">{infoText}</span>
    </div>
  );
}

CreditPriceField.propTypes = {
  priceParams: PropTypes.shape({
    label: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
  }).isRequired,
};

export default CreditPriceField;
