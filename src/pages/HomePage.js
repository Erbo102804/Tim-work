import React from 'react';
import { useSelector } from 'react-redux';
import Hero from '../components/Hero';
import CarCard from '../components/CarCard';
import '../styles/CarCard.css';

function HomePage() {
  const cars = useSelector((state) => state.cars.items);
  const featured = cars.filter((car) => car.inStock).slice(0, 3);

  return (
    <>
      <Hero />
      <section className="catalog" style={{ background: '#fff' }}>
        <h2 className="catalog__title">Рекомендуемые</h2>
        <p className="catalog__subtitle">Лучшие предложения в наличии</p>
        <div className="catalog__grid">
          {featured.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;
