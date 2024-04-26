export const setVideoUrl = (url: string) => ({
  type: 'SET_VIDEO_URL',
  payload: url
});

export const setVideoVolume = (volume: number) => ({
  type: 'SET_VIDEO_VOLUME',
  payload: volume
});

export const setVideoProgress = (progress: number) => ({
  type: 'SET_VIDEO_PROGRESS',
  payload: progress
});
