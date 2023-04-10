import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './mission/missionSlice';
import Dragon from './dragon/dragon';


const store = configureStore({
  reducer: {
    mission: missionReducer,
    Dragon,
  },
});

export default store;
