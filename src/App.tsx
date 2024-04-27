import React, { useRef, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import VideoPlayer from './components/VideoPlayer';
import SearchComponent from './components/SearchComponent';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import { AuthContext } from './context/AuthContext';
import './App.css';

function App() {
  const videoPlayerRef = useRef<HTMLVideoElement>(null);
  const videoURL = useSelector((state: RootState) => state.video.url);
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Benvenuto nell'App live-streaming audio e video</h1>
        <Routes>
          <Route path="/" element={!isLoggedIn() ? <RegistrationForm /> : <VideoPlayer url={videoURL} />} />
          <Route path="/login" element={< LoginForm/>} />
          <Route path="/video" element={
          <div className="video-page-container"> {/* Aggiunto un contenitore esterno */}
            <VideoPlayer url={videoURL} />
            <div className="search-box">
              <h2 className="search-box-title">Cerca Radio</h2>
              <SearchComponent />
            </div>
          </div>
        } />
 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
