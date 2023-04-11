import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  dragons: [],
  isLoading: true,
  error: undefined,
};

export const getDragons = createAsyncThunk('dragon/getDragons', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/dragons');
  return response.data;
});

const dragonSlice = createSlice({
  name: 'dragon',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getDragons.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getDragons.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        dragons: action.payload,
      }));
  },
});

export default dragonSlice.reducer;