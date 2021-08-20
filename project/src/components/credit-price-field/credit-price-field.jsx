import React, {useCallback, useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import {clearNumber, getClassName, isValidValue} from '../../utils';

function CreditPriceField(props) {
  const {
    priceParams: {min, max, label, step},
    currentPrice,
    onChange,
  } = props;

  const [isValid, setIsValid] = useState(true);
  const infoText = useMemo(() => `От ${min.toLocaleString('ru-RU')} до ${max.toLocaleString('ru-RU')}`, [max, min]);

  const incrementPrice = useCallback((prev) => (prev + step > max) ? max : prev + step, [max, step]);
  const decrementPrice = useCallback((prev) => (prev - step < min) ? min : prev + step, [min, step]);

  const handlePriceChange = useCallback((evt) => {
    const newValue = clearNumber(evt.target.value);
    if (newValue !== currentPrice) {
      const isNewValueValid = isValidValue(newValue, min, max);
      if (isValid !== isNewValueValid) {
        setIsValid(isNewValueValid);
      }
      onChange(newValue);
    }
  }, [currentPrice, isValid, max, min, onChange]);

  const handleMinusClick = useCallback((evt) => {
    evt.preventDefault();
    onChange(decrementPrice);
  }, [decrementPrice, onChange]);

  const handlePlusClick = useCallback((evt) => {
    evt.preventDefault();
    onChange(incrementPrice);
  }, [incrementPrice, onChange]);

  return (
    <div className={getClassName('price-field', !isValid && 'price-field--invalid')}>
      <label className="price-field__label" htmlFor="price">{label}</label>
      <div className="price-field__wrapper">
        <button
          className="price-field__button price-field__button--minus"
          type="button"
          aria-label="Уменьшить"
          onClick={handleMinusClick}
          disabled={currentPrice === min}
        >
          <svg className="price-field__icon" width="16" height="2">
            <use xlinkHref="#minus"/>
          </svg>
        </button>
        <input
          id="price"
          type="text"
          name="price"
          onChange={handlePriceChange}
          value={currentPrice.toLocaleString('ru-RU')}
        />
        <span className="price-field__units">рублей</span>
        <span className="price-field__error">некорректное значение</span>
        <button
          className="price-field__button price-field__button--plus"
          type="button"
          aria-label="Увеличить"
          onClick={handlePlusClick}
          disabled={currentPrice === max}
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
  currentPrice: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  priceParams: PropTypes.shape({
    label: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
  }).isRequired,
};

export default CreditPriceField;
