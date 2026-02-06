import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 1, name: 'Ноутбук', price: 75000, category: 'Электроника', inStock: true },
    { id: 2, name: 'Наушники', price: 3500, category: 'Электроника', inStock: true },
    { id: 3, name: 'Кроссовки', price: 8900, category: 'Обувь', inStock: false },
    { id: 4, name: 'Рюкзак', price: 4200, category: 'Аксессуары', inStock: true },
    { id: 5, name: 'Книга "JavaScript"', price: 1200, category: 'Книги', inStock: true },
    { id: 6, name: 'Клавиатура', price: 5600, category: 'Электроника', inStock: false },
  ],
  filter: 'all',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    toggleStock(state, action) {
      const product = state.items.find((item) => item.id === action.payload);
      if (product) {
        product.inStock = !product.inStock;
      }
    },
  },
});

export const { setFilter, toggleStock } = productsSlice.actions;
export default productsSlice.reducer;
