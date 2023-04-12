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
      const missionsArray = response.data.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
        reserved: mission.reserved,
      }));
      return missionsArray;
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
        if (mission.id === action.payload) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
      return { ...state, missions: newMission };
    },
    leaveMission: (state, action) => {
      const leaveMission = state.missions.map((mission) => {
        if (mission.id === action.payload) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
      return { ...state, missions: leaveMission };
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

export const { updateState, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
