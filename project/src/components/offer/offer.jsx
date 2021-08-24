import React, { Fragment, useCallback } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { CreditType, MinLoanSum } from '../../const';
import { formatMoneyString } from '../../utils';
import { setStep } from '../../store/actions';
import { getCreditType, getFormStep, getValidityStatus, selectIsValidLoanSum, selectLoanSum, selectMinIncome, selectMonthlyPayment, selectPercentRate } from '../../store/selectors';
import './style.scss';

const typeToText = {
  [CreditType.AUTO]: 'автокредита',
  [CreditType.HOME]: 'ипотеки',
};

const typeToMessage = {
  [CreditType.AUTO]: 'автокредиты',
  [CreditType.HOME]: 'ипотечные кредиты',
};

function Offer() {
  const creditType = useSelector(getCreditType);
  const isValidPrice = useSelector(getValidityStatus);
  const isValidLoan = useSelector(selectIsValidLoanSum);
  const loanSum = useSelector(selectLoanSum);
  const percentRate = useSelector(selectPercentRate).toFixed(2).replace('.', ',');
  const monthlyPayment = useSelector(selectMonthlyPayment);
  const monthlyIncome = useSelector(selectMinIncome);
  const formStep = useSelector(getFormStep);
  const isDisabled = formStep === 3;
  const dispatch = useDispatch();

  const onButtonClick = useCallback(() => dispatch(setStep(3)), [dispatch]);

  const renderContent = () => {
    if (!isValidPrice) {
      return (
        <h3>Наше предложение</h3>
      );
    }
    if (!isValidLoan) {
      return (
        <Fragment>
          <h3>Наш банк не выдает {typeToMessage[creditType]} меньше {MinLoanSum[creditType].toLocaleString('ru-RU')} рублей.</h3>
          <p>Попробуйте использовать другие параметры для расчета.</p>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <h3>Наше предложение</h3>
        <dl className="offer__details">
          <div className="offer__item">
            <dt>{formatMoneyString(loanSum)}</dt>
            <dd>Сумма {typeToText[creditType]}</dd>
          </div>
          <div className="offer__item">
            <dt>{percentRate}%</dt>
            <dd>Процентная ставка</dd>
          </div>
          <div className="offer__item">
            <dt>{formatMoneyString(monthlyPayment)}</dt>
            <dd>Ежемесячный платеж</dd>
          </div>
          <div className="offer__item">
            <dt>{formatMoneyString(monthlyIncome)}</dt>
            <dd>Необходимый доход</dd>
          </div>
        </dl>
        <button
          className="offer__button button"
          type="button"
          disabled={isDisabled}
          onClick={onButtonClick}
        >Оформить заявку
        </button>
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
