import React from 'react';
import FocusTrap from 'focus-trap-react';
import PropTypes from 'prop-types';
import './style.scss';

export default function ThankYou({onButtonClick}) {
  return (
    <FocusTrap>
      <div className="success-message">
        <h3>Спасибо за обращение в наш банк.</h3>
        <p>Наш менеджер скоро свяжется с вами по указанному номеру телефона.</p>
        <button className="success-message__button button-close" onClick={onButtonClick} aria-label="Закрыть"></button>
      </div>
    </FocusTrap>
  );
}

ThankYou.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};
