import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import { PopupType } from '../../const';
import { useEffect } from 'react';
import { getBodyScrollTop } from '../../utils';


function Popup({id, onClose}) {
  const pageTopPosition = getBodyScrollTop();
  const pageLeftPosition = document.body.offsetLeft;

  useEffect(() => {
    document.body.style.top = `-${pageTopPosition}px`;
    document.body.width = '100%';
    document.body.classList.add('body-lock');
    return () => {
      document.body.classList.remove('body-lock');
      window.scrollTo(0, pageTopPosition);
    };
  }, [pageLeftPosition, pageTopPosition]);

  const renderContent = useCallback((type) => {
    switch (type) {
      case PopupType.LOGIN:
        return (
          <div className="clas" onClick={onClose}></div>
        );
      case PopupType.THANK_YOU:
        return (
          <div className="pro" onClick={onClose}></div>
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
