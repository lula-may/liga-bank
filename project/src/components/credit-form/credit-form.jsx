import React, { useCallback, useState } from 'react';
import './style.scss';

import CreditPurpose from '../credit-purpose/credit-purpose';
import CreditParameters from '../credit-parameters/credit-parameters';

function CreditForm() {
  const [creditType, setCreditType] = useState(null);
  const [step, setStep] = useState(1);
  const isStepTwoShown = step > 1;
  // const isStepThreeShown = step > 2;
  const handlePurposeChange = useCallback((type) => {
    setCreditType(type);
    setStep(2);
  }, []);
  return (
    <section className="credit-form" id="calculator">
      <div className="credit-form__wrapper">
        <h2 className="credit-form__title">Кредитный калькулятор</h2>
        <div className="credit-form__step step">
          <h3 className="step__title">Шаг 1. Цель кредита</h3>
          <CreditPurpose
            className="step__form"
            checkedCredit={creditType}
            onClick={handlePurposeChange}
          />
        </div>
        {isStepTwoShown && (
          <div className="credit-form__step step">
            <h3 className="step__title">Шаг 2. Введите параметры кредита</h3>
            <CreditParameters
              className="step__form"
              credit={creditType}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default CreditForm;
