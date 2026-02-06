import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <NavLink to="/" className="header__logo">
          <div className="header__logo-icon">AM</div>
          <div className="header__logo-text">
            <span className="header__logo-title">AutoMarket</span>
            <span className="header__logo-subtitle">BMW &amp; Mercedes-Benz</span>
          </div>
        </NavLink>

        <div className="header__contacts">
          <a href="tel:+78001234567" className="header__phone">
            +7 (800) 123-45-67
          </a>
          <button className="header__cta">Обратный звонок</button>
        </div>

        <button className="header__burger" aria-label="Меню">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              to="/"
              className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
              end
            >
              Главная
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/catalog"
              className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
            >
              Каталог
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/about"
              className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
            >
              О компании
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/services"
              className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
            >
              Сервис
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/credit"
              className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
            >
              Кредит
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/contacts"
              className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
            >
              Контакты
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
