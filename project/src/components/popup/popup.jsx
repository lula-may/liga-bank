import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import LoginForm from '../login-form/login-form';
import ThankYou from '../thank-you/thank-you';
import {ESC_KEY, PopupType } from '../../const';
import { useEffect } from 'react';
import { getBodyScrollTop, isVerticalScroll } from '../../utils';

function Popup({id, onClose}) {
  const pageTopPosition = getBodyScrollTop();
  const pageLeftPosition = document.body.offsetLeft;

  const handleEscKeyDown = useCallback((evt) => {
    if (evt.key === ESC_KEY) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleEscKeyDown);
    return () => document.removeEventListener('keydown', handleEscKeyDown);
  }, [handleEscKeyDown]);

  useEffect(() => {
    if (isVerticalScroll()) {
      document.body.style.top = `-${pageTopPosition}px`;
      document.body.classList.add('body-lock');
    }

    return () => {
      if (isVerticalScroll()) {
        document.body.classList.remove('body-lock');
        document.body.style = void 0;
        window.scrollTo(0, pageTopPosition);
      }
    };
  }, [pageLeftPosition, pageTopPosition]);

  const renderContent = useCallback((type) => {
    switch (type) {
      case PopupType.LOGIN:
        return (
          <LoginForm onButtonClick={onClose} />
        );
      case PopupType.THANK_YOU:
        return (
          <ThankYou onButtonClick={onClose} />
        );
      default:
        return null;
    }
  }, [onClose]);

  return (
    <div className="popup">
      {renderContent(id)}
    </div>
  );
}

Popup.propTypes = {
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Popup;
