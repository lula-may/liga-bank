import React, {useCallback, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

import {clearNumber} from '../../utils';

const constrainValue = (value, min, max) => {
  switch (true) {
    case value > max:
      return max;
    case value < min:
      return min;
    default:
      return value;
  }
};

function CreditRangeField(props) {
  const {
    children,
    currentValue,
    isDisabled,
    fieldName,
    fieldUnit,
    label,
    max,
    min,
    onChange,
  } = props;
  const inputRef = useRef();

  const handleInputChange = useCallback((evt) => {
    const inputValue = clearNumber(evt.target.value);
    const newValue = constrainValue(inputValue, min, max);
    if (currentValue !== newValue) {
      onChange(newValue);
    }
  }, [currentValue, max, min, onChange]);

  useEffect(() => {
    if (inputRef.current) {
      const inputElement = inputRef.current;
      inputElement.value = currentValue.toLocaleString('ru-RU');
      inputElement.addEventListener('input', (evt) => {
        inputElement.value = clearNumber(evt.target.value);
      });
      inputElement.addEventListener('change', handleInputChange);
      inputElement.addEventListener('focus', () => inputElement.value = currentValue);
      inputElement.addEventListener('blur', () => inputElement.value = currentValue.toLocaleString('ru-RU'));
    }
  }, [currentValue, handleInputChange]);

  return (
    <div className="price-field">
      <label className="price-field__label" htmlFor={fieldName}>{label}</label>
      <div className="price-field__wrapper">
        <input
          ref={inputRef}
          id={fieldName}
          type="text"
          name={fieldName}
          defaultValue={currentValue.toLocaleString('ru-RU')}
          disabled={isDisabled}
        />
        <span className="price-field__units">{fieldUnit}</span>
      </div>
      {children}
    </div>
  );
}

CreditRangeField.propTypes = {
  children: PropTypes.element,
  currentValue: PropTypes.number.isRequired,
  fieldName: PropTypes.string.isRequired,
  fieldUnit: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};


export default CreditRangeField;
