import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  dragons: [],
  isLoading: true,
  error: undefined,
};

export const getDragons = createAsyncThunk(
  'dragon/getDragons',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://api.spacexdata.com/v3/dragons');
      const dragonsArray = response.data.map((dragon) => ({
        id: dragon.id,
        name: dragon.name,
        type: dragon.type,
        description: dragon.description,
        flickr_images: dragon.flickr_images,
        reserved: false,
      }));
      return dragonsArray;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const dragonSlice = createSlice({
  name: 'dragon',
  initialState,
  reducers: {
    reservedDragon: (state, { payload }) => {
      const newState = state.dragons.map((dragon) => {
        if (dragon.id !== payload) {
          return dragon;
        }
        return { ...dragon, reserved: !dragon.reserved };
      });
      return { ...state, dragons: newState };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getDragons.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getDragons.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        dragons: action.payload,
      }))
      .addCase(getDragons.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export const { reservedDragon } = dragonSlice.actions;

export default dragonSlice.reducer;
