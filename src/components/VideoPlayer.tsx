// src/components/VideoPlayer.tsx
import React, { FC, useRef } from 'react';

// Definisco l'interfaccia delle proprietà del componente VideoPlayer
interface VideoPlayerProps {
  src: string;
  controls: boolean;
}
 // Definisco il componente VideoPlayer come una funzione di React che accetta le proprietà definite nell'interfaccia VideoPlayerProps
const VideoPlayer: FC<VideoPlayerProps> = ({ src, controls }) => {
  const videoRef = useRef<HTMLVideoElement>(null); // Creo un riferimento al tag video per accedere al suo stato e ai suoi metodi

  const handleFullScreen = () => { // Definisco una funzione per attivare la modalità a schermo intero
  const videoElement = videoRef.current; // Ottengo il riferimento al tag video
  if (videoElement && videoElement.requestFullscreen) { // Verifico se il browser supporta la modalità a schermo intero e attivo la modalità a schermo intero
    videoElement.requestFullscreen().catch(err => { // Gestisco eventuali errori durante l'attivazione della modalità a schermo intero
    console.error("Error attempting to enable full-screen mode: ${err.message} (${err.name})"); // Stampo un messaggio di errore nella console
  });
  }
  };

  return ( // Ritorno il codice JSX del componente VideoPlayer
  <>
   {/* Aggiungo il tag video con il riferimento al tag video e le proprietà src e controls */}
  <video ref={videoRef} src={src} controls={controls} style={{ width: '50%' }}>   {/*Aggiungo un pulsante per attivare la modalità a schermo intero */}
  Il tuo browser non supporta il tag video.
  </video>
  <button onClick={handleFullScreen}>Fullscreen</button> 
  </>
  );
};

export default VideoPlayer;


