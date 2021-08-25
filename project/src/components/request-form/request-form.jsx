import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import NumberFormat from 'react-number-format';
import './style.scss';

import { CreditType } from '../../const';
import { getCreditType, getInitialPayment, getPeriod, getTotalSum } from '../../store/credit/selectors';
import { getRequestNumber } from '../../store/page/selectors';
import { formatMoneyString, formatRequestNumber, getPeriodLabel, getClassName } from '../../utils';

const typeToTitle = {
  [CreditType.AUTO]: 'Автокредит',
  [CreditType.HOME]: 'Ипотека',
};

const typeToLabel = {
  [CreditType.AUTO]: 'Стоимость автомобиля',
  [CreditType.HOME]: 'Стоимость недвижимости',
};

function RequestForm() {
  const requestNumber = useSelector(getRequestNumber);
  const creditType = useSelector(getCreditType);
  const totalPrice = useSelector(getTotalSum);
  const initialPayment = useSelector(getInitialPayment);
  const period = useSelector(getPeriod);

  const formRef = useRef();

  const [formElement, setFormElement] = useState(null);
  const [isInvalid, setIsInvalid] = useState(false);
  const [currentPhone, setPhone] = useState('');

  const handleFormSubmit = useCallback((evt) => {
    evt.preventDefault();
    const name = formElement.querySelector('#request-user').value;
    const phone = formElement.querySelector('#request-phone').value;
    const email = formElement.querySelector('#request-email').value;
    localStorage.setItem('name', name);
    localStorage.setItem('phone', phone);
    localStorage.setItem('email', email);
  }, [formElement]);

  const handleFormInvalid = useCallback(() => {
    setIsInvalid(true);
    window.setTimeout(() => setIsInvalid(false), 1000);
  }, []);

  const fields = [
    {
      id: 'number',
      text: 'Номер заявки',
      value: formatRequestNumber(requestNumber),
    },
    {
      id: 'purpose',
      text: 'Цель кредита',
      value: typeToTitle[creditType],
    },
    {
      id: 'price',
      text: typeToLabel[creditType],
      value: formatMoneyString(totalPrice),
    },
    {
      id: 'initial-payment',
      text: 'Первоначальный взнос',
      value: formatMoneyString(initialPayment),
    },
    {
      id: 'period',
      text: 'Срок кредитования',
      value: `${period} ${getPeriodLabel(period)}`,
    },
  ];

  useEffect(() => {
    if (formRef.current && formElement === null) {
      const element = formRef.current;
      const inputName = element.querySelector('#request-user');
      const inputEmail = element.querySelector('#request-email');
      inputName.focus();
      if (localStorage) {
        inputName.value = localStorage.getItem('name');
        inputEmail.value = localStorage.getItem('email');
        setPhone(localStorage.getItem('phone'));
      }
      setFormElement(element);
    }
  }, [formElement]);

  return (
    <section className={getClassName('request-form', isInvalid && 'request-form--shake')}>
      <h3>Шаг 3. Оформление заявки</h3>
      <form
        ref={formRef}
        action="#"
        method="post"
        id="request-form"
        onSubmit={handleFormSubmit}
        onInvalid={handleFormInvalid}
      >
        {fields.map(({id, text, value}) => (
          <div key={id} className="request-form__item">
            <label htmlFor={`request-${id}`}>{text}</label>
            <input type="text" id={`request-${id}`} name={`request-${id}`} value={value} readOnly tabIndex="-1"/>
          </div>
        ))}
        <div className="request-form__wrapper">
          <div className="request-form__field request-form__field--user">
            <label htmlFor="request-user" className="visually-hidden">ФИО</label>
            <input type="text" name="request-user" id="request-user" placeholder="ФИО" required/>
          </div>
          <div className="request-form__field request-form__field--contact">
            <label htmlFor="request-phone" className="visually-hidden">Телефон</label>
            <NumberFormat
              id="request-phone"
              name="request-phone"
              format="+#(###) ###-##-##"
              mask="_"
              type="tel"
              pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
              placeholder="Телефон"
              value={currentPhone}
              onValueChange={({formattedValue}) => setPhone(formattedValue)}
              required
            />
          </div>
          <div className="request-form__field request-form__field--contact">
            <label htmlFor="request-email" className="visually-hidden">E-mail</label>
            <input type="email" name="request-email" id="request-email" placeholder="E-mail" required/>
          </div>
          <button className="request-form__button button" type="submit">Отправить</button>
        </div>
      </form>
    </section>
  );
}

export default RequestForm;
