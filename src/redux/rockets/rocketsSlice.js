import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
  isLoading: true,
  error: undefined,
};

export const getRockects = createAsyncThunk('rockets/getRockects',
  async (thunkAPI) => {
    try {
      const response = await axios(url);
      const rocketsArray = response.data.map((rocket) => ({
        id: rocket.id,
        name: rocket.rocket_name,
        description: rocket.description,
        flickr_images: rocket.flickr_images[1],
        reserved: false,
      }));
      return rocketsArray;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reservedRocket: (state, { payload }) => {
      const newState = state.rockets.map((rocket) => {
        if (rocket.id !== payload) { return rocket; }
        return { ...rocket, reserved: !rocket.reserved };
      });
      return { ...state, rockets: newState };
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(getRockects.pending, (state) => ({
        ...state,
      }))
      .addCase(getRockects.fulfilled, (state, action) => ({
        ...state,
        rockets: action.payload,
      }))
      .addCase(getRockects.rejected, (state) => ({
        ...state,
      }));
  },
});

export const { reservedRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
