import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const constrainValue = (value) => {
  if (value < 0) {
    return 0;
  } if (value > 100) {
    return 100;
  }
  return value;
};

function RangeBar({initialRate = 0, onRateChange}) {
  const rangeRef = useRef();
  const [rangeRatio, setRangeRatio] = useState(0);
  const [position, setPosition] = useState(initialRate);
  let startCursorPos = 0;
  let endCursorPos = 0;

  const handleMouseMove = (evt) => {
    endCursorPos = evt.clientX;
    const shift = endCursorPos - startCursorPos;
    startCursorPos = endCursorPos;
    setPosition((prev) => constrainValue(prev + shift * rangeRatio));
    onRateChange(position);
  };

  const handleMouseUp = () => {
    window.removeEventListener('mouseup', handleMouseUp);
    window.removeEventListener('mousemove', handleMouseMove);
  };

  const handleMouseDown = (evt) => {
    startCursorPos = evt.clientX;
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
  };


  const style = {left: `${position}%`};

  useEffect(() => {
    if (rangeRef.current) {
      const rangeElement = rangeRef.current;
      const handleElement = rangeElement.querySelector('.range-slider__handle');
      const ratio = 100 / (rangeElement.offsetWidth - handleElement.offsetWidth);
      setRangeRatio(ratio);
    }
  }, []);

  return (
    <div className="range-slider" ref={rangeRef}>
      <div className="range-slider__bar"></div>
      <div className="range-slider__progress" style={style}></div>
      <div className="range-slider__handle" style={style} onMouseDown={handleMouseDown}></div>
    </div>
  );
}

RangeBar.propTypes = {
  initialRate: PropTypes.number,
  onRateChange: PropTypes.func.isRequired,
};

export default RangeBar;
