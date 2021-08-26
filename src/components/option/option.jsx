import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Option({label, title, onChange, isChecked}) {
  const handleInputChange = useCallback(({target}) => onChange({
    title: target.id,
    isChecked: target.checked,
  }), [onChange]);

  return (
    <div className="option">
      <input className="visually-hidden" type="checkbox" name={title} id={title} onChange={handleInputChange} checked={isChecked} />
      <label htmlFor={title} className="option__label">
        <span className="option__box"/>
        {label}
      </label>
    </div>
  );
}

Option.propTypes = {
  isChecked: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Option;

