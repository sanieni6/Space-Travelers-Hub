import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rocketsSlice';
import missionReducer from './mission/missionSlice';
import dragonReducer from './dragon/dragonSlice'; // Update to import dragonReducer instead of dragonSlice

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    mission: missionReducer,
    dragon: dragonReducer, // Update to include dragonReducer
  },
});

export default store;
