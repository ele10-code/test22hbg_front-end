// src/components/VideoPlayer.tsx
import React, { FC, useRef } from 'react';

interface VideoPlayerProps {
  src: string;
  controls: boolean;
}

const VideoPlayer: FC<VideoPlayerProps> = ({ src, controls }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleFullScreen = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if ((videoElement as any).mozRequestFullScreen) { /* Firefox */
        (videoElement as any).mozRequestFullScreen();
      } else if ((videoElement as any).webkitRequestFullscreen) { /* Chrome, Safari e Opera */
        (videoElement as any).webkitRequestFullscreen();
      } else if ((videoElement as any).msRequestFullscreen) { /* IE/Edge */
        (videoElement as any).msRequestFullscreen();
      }
    }
  };

  return (
    <>
      <video ref={videoRef} src={src} controls={controls} style={{ width: '100%' }}>
        Il tuo browser non supporta il tag video.
      </video>
      <button onClick={handleFullScreen}>Fullscreen</button>
    </>
  );
};

export default VideoPlayer;
