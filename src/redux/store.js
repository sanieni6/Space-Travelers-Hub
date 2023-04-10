import { configureStore } from '@reduxjs/toolkit';
import dragon from './dragon/dragon';

const store = configureStore({
  reducer: {
    dragon,
  },
});

export default store;
