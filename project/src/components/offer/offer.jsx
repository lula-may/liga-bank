import React, { Fragment } from 'react';
import { useMemo } from 'react';
import {useSelector} from 'react-redux';
import { CreditType, MinLoanSum } from '../../const';
import { getCreditType, getValidityStatus, selectIsValidLoanSum, selectLoanSum, selectMinIncome, selectMonthlyPayment, selectPercentRate } from '../../store/selectors';
import './style.scss';

function Offer() {
  const creditType = useSelector(getCreditType);
  const isValidPrice = useSelector(getValidityStatus);
  const isValidLoan = useSelector(selectIsValidLoanSum);
  const loanSum = useSelector(selectLoanSum).toLocaleString('ru-RU');
  const percentRate = useSelector(selectPercentRate).toFixed(2).replace('.', ',');
  const monthlyPayment = useSelector(selectMonthlyPayment).toLocaleString('ru-RU');
  const monthlyIncome = useSelector(selectMinIncome).toLocaleString('ru-RU');

  const creditText = useMemo(() => (creditType === CreditType.AUTO) ? 'автокредита' : 'ипотеки', [creditType]);
  const messageText = useMemo(() => (creditType === CreditType.AUTO) ? 'автокредиты' : 'ипотечные кредиты', [creditType]);

  const renderContent = () => {
    if (!isValidPrice) {
      return (
        <h3>Наше предложение</h3>
      );
    }
    if (!isValidLoan) {
      return (
        <Fragment>
          <h3>Наш банк не выдает {messageText} меньше {MinLoanSum[creditType].toLocaleString('ru-RU')} рублей.</h3>
          <p>Попробуйте использовать другие параметры для расчета.</p>
        </Fragment>
      );
    }
    return (
      <Fragment>
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
      </Fragment>
    );
  };

  return (
    <section className="offer">
      <div className="offer__container">
        {renderContent()}
      </div>
    </section>
  );
}

export default Offer;
