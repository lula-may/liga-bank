import React, { useState } from 'react';
import './style.scss';

import CreditPurpose from '../credit-purpose/credit-purpose';

function CreditForm() {
  const [creditType, setCreditType] = useState(null);
  return (
    <section className="credit-form" id="calculator">
      <div className="credit-form__wrapper">
        <h2 className="credit-form__title">Кредитный калькулятор</h2>
        <div className="credit-form__step step">
          <h3 className="step__title">Шаг 1. Цель кредита</h3>
          <CreditPurpose
            className="step__form"
            checkedCredit={creditType}
            onClick={setCreditType}
          />
        </div>
      </div>
    </section>
  );
}

export default CreditForm;
