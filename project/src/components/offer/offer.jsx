import React from 'react';
import {useSelector} from 'react-redux';
import { CreditType } from '../../const';
import { getCreditType, selectLoanSum, selectMinIncome, selectMonthlyPayment, selectPercentRate } from '../../store/selectors';
// import PropTypes from 'prop-types';
import './style.scss';

function Offer() {
  const creditType = useSelector(getCreditType);
  const loanSum = useSelector(selectLoanSum).toLocaleString('ru-RU');
  const percentRate = useSelector(selectPercentRate).toFixed(2).replace('.', ',');
  const monthlyPayment = useSelector(selectMonthlyPayment).toLocaleString('ru-RU');
  const monthlyIncome = useSelector(selectMinIncome).toLocaleString('ru-RU');

  const creditText = (creditType === CreditType.AUTO) ? 'автокредита' : 'ипотеки';

  return (
    <section className="offer">
      <div className="offer__container">
        <h3>Наше предложение</h3>
        <dl className="offer__details">
          <div className="offer__item">
            <dt>{loanSum} рублей</dt>
            <dd>Сумма {creditText}</dd>
          </div>
          <div className="offer__item">
            <dt>{percentRate}%</dt>
            <dd>Процентная ставка</dd>
          </div>
          <div className="offer__item">
            <dt>{monthlyPayment} рублей</dt>
            <dd>Ежемесячный платеж</dd>
          </div>
          <div className="offer__item">
            <dt>{monthlyIncome} рублей</dt>
            <dd>Необходимый доход</dd>
          </div>
        </dl>
        <button className="offer__button button">Оформить заявку</button>
      </div>
    </section>
  );
}

export default Offer;
