// src/App.tsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import VideoPlayer from './components/VideoPlayer';
import SearchComponent from './components/SearchComponent';
import './App.css'; 

function App() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const videoURL = useSelector((state: RootState) => state.video.url);

  const handleFullscreenToggle = () => {
    setIsFullScreen(!isFullScreen);
    if (!isFullScreen) {
      document.documentElement.requestFullscreen(); // Set full screen for the whole document
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="app-container">
      <h1>Streaming Live</h1>
      <VideoPlayer src={videoURL} controls={true} />

      <button onClick={handleFullscreenToggle}>
        {isFullScreen ? 'Riduci' : 'Ingrandisci'}
      </button>
      
      {/* includiamo il SearchComponent, in modo che venga reso */}
      <SearchComponent />

    </div>
  );
}

export default App;
