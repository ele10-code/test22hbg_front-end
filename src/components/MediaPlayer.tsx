import React, { useRef, FC } from 'react';

interface MediaPlayerProps {
  src: string;
}

const MediaPlayer: FC<MediaPlayerProps> = ({ src }) => {
  const mediaRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (mediaRef.current) {
      mediaRef.current.play();
    }
  };

  const handlePause = () => {
    if (mediaRef.current) {
      mediaRef.current.pause();
    }
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const volume = event.target.value;
    if (mediaRef.current) {
      mediaRef.current.volume = parseFloat(volume);
    }
  };

  // Ricorda di rendere il ritorno di 'return' un'unica espressione
  // con parentesi tonde se si estende su più righe.
  return (
    <div>
      <video ref={mediaRef} src={src} width="100%" controls>
        Il tuo browser non supporta il tag video.
      </video>
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <input type="range" min="0" max="1" step="0.01" onChange={handleVolumeChange} />
      </div>
    </div>
  );
};

export default MediaPlayer;
