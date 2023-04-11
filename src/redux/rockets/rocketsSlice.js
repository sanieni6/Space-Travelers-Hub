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
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
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

export default rocketsSlice.reducer;
