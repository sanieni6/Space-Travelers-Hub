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
  reducers: {
    updateState: (state, action) => {
      const newMission = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
      return { ...state, missions: newMission };
    },
  },
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

export const { updateState } = missionSlice.actions;
export default missionSlice.reducer;
