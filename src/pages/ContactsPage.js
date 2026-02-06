import React from 'react';
import '../styles/Contacts.css';

function ContactsPage() {
  const contacts = [
    { icon: '\u{1F4CD}', title: 'Адрес', value: 'г. Москва, ул. Автозаводская, 25' },
    { icon: '\u{1F4DE}', title: 'Телефон', value: '+7 (800) 123-45-67' },
    { icon: '\u{1F4E7}', title: 'Email', value: 'info@automarket-premium.ru' },
    { icon: '\u{1F552}', title: 'Режим работы', value: 'Пн-Вс: 9:00 — 21:00' },
  ];

  return (
    <section className="contacts">
      <div className="contacts__container">
        <h2 className="contacts__title">Контакты</h2>
        <p className="contacts__subtitle">Будем рады видеть вас в нашем автосалоне</p>

        <div className="contacts__grid">
          {contacts.map((item, index) => (
            <div key={index} className="contacts__card">
              <div className="contacts__card-icon">{item.icon}</div>
              <p className="contacts__card-title">{item.title}</p>
              <p className="contacts__card-value">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactsPage;
