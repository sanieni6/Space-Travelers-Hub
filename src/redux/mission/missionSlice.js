import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

const initialState = {
  missions: [],
  IsLoading: true,
};

export const missionList = createAsyncThunk('mission/missionList',
  async (thunkAPI) => {
    try {
      const response = await axios(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  extraReducers: (builder) => {
    builder
    // fetch missions from the API
      .addCase(missionList.pending, (state) => ({
        ...state,
      }))
      .addCase(missionList.fulfilled, (state, action) => ({
        ...state,
        missions: action.payload,
      }))
      .addCase(missionList.rejected, (state) => ({
        ...state,
      }));
  },
});

export default missionSlice.reducer;
