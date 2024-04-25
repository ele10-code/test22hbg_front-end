// src/features/videoSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  url: ''
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setVideoURL(state, action) {
      state.url = action.payload;
    },
  },
});

export const { setVideoURL } = videoSlice.actions;
export default videoSlice.reducer;
