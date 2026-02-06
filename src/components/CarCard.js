import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CarCard.css';

function CarCard({ car }) {
  const brandClass = car.brand === 'BMW' ? 'bmw' : 'mercedes';

  return (
    <div className="car-card">
      <div className="car-card__image-wrapper">
        <img
          className="car-card__image"
          src={car.image}
          alt={`${car.brand} ${car.model}`}
        />
        <span className={`car-card__badge car-card__badge--${brandClass}`}>
          {car.brand}
        </span>
        <span
          className={`car-card__stock ${
            car.inStock ? 'car-card__stock--available' : 'car-card__stock--unavailable'
          }`}
        >
          {car.inStock ? 'В наличии' : 'Под заказ'}
        </span>
      </div>

      <div className="car-card__body">
        <h3 className="car-card__title">
          {car.brand} {car.model}
        </h3>
        <p className="car-card__year">{car.year} год</p>

        <div className="car-card__specs">
          <div className="car-card__spec">
            <span className="car-card__spec-label">Двигатель</span>
            <span className="car-card__spec-value">{car.engine}</span>
          </div>
          <div className="car-card__spec">
            <span className="car-card__spec-label">Мощность</span>
            <span className="car-card__spec-value">{car.hp} л.с.</span>
          </div>
          <div className="car-card__spec">
            <span className="car-card__spec-label">Цвет</span>
            <span className="car-card__spec-value">{car.color}</span>
          </div>
        </div>

        <div className="car-card__footer">
          <div className="car-card__price">
            {car.price.toLocaleString('ru-RU')} <span>₽</span>
          </div>
          <Link to="/catalog" className="car-card__btn">
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
