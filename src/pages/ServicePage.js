import React from 'react';
import '../styles/About.css';

function ServicePage() {
  const services = [
    {
      icon: '\u{1F527}',
      title: 'ТО и ремонт',
      text: 'Плановое техобслуживание и ремонт любой сложности для BMW и Mercedes-Benz',
    },
    {
      icon: '\u{1F3A8}',
      title: 'Кузовные работы',
      text: 'Покраска, рихтовка и полировка с соблюдением заводских стандартов',
    },
    {
      icon: '\u{2699}\uFE0F',
      title: 'Диагностика',
      text: 'Компьютерная диагностика на оригинальном оборудовании производителя',
    },
    {
      icon: '\u{1F504}',
      title: 'Трейд-ин',
      text: 'Обменяйте ваш автомобиль на новый с доплатой на выгодных условиях',
    },
  ];

  return (
    <section className="about">
      <div className="about__container">
        <h2 className="about__title">Сервис</h2>
        <p className="about__subtitle">
          Профессиональное обслуживание вашего автомобиля
        </p>

        <div className="about__features">
          {services.map((service, index) => (
            <div key={index} className="about__feature">
              <div className="about__feature-icon">{service.icon}</div>
              <h3 className="about__feature-title">{service.title}</h3>
              <p className="about__feature-text">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicePage;
