import React, { useRef, useState, FC } from 'react';

interface MediaPlayerProps {
  src: string;
}

const MediaPlayer: FC<MediaPlayerProps> = ({ src }) => {
  const mediaRef = useRef<HTMLVideoElement>(null);
const [progress, setProgress] = useState(0); // stato per la barra di avanzamento

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
const volume = parseFloat(event.target.value);
if (mediaRef.current) {
mediaRef.current.volume = volume;
}
};

const handleTimeUpdate = () => {
if (mediaRef.current) {
const progressValue = (mediaRef.current.currentTime / mediaRef.current.duration) * 100;
setProgress(progressValue);
}
};

const handleSeek = (event: React.ChangeEvent<HTMLInputElement>) => {
const seekTime = (parseFloat(event.target.value) / 100) * (mediaRef.current?.duration || 0);
if (mediaRef.current) {
mediaRef.current.currentTime = seekTime;
}
};

return (
<div>
<video
ref={mediaRef}
src={src}
width="100%"
onTimeUpdate={handleTimeUpdate}
controls // Questo mostra i controlli nativi del browser
>
Il tuo browser non supporta il tag video.
</video>
<div>
<button onClick={handlePlay}>Play</button>
<button onClick={handlePause}>Pause</button>
<input 
       type="range" 
       min="0" 
       max="1" 
       step="0.01" 
       value={mediaRef.current?.volume} 
       onChange={handleVolumeChange} 
       aria-label="Volume"
     />
<input 
       type="range" 
       min="0" 
       max="100" 
       step="0.1" 
       value={progress} 
       onChange={handleSeek} 
       aria-label="Seek"
     />
</div>
</div>
);
};

export default MediaPlayer;

