import React, {useMemo} from 'react';
import { Link } from 'react-router-dom';
import {Service} from '../../data/services';

import PropTypes from 'prop-types';
import './style.scss';
import { getClassName } from '../../utils';
import {TabType, Viewport} from '../../const';

const getImgSize = (viewportType) => {
  switch (viewportType) {
    case Viewport.MOBILE:
      return ({
        width: '125',
        height: '113',
      });
    case Viewport.TABLET:
      return ({
        width: '395',
        height: '260',
      });
    default:
      return ({
        width: '440',
        height: '290',
      });
  }
};
function TabContent({tabName, viewportType}) {
  const {title, features, imageUrl} = Service[tabName];
  const imageSrc = imageUrl[viewportType];
  const className = useMemo(() => getClassName('service', `service--${tabName}`), [tabName]);
  const isCreditTab = tabName === TabType.CREDIT;
  const {width, height} = getImgSize(viewportType);

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
            <p>Рассчитайте ежемесячный платеж и&nbsp;ставку&nbsp;по кредиту воспользовавшись нашим <a href="#calculator">кредитным калькулятором</a>
            </p>
            : <Link className="service__button button" to="/">Узнать подробнее</Link>}
        </div>
        <div className="service__column service__column--right">
          <div className="service__image">
            <img src={imageSrc} width={width} height={height} alt={title} />
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
