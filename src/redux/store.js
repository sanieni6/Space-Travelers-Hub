import { configureStore } from '@reduxjs/toolkit';
import Dragon from './dragon/dragon';

const store = configureStore({
  reducer: {
    Dragon,
  },
});

export default store;
