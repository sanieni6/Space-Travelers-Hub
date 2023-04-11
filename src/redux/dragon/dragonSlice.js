import { createSlice } from '@reduxjs/toolkit';
import planet from '../../images/planet.png';

const initialState = {
  dragons: [
    {
      id: 1,
      dragon_name: "Dragon 1",
      description: "Dragon 1 description",
      flickr_images: planet,
    },
    {
      id: 2,
      dragon_name: "Dragon 1",
      description: "Dragon 1 description",
      flickr_images: planet,
    },
    {
      id: 3,
      dragon_name: "Dragon 1",
      dragon_type: "capsule",
      description: "Dragon 1 description",
      flickr_images: planet,
    },
  ],
  isLoading: true,
  error: undefined,
};

const dragonSlice = createSlice({
  name: 'dragon',
  initialState,
  extraReducers: () => {},
});

export default dragonSlice.reducer;
