 // src/components/VideoPlayer.tsx
// Importazione delle librerie necessarie
import React, { FC } from 'react';
import ReactPlayer from 'react-player';
import './VideoPlayer.css'; // Importazione del file CSS per lo stile del componente
 
// Definizione delle proprietà del componente VideoPlayer
interface VideoPlayerProps {
  url: string;  // L'URL completo del video
}
 
// Definizione del componente VideoPlayer come funzione di tipo React.FC
const VideoPlayer: FC<VideoPlayerProps> = ({ url }) => {
  return (
    <div className='player-wrapper'>
    <ReactPlayer
      url={url}
      className='react-player'
      playing
      width='100%'
      height='100%'
      controls={true}
      light={false}
      pip={true}
      config={{
        youtube: {
          playerVars: { showinfo: 1 }
        },
        facebook: {
          appId: '1234567890' // Replace with your Facebook app ID if necessary
        }
      }
    }
    />
    </div>
  );
};

export default VideoPlayer;

