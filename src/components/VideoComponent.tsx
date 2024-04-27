// src/components/VideoComponent.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { selectVideoUrl  } from '../features/videoSlice'; // Importazione del selettore
import '../App.css';


const VideoComponent = () => {
  const videoUrl = useSelector(selectVideoUrl); // Uso del selector

  return (
    <div>
      <video src={videoUrl} controls>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;
