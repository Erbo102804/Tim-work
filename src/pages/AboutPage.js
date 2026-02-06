import React from 'react';
import '../styles/About.css';

function AboutPage() {
  const features = [
    {
      icon: '\u{1F3C6}',
      title: 'Официальный дилер',
      text: 'Авторизованный центр продаж BMW и Mercedes-Benz с 2010 года',
    },
    {
      icon: '\u{1F6E1}\uFE0F',
      title: 'Гарантия качества',
      text: 'Каждый автомобиль проходит проверку по 150+ пунктам перед продажей',
    },
    {
      icon: '\u{1F4B3}',
      title: 'Кредит и лизинг',
      text: 'Выгодные программы финансирования от партнёрских банков',
    },
    {
      icon: '\u{1F527}',
      title: 'Сервис и запчасти',
      text: 'Полное обслуживание с использованием оригинальных комплектующих',
    },
  ];

  return (
    <section className="about">
      <div className="about__container">
        <h2 className="about__title">О компании</h2>
        <p className="about__subtitle">
          Более 14 лет мы помогаем клиентам найти автомобиль мечты
        </p>

        <div className="about__features">
          {features.map((feature, index) => (
            <div key={index} className="about__feature">
              <div className="about__feature-icon">{feature.icon}</div>
              <h3 className="about__feature-title">{feature.title}</h3>
              <p className="about__feature-text">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
