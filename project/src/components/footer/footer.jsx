import React from 'react';

import Logo from '../logo/logo';
import './style.scss';

function Footer() {
  return (
    <footer className="page__footer main-footer">
      <div className="main-footer__wrapper">
        <div className="main-footer__column main-footer__column--left">
          <Logo className="main-footer__logo" />
          <div className="main-footer__item main-footer__item--info">
            <address className="main-footer__text">150015, г. Москва, ул. Московская, д. 32</address>
            <p className="main-footer__text">Генеральная лицензия Банка России №1050</p>
            <p className="main-footer__text">&copy; Лига Банк, 2019</p>
          </div>
          <div className="main-footer__item main-footer__item--nav">
            <ul className="footer-nav">
              <li className="footer-nav__item"><a href="#" className="footer-nav__link">Услуги</a></li>
              <li className="footer-nav__item"><a href="#" className="footer-nav__link">Рассчитать кредит</a></li>
              <li className="footer-nav__item"><a href="#" className="footer-nav__link">Контакты</a></li>
              <li className="footer-nav__item"><a href="#" className="footer-nav__link">Задать вопрос</a></li>
            </ul>
          </div>
        </div>

        <div className="main-footer__column main-footer__column--right">
          <div className="main-footer__item contact contact--mobile">
            <a className="contact__link contact__link--short" href="tel:0904">
              <svg className="contact__icon" width="10" height="16">
                <use xlinkHref="#phone"></use>
              </svg>
              <span>*0904</span>
            </a>
            <p className="contact__text">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
          </div>
          <div className="main-footer__item contact contact--phone">
            <a className="contact__link contact__link--long" href="tel:+78001112233">
              <svg className="contact__icon" width="16" height="16">
                <use xlinkHref="#telephone"></use>
              </svg>
              <span>8 800 111 22 33</span>
            </a>
            <p className="contact__text">Бесплатный для всех городов России</p>
          </div>
          <div className="main-footer__item main-footer__item--social social">
            <ul className="social__list">
              <li className="social__item">
                <a href="#" className="social__link" aria-label="Лига Банк в фейсбук">
                  <svg className="icon" width="9" height="16"><use xlinkHref="#fb"></use></svg>
                </a>
              </li>
              <li className="social__item">
                <a href="#" className="social__link" aria-label="Лига Банк в Инстаграм">
                  <svg className="icon" width="16" height="16"><use xlinkHref="#insta"></use></svg>
                </a>
              </li>
              <li className="social__item">
                <a href="#" className="social__link" aria-label="Лига Банк в Твиттере">
                  <svg className="icon" width="16" height="13"><use xlinkHref="#twitter"></use></svg>
                </a>
              </li>
              <li className="social__item">
                <a href="#" className="social__link" aria-label="Лига Банк на Ютюб">
                  <svg className="icon" width="16" height="13"><use xlinkHref="#youtube"></use></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

  );
}

export default Footer;
