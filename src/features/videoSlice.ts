// src/features/videoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VideoState {
  url: string;
}

const initialState: VideoState = {
  url: '', // URL iniziale vuoto o un valore predefinito
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setVideoURL(state, action: PayloadAction<string>) {
      state.url = action.payload;
    },
  },
});

export const { setVideoURL } = videoSlice.actions;
export default videoSlice.reducer;
