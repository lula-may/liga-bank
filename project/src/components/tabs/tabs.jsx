import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

import {getClassName} from '../../utils';
import {TabType, TabTypeToData} from '../../const';

const TABS = Object.values(TabType);
function Tabs({activeTab, onClick}) {

  return (
    <ul className="tabs">
      {TABS.map((type) => {
        const {imgId, title} = TabTypeToData[type];
        const isActive = type === activeTab;
        return (
          <li
            key={type}
            id={type}
            className={getClassName('tabs__item', isActive && 'tabs__item--active')} tabIndex={0}
            onClick={onClick}
          >
            <svg className="tabs__icon" width="34" height="30">
              <use xlinkHref={imgId}></use>
            </svg>
            <h3>{title}</h3>
          </li>
        );})}
    </ul>
  );
}

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tabs;
