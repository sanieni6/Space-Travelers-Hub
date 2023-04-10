/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rocketsSlice';

export const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
  },
});
