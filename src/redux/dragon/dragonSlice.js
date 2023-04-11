import { createSlice } from '@reduxjs/toolkit';
import rocket from '../../images/rocket.jpg';

const initialState = {
  dragons: [
    {
      id: 1,
      name: 'Dragon 1',
      type: 'capsule',
      description: 'Dragon 1 description',
      image: rocket,
    },
    {
      id: 2,
      name: 'Dragon 2',
      type: 'capsule',
      description: 'Dragon 2 description',
      image: rocket,
    },
    {
      id: 3,
      name: 'Dragon 3',
      type: 'capsule',
      description: 'Dragon 3 description',
      image: rocket,
    },
  ],
  isLoading: true,
  error: undefined,
};

const dragonSlice = createSlice({
  name: 'dragon',
  initialState,
  reducers: {},
});

export default dragonSlice.reducer;
