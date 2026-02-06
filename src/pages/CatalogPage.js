import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../store/carsSlice';
import CarCard from '../components/CarCard';
import '../styles/CarCard.css';

function CatalogPage() {
  const dispatch = useDispatch();
  const { items, filter } = useSelector((state) => state.cars);

  const filters = ['all', 'BMW', 'Mercedes-Benz'];
  const filteredCars =
    filter === 'all' ? items : items.filter((car) => car.brand === filter);

  return (
    <section className="catalog">
      <h2 className="catalog__title">Каталог автомобилей</h2>
      <p className="catalog__subtitle">
        BMW и Mercedes-Benz в наличии и под заказ
      </p>

      <div className="catalog__filters">
        {filters.map((f) => (
          <button
            key={f}
            className={`catalog__filter-btn ${
              filter === f ? 'catalog__filter-btn--active' : ''
            }`}
            onClick={() => dispatch(setFilter(f))}
          >
            {f === 'all' ? 'Все марки' : f}
          </button>
        ))}
      </div>

      <div className="catalog__grid">
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
}

export default CatalogPage;
