import React from 'react';
// import {useSelector} from 'react-redux';
// import PropTypes from 'prop-types';
import './style.scss';

function Offer(props) {
  return (
    <section className="offer">
      <div className="offer__container">
        <h3>Наше предложение</h3>
        <dl className="offer__details">
          <div className="offer__item">
            <dt>1 330 000 рублей</dt>
            <dd>Сумма ипотеки</dd>
          </div>
          <div className="offer__item">
            <dt>9,40%</dt>
            <dd>Процентная ставка</dd>
          </div>
          <div className="offer__item">
            <dt>27 868 рублей</dt>
            <dd>Ежемесячный платеж</dd>
          </div>
          <div className="offer__item">
            <dt>61 929 рублей</dt>
            <dd>Необходимый доход</dd>
          </div>
        </dl>
        <button className="offer__button button">Оформить заявку</button>
      </div>
    </section>
  );
}

export default Offer;
