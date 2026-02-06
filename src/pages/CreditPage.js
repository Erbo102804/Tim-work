import React from 'react';
import '../styles/About.css';

function CreditPage() {
  const programs = [
    {
      icon: '\u{1F4B0}',
      title: 'Стандарт',
      text: 'Ставка от 4.9% годовых, первый взнос от 20%, срок до 7 лет',
    },
    {
      icon: '\u{1F31F}',
      title: 'Без первого взноса',
      text: 'Специальная программа без первоначального взноса на срок до 5 лет',
    },
    {
      icon: '\u{1F4C8}',
      title: 'Лизинг',
      text: 'Лизинг для физических и юридических лиц на выгодных условиях',
    },
    {
      icon: '\u{1F91D}',
      title: 'Рассрочка',
      text: 'Беспроцентная рассрочка на 12 месяцев от наших партнёрских банков',
    },
  ];

  return (
    <section className="about">
      <div className="about__container">
        <h2 className="about__title">Кредитные программы</h2>
        <p className="about__subtitle">
          Подберём лучшие условия финансирования для вашего автомобиля
        </p>

        <div className="about__features">
          {programs.map((program, index) => (
            <div key={index} className="about__feature">
              <div className="about__feature-icon">{program.icon}</div>
              <h3 className="about__feature-title">{program.title}</h3>
              <p className="about__feature-text">{program.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CreditPage;
