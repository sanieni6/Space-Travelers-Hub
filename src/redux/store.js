import { configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rocketsSlice';
import missionReducer from './mission/missionSlice';
import Dragon from './dragon/dragon';

const store = configureStore({
  reducer: {

    rockets: rocketsSlice,

    mission: missionReducer,
    Dragon,

  },
});

export default store;
