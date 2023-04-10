import { configureStore } from '@reduxjs/toolkit';
import dragon from './dragon/Dragon';

const store = configureStore({
  reducer: {
    dragon,
  },
});

export default store;
