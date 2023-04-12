import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rocketsReducer from './rockets/rocketsSlice';
import missionReducer from './mission/missionSlice';
import dragonReducer from './dragon/dragonSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    mission: missionReducer,
    dragon: dragonReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
