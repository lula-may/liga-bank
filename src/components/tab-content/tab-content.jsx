import React, {useMemo} from 'react';
import {Service} from '../../data/services';

import PropTypes from 'prop-types';
import './style.scss';
import { getClassName } from '../../utils';
import {TabType} from '../../const';

function TabContent({tabName, viewportType}) {
  const {title, features, imageUrl} = Service[tabName];
  const imageSrc = imageUrl[viewportType];
  const className = useMemo(() => getClassName('service', `service--${tabName}`), [tabName]);
  const isCreditTab = tabName === TabType.CREDIT;

  return (
    <article className={className}>
      <div className="service__container">
        <div className="service__column service__column--left">
          <h2>{title}</h2>
          <ul className="service__features">
            {features.map(({id, text}) => (
              <li key={id} className="service__item">
                <span>{text}</span>
              </li>
            ))}
          </ul>
          {isCreditTab ?
            <p>Рассчитайте ежемесячный платеж и ставку по кредиту воспользовавшись нашим <a href="#calculator">кредитным калькулятором</a>
            </p>
            : <button className="service__button button">Узнать подробнее</button>}
        </div>
        <div className="service__column service__column--right">
          <div className="service__image">
            <img src={imageSrc} alt={title} />
          </div>
        </div>
      </div>
    </article>
  );
}

TabContent.propTypes = {
  tabName: PropTypes.string.isRequired,
  viewportType: PropTypes.string.isRequired,
};

export default TabContent;
