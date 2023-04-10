import { configureStore } from '@reduxjs/toolkit';
import dragonReducer from './dragon/dragonSlice';

const store = configureStore({
  reducer: {
    Dragon: dragonReducer,
  },
});

export default store;
