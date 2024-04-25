// src/App.tsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import VideoPlayer from './components/VideoPlayer';
import './App.css'; 

function App() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const videoURL = useSelector((state: RootState) => state.video.url);

  return (
    <div className="app-container">
      <h1>Streaming Live</h1>
      {/* <VideoPlayer src={videoURL} controls={true} isFullScreen={isFullScreen} /> */}
      <VideoPlayer src={videoURL} controls={true}  />

      <button onClick={() => setIsFullScreen(!isFullScreen)}>
        {isFullScreen ? 'Riduci' : 'Ingrandisci'}
      </button>
    </div>
  );
}

export default App;
