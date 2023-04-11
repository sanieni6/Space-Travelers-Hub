import { createSlice } from '@reduxjs/toolkit';
import planet from '../../images/planet.png';

const initialState = {
  dragons: [
    {
      id: 1,
      name: 'Dragon 1',
      type: 'capsule',
      description: 'Dragon 1 description',
      flickr_images: planet,
    },
    {
      id: 2,
      name: 'Dragon 2',
      type: 'capsule',
      description: 'Dragon 2 description',
      flickr_images: planet,
    },
    {
      id: 3,
      name: 'Dragon 3',
      type: 'capsule',
      description: 'Dragon 3 description',
      flickr_images: planet,
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
