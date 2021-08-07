import React from 'react';
import './style.scss';

import Logo from '../logo/logo';

function Header () {
  return (
    <header className="main-header main-header--close">
      <div className="main-header__wrapper">
        <Logo className="main-header__logo" />
        <button className="main-header__button main-header__button--open">Открыть меню</button>
        <button className="main-header__button main-header__button--close">Закрыть меню</button>

        <nav className="main-header__nav main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <a href="#" className="main-nav__link">Услуги</a>
            </li>
            <li className="main-nav__item">
              <a href="#" className="main-nav__link">Рассчитать кредит</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link main-nav__link">Конвертер валют</a>
            </li>
            <li className="main-nav__item">
              <a href="#" className="main-nav__link">Контакты</a>
            </li>
          </ul>
        </nav>
        <ul className="main-header__user-nav user-nav">
          <li className="user-nav__item">
            <a href="#" className="user-nav__link">
              <svg className="user-nav__icon" width="20" height="22"><use xlinkHref="#login"></use></svg>
              <span>Войти в Интернет-банк</span>
            </a>
          </li>
        </ul>
      </div>
    </header>

  );
}

export default Header;
