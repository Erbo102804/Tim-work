import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__badge">Официальный дилер</div>
        <h1 className="hero__title">
          Премиальные автомобили <span>BMW</span> и <span>Mercedes-Benz</span>
        </h1>
        <p className="hero__text">
          Новые и проверенные автомобили с гарантией. Трейд-ин, кредит, лизинг.
          Полное сервисное обслуживание и оригинальные запчасти.
        </p>
        <div className="hero__buttons">
          <Link to="/catalog" className="hero__btn hero__btn--primary">
            Смотреть каталог
          </Link>
          <Link to="/about" className="hero__btn hero__btn--outline">
            О компании
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
