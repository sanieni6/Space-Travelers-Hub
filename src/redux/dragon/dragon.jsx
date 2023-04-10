import { createSlice } from '@reduxjs/toolkit';

const dragonSlice = createSlice({
  name: 'dragon',
  initialState: {
    dragon: {},
  },
});

export default dragonSlice.reducer;
