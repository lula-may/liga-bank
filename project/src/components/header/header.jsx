import React, {useCallback, useEffect, useMemo, useState} from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Logo from '../logo/logo';
import {getClassName} from '../../utils';

const ESC_KEY = 'Escape';

function Header({isMobile}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setIsMenuOpen(false), [setIsMenuOpen]);

  const openMenu = useCallback(() => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
    }
  }, [isMenuOpen, setIsMenuOpen]);

  const handleEscKeyDown = useCallback((evt) => {
    if (evt.key === ESC_KEY) {
      closeMenu();
    }
  }, [closeMenu]);

  useEffect(() => (
    isMenuOpen
      ? document.addEventListener('keydown', handleEscKeyDown)
      : document.removeEventListener('keydown', handleEscKeyDown)
  ), [handleEscKeyDown, isMenuOpen]);

  const headerClassName = useMemo(() => getClassName('main-header', isMenuOpen ? 'main-header--open' : 'main-header--close'), [isMenuOpen]);

  return (
    <header className={headerClassName}>
      <div className="main-header__wrapper">
        <Logo className="main-header__logo" isMobile={isMobile} />
        <button
          className="main-header__button main-header__button--open"
          onClick={openMenu}
        >Открыть меню
        </button>
        <button
          className="main-header__button main-header__button--close"
          onClick={closeMenu}
        >Закрыть меню
        </button>

        <div className="main-header__container">
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
              <a href="#" className="user-nav__link" aria-label="Войти в Интернет-банк">
                <svg className="user-nav__icon" width="20" height="22"><use xlinkHref="#login"></use></svg>
                <span className="user-nav__label">Войти в Интернет-банк</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>

  );
}

Header.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Header;
