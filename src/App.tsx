// src/App.tsx
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';
import VideoPlayer from './components/VideoPlayer';
import SearchComponent from './components/SearchComponent';
import './App.css'; 

// Definiamo il componente App che renderizza il componente VideoPlayer e il componente SearchComponent
function App() {
  const videoPlayerRef = useRef<HTMLVideoElement>(null); // Creo un riferimento al tag video per accedere al suo stato e ai suoi metodi
  const videoURL = useSelector((state: RootState) => state.video.url); // Uso del selector per ottenere l'URL del video dallo stato globale

  const handleFullscreenToggle = () => { // Funzione per attivare/disattivare la modalità a schermo intero
    const videoElement = videoPlayerRef.current; // Ottieni il riferimento al tag video

    if (videoElement) { // Controlla se il tag video esiste
      if (!document.fullscreenElement) { // Controlla se il documento è in modalità a schermo intero
        videoElement.requestFullscreen().catch(err => { // Richiedi la modalità a schermo intero
          console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`); // Gestisci eventuali errori
        });
      } else {
        if (document.exitFullscreen) { // Controlla se è possibile uscire dalla modalità a schermo intero
          document.exitFullscreen(); // Esci dalla modalità a schermo intero
        }
      }
    }
  };

  

  const videoUrl = 'https://www.youtube.com/watch?v=P9yIoSpWWNE';  // URL completo del video YouTube

  return (
    <div className="App">
      <div className="app-container">
        <div className="video-container">
           {/* ... Player Video ... */}
          <h1>Streaming Live</h1>
          <VideoPlayer url={videoUrl} />
        </div>

      { /* includiamo il SearchComponent, in modo che venga reso */}
      <div className="search-box">
        <h2 className="search-box-title">Cerca Radio</h2>
          <SearchComponent />
        </div>
      </div>
    </div>
  
  );
}

export default App;
