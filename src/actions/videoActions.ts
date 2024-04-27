// Deinizione delle azioni per la gestione dello stato del video 
export const setVideoUrl = (url: string) => ({
  type: 'SET_VIDEO_URL',
  payload: url
});

export const setVideoVolume = (volume: number) => ({ // Definizione dell'azione per impostare il volume del video
  type: 'SET_VIDEO_VOLUME', // Tipo dell'azione
  payload: volume // Valore del volume
});

export const setVideoProgress = (progress: number) => ({ // Definizione dell'azione per impostare il progresso del video
  type: 'SET_VIDEO_PROGRESS', // Tipo dell'azione
  payload: progress // Valore del progresso
});
