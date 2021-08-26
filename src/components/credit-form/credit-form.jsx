import React from 'react';
import {useSelector} from 'react-redux';
import './style.scss';

import CreditPurpose from '../credit-purpose/credit-purpose';
import CreditParameters from '../credit-parameters/credit-parameters';
import Offer from '../offer/offer';
import RequestForm from '../request-form/request-form';
import {getFormStep} from '../../store/page/selectors';

function CreditForm() {
  const step = useSelector(getFormStep);

  const isStepTwoShown = step > 1;
  const isStepThreeShown = step > 2;

  return (
    <section className="credit-form" id="calculator">
      <div className="credit-form__wrapper">
        <h2 className="credit-form__title">Кредитный калькулятор</h2>
        <div className="credit-form__container">
          <div className="credit-form__parameters">
            <div className="credit-form__step step">
              <h3>Шаг 1. Цель кредита</h3>
              <CreditPurpose
                className="step__form"
              />
            </div>
            {isStepTwoShown && (
              <div className="credit-form__step step">
                <h3>Шаг 2. Введите параметры кредита</h3>
                <CreditParameters
                  className="step__form"
                />
              </div>
            )}
          </div>
          <div className="credit-form__offer">
            {isStepTwoShown && <Offer />}
          </div>
        </div>
        {isStepThreeShown &&
        <div className="credit-form__step">
          <RequestForm />
        </div>}
      </div>
    </section>
  );
}

export default CreditForm;
