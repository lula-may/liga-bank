import React, {useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

import {getClassName} from '../../utils';
import { CreditType } from '../../const';

const CreditToTitle = {
  home: 'Ипотечное кредитование',
  auto: 'Автомобильное кредитование',
};

const types = Object.values(CreditType);

function CreditPurpose({className, onClick, checkedCredit}) {
  const [isOpen, setOpenStatus] = useState(false);

  const selectText = useMemo(() => checkedCredit ? CreditToTitle[checkedCredit] : 'Выберите цель кредита', [checkedCredit]);
  const handleOptionClick = useCallback((evt) => {
    setOpenStatus(false);
    onClick(evt.target.id);
  }, [onClick]);

  const handleSelectClick = useCallback(() => setOpenStatus((prev) => !prev), []);

  const formClass = useMemo(() => getClassName(className, 'purpose'), [className]);

  const iconId = isOpen ? '#arrow-up' : '#arrow-down';
  return (
    <form id="purpose" className={formClass}>
      <span
        className={getClassName('purpose__select', isOpen &&'purpose__select--open')}
        onClick={handleSelectClick}
        tabIndex="0"
      >{selectText}
        <svg className="purpose__icon" width="18" height="11">
          <use xlinkHref={iconId}></use>
        </svg>
      </span>
      <ul className="purpose__options">
        {types.map((type) => (
          <li
            key={type}
            id={type}
            className="purpose__option"
            onClick={handleOptionClick}
            tabIndex="0"
          >{CreditToTitle[type]}
          </li>
        ))}
      </ul>
    </form>
  );
}

CreditPurpose.propTypes = {
  className: PropTypes.string.isRequired,
  checkedCredit: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default CreditPurpose;
