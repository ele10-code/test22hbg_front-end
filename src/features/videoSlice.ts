import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store'; 

interface VideoState {
  url: string;
  volume: number;
  progress: number;
}

const initialState: VideoState = {
  url: 'https://youtu.be/P9yIoSpWWNE?si=dZoGyjUEUXWv7IKg',
  volume: 1,
  progress: 0
};

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setVideoUrl: (state, action: PayloadAction<string>) => {
      state.url = action.payload;
    },
    setVideoVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    setVideoProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
    }
  }
});
export const selectVideoUrl = (state: RootState) => state.video.url;
export const { setVideoUrl, setVideoVolume, setVideoProgress } = videoSlice.actions;

export default videoSlice.reducer; 

