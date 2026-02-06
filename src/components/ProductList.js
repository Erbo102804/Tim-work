import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, toggleStock } from '../store/productsSlice';

function ProductList() {
  const dispatch = useDispatch();
  const { items, filter } = useSelector((state) => state.products);

  const categories = ['all', ...new Set(items.map((item) => item.category))];

  const filteredItems =
    filter === 'all' ? items : items.filter((item) => item.category === filter);

  return (
    <div style={{ maxWidth: 700, margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 20 }}>Каталог товаров</h1>

      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 24 }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => dispatch(setFilter(cat))}
            style={{
              padding: '8px 16px',
              border: 'none',
              borderRadius: 6,
              cursor: 'pointer',
              backgroundColor: filter === cat ? '#4a90d9' : '#e0e0e0',
              color: filter === cat ? '#fff' : '#333',
              fontWeight: filter === cat ? 'bold' : 'normal',
            }}
          >
            {cat === 'all' ? 'Все' : cat}
          </button>
        ))}
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#4a90d9', color: '#fff' }}>
            <th style={{ padding: 12, textAlign: 'left' }}>Товар</th>
            <th style={{ padding: 12, textAlign: 'left' }}>Категория</th>
            <th style={{ padding: 12, textAlign: 'right' }}>Цена</th>
            <th style={{ padding: 12, textAlign: 'center' }}>Наличие</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((product) => (
            <tr
              key={product.id}
              style={{
                borderBottom: '1px solid #ddd',
                backgroundColor: product.inStock ? '#fff' : '#f9f9f9',
              }}
            >
              <td style={{ padding: 12 }}>{product.name}</td>
              <td style={{ padding: 12 }}>{product.category}</td>
              <td style={{ padding: 12, textAlign: 'right' }}>
                {product.price.toLocaleString('ru-RU')} ₽
              </td>
              <td style={{ padding: 12, textAlign: 'center' }}>
                <button
                  onClick={() => dispatch(toggleStock(product.id))}
                  style={{
                    padding: '4px 12px',
                    border: 'none',
                    borderRadius: 4,
                    cursor: 'pointer',
                    backgroundColor: product.inStock ? '#4caf50' : '#f44336',
                    color: '#fff',
                  }}
                >
                  {product.inStock ? 'В наличии' : 'Нет в наличии'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ textAlign: 'center', marginTop: 16, color: '#888' }}>
        Показано товаров: {filteredItems.length} из {items.length}
      </p>
    </div>
  );
}

export default ProductList;
