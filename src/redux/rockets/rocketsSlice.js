import { createSlice } from '@reduxjs/toolkit';
import rocket from '../../images/rocket.jpg';

const initialState = {
  rockets: [
    {
      id: 1,
      rocket_name: 'legacy',
      description: 'empty',
      flickr_images: rocket,
    },
    {
      id: 2,
      rocket_name: 'legacy',
      description: 'empty',
      flickr_images: rocket,
    },
    {
      id: 3,
      rocket_name: 'legacy',
      description: 'empty',
      flickr_images: rocket,
    },
  ],
  isLoading: true,
  error: undefined,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: () => {
  },
});

export default rocketsSlice.reducer;
