import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {
      id: 1,
      brand: 'BMW',
      model: 'X5 xDrive40i',
      year: 2024,
      price: 8_500_000,
      engine: '3.0L Turbo',
      hp: 340,
      color: 'Чёрный сапфир',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop',
      inStock: true,
    },
    {
      id: 2,
      brand: 'Mercedes-Benz',
      model: 'E 300 AMG Line',
      year: 2024,
      price: 7_200_000,
      engine: '2.0L Turbo',
      hp: 258,
      color: 'Обсидиан чёрный',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=400&fit=crop',
      inStock: true,
    },
    {
      id: 3,
      brand: 'BMW',
      model: 'M4 Competition',
      year: 2025,
      price: 11_900_000,
      engine: '3.0L Twin-Turbo',
      hp: 510,
      color: 'Серый Бруклин',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&h=400&fit=crop',
      inStock: false,
    },
    {
      id: 4,
      brand: 'Mercedes-Benz',
      model: 'GLE 450 4MATIC',
      year: 2024,
      price: 9_800_000,
      engine: '3.0L Turbo + EQ Boost',
      hp: 367,
      color: 'Белый бриллиант',
      image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&h=400&fit=crop',
      inStock: true,
    },
    {
      id: 5,
      brand: 'BMW',
      model: '7 Series 740i',
      year: 2025,
      price: 13_500_000,
      engine: '3.0L Twin-Turbo',
      hp: 380,
      color: 'Минерал белый',
      image: 'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=600&h=400&fit=crop',
      inStock: true,
    },
    {
      id: 6,
      brand: 'Mercedes-Benz',
      model: 'S 500 4MATIC',
      year: 2024,
      price: 15_200_000,
      engine: '3.0L Turbo + EQ Boost',
      hp: 435,
      color: 'Серый селенит',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&h=400&fit=crop',
      inStock: false,
    },
  ],
  filter: 'all',
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    toggleStock(state, action) {
      const car = state.items.find((item) => item.id === action.payload);
      if (car) {
        car.inStock = !car.inStock;
      }
    },
  },
});

export const { setFilter, toggleStock } = carsSlice.actions;
export default carsSlice.reducer;
