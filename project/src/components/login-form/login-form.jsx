import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import FocusTrap from 'focus-trap-react';
import PropTypes from 'prop-types';
import './style.scss';

import { StorageField } from '../../const';

const FieldType = {
  TEXT: 'text',
  PASSWORD: 'password',
};

function LoginForm({onButtonClick}) {
  let oldLogin = '';
  let oldPassword = '';

  if (localStorage) {
    oldLogin = localStorage.getItem(StorageField.LOGIN) ?? '';
    oldPassword = localStorage.getItem(StorageField.PASSWORD) ?? '';
  }

  const loginRef = useRef();
  const [loginInput, setLoginInput] = useState(null);
  const [password, setPassword] = useState(oldPassword);
  const [fieldType, setFieldType] = useState(FieldType.PASSWORD);

  useEffect(() => {
    if (loginRef.current && loginInput === null) {
      loginRef.current.focus();
      setLoginInput(loginRef.current);
    }
  }, [loginInput]);

  const handleEyeMouseDown = useCallback(() => setFieldType(FieldType.TEXT), []);
  const handleEyeMouseUp = useCallback(() => setFieldType(FieldType.PASSWORD), []);
  const handlePasswordChange = useCallback(({target}) => setPassword(target.value), []);

  const handleFormSubmit = useCallback((evt) => {
    evt.preventDefault();
    const login = loginInput.value;
    if (localStorage) {
      localStorage.setItem(StorageField.LOGIN, login);
      localStorage.setItem(StorageField.PASSWORD, password);
    }
    onButtonClick();
  }, [loginInput, onButtonClick, password]);

  return (
    <FocusTrap>
      <section className="login">
        <h3 className="visually-hidden">Вход в клиент-банк.</h3>
        <div className="login__logo">
          <img src="./img/logo-login.svg" width="150" height="27" alt="Клиент-банк Лига-банка" />
        </div>
        <button className="login__close button-close" onClick={onButtonClick} aria-label="Закрыть" />
        <form action="" method="post" id="login-form" onSubmit={handleFormSubmit}>
          <div className="login__field">
            <label htmlFor="login">Логин</label>
            <input
              ref={loginRef}
              type="text"
              id="login"
              name="login"
              defaultValue={oldLogin}
              required
            />
          </div>
          <div className="login__field">
            <label htmlFor="password">Пароль</label>
            <input
              type={fieldType}
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <button
              className="login__toggle-password" type="button"
              aria-label="Показать пароль"
              onMouseDown={handleEyeMouseDown}
              onMouseUp={handleEyeMouseUp}
            />
          </div>
          <Link className="login__link" to="/">Забыли пароль?</Link>
          <button className="login__submit button" type="submit">Войти</button>
        </form>
      </section>
    </FocusTrap>
  );
}

LoginForm.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
};

export default LoginForm;
