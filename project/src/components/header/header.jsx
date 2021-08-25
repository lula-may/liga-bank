import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';
import Logo from '../logo/logo';
import {getClassName} from '../../utils';
import {AppRoute, HEADER_LINKS, Viewport} from '../../const';
import { getViewport } from '../../store/page/selectors';
const ESC_KEY = 'Escape';

function Header({currentPage}) {
  const viewportType = useSelector(getViewport);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = viewportType === Viewport.MOBILE;

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
          disabled={isMenuOpen}
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
              {HEADER_LINKS.map(({link, title}) => (
                <li key={link} className="main-nav__item">
                  {(currentPage.title === title)
                    ? <span className="main-nav__link">{title}</span>
                    : <Link to={link} className="main-nav__link">{title}</Link>}
                </li>
              ))}
            </ul>
          </nav>
          <ul className="main-header__user-nav user-nav">
            <li className="user-nav__item">
              <Link to={AppRoute.LOGIN} className="user-nav__link" aria-label="Войти в Интернет-банк">
                <svg className="user-nav__icon" width="20" height="22"><use xlinkHref="#login"></use></svg>
                <span className="user-nav__label">Войти в Интернет-банк</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>

  );
}

Header.propTypes = {
  currentPage:  PropTypes.shape({
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Header;
