import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rocketsSlice';
import missionReducer from './mission/missionSlice';
import dragonReducer from './dragon/dragonSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsSlice,
    mission: missionReducer,
    dragon: dragonReducer,

  },
});

export default store;
