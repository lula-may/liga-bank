import React from 'react';
import { Link } from 'react-router-dom';
import FocusTrap from 'focus-trap-react';
import PropTypes from 'prop-types';
import './style.scss';

export default function LoginForm({onButtonClick}) {
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleMouseDown = () => {};

  return (
    <FocusTrap>
      <section className="login">
        <h3 className="visually-hidden">Вход в клиент-банк.</h3>
        <div className="login__logo">
          <img src="./img/logo-login.svg" width="150" height="27" alt="Клиент-банк Лига-банка" />
        </div>
        <button className="login__close button-close" onClick={onButtonClick} aria-label="Закрыть"></button>
        <form action="" method="post" id="login-form" onSubmit={handleFormSubmit}>
          <div className="login__field">
            <label htmlFor="login">Логин</label>
            <input type="text" id="login" name="login" required/>
          </div>
          <div className="login__field">
            <label htmlFor="password">Пароль</label>
            <input type="password" id="password" name="password" required/>
            <button
              className="login__toggle-password" type="button"
              aria-label="Показать пароль"
              onMouseDown={handleMouseDown}
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
