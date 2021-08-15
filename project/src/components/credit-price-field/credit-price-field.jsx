import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function CreditPriceField(props) {
  const {
    priceParams: {min, max, label},
    currentPrice,
    onMinusClick,
    onPlusClick,
    onChange,
  } = props;
  const infoText = useMemo(() => `От ${min.toLocaleString('ru-RU')} до ${max.toLocaleString('ru-RU')}`, [max, min]);

  return (
    <div className="price-field">
      <label className="price-field__label" htmlFor="price">{label}</label>
      <div className="price-field__wrapper">
        <input
          id="price"
          type="number"
          name="price"
          min={min}
          max={max}
          onChange={onChange}
          value={currentPrice}
        />
        <button
          className="price-field__button"
          type="button"
          aria-label="Уменьшить"
          onClick={onMinusClick}
        >
          <svg className="button__icon" width="16" height="2">
            <use xlinkHref="#minus"/>
          </svg>
        </button>
        <button
          className="price-field__button"
          type="button"
          aria-label="Увеличить"
          onClick={onPlusClick}
        >
          <svg className="button__icon" width="16" height="16">
            <use xlinkHref="#plus"/>
          </svg>
        </button>
        <span className="field__units">рублей</span>
        <span className="price-field__error">некорректное значение</span>
      </div>
      <span className="field__info">{infoText}</span>
    </div>
  );
}

CreditPriceField.propTypes = {
  currentPrice: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onMinusClick: PropTypes.func.isRequired,
  onPlusClick: PropTypes.func.isRequired,
  priceParams: PropTypes.shape({
    label: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
  }).isRequired,
};

export default CreditPriceField;
