// src/components/VideoPlayer.tsx
import React from 'react';

interface VideoPlayerProps {
  src: string; // URL del flusso video
  controls: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, controls }) => {
  return (
    <video src={src} controls={controls} width="100%">
      Il tuo browser non supporta il tag video.
    </video>
  );
};

export default VideoPlayer;
