// src/App.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import VideoPlayer from './components/VideoPlayer';

function App() {
  const videoURL = useSelector((state: RootState) => state.video.url);

  return (
    <div>
      <h1>Streaming Live</h1>
      <VideoPlayer src={videoURL} controls={true} />
    </div>
  );
}

export default App;
