import React, {useCallback, useEffect, useState} from 'react';
import InputRange from 'react-input-range';
import PropTypes from 'prop-types';

import 'react-input-range/lib/css/index.css';
import './style.scss';

function RangeSlider(props) {
  const {
    className,
    formatLabel,
    initialValue,
    minValue,
    maxValue,
    name,
    onRangeChange,
    step} = props;

  const [currentValue, setCurrentValue] = useState(null);
  const onChange = useCallback((value) => {
    setCurrentValue(value);
    onRangeChange(value);
  }, [onRangeChange]);

  useEffect(() => {
    initialValue && setCurrentValue(initialValue);
  }, [initialValue]);

  if (currentValue) {
    return (
      <div className={className}>
        <InputRange
          formatLabel={formatLabel}
          minValue={minValue}
          maxValue={maxValue}
          name={name}
          step={step}
          onChange={onChange}
          value={currentValue}
        />
      </div>
    );
  }
  return null;
}

RangeSlider.propTypes = {
  className: PropTypes.string,
  formatLabel: PropTypes.func,
  initialValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  minValue: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onRangeChange: PropTypes.func.isRequired,
  step: PropTypes.number,
};
export default RangeSlider;
