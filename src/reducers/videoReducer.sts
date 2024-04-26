// creazione dello stato iniziale dell'applicazione
interface VideoState {
  url: string;
  volume: number;
  progress: number;
}

// creazione del reducer per la gestione dello stato
const initialState: VideoState = {
  url: '',
  volume: 1,  // Default volume is 100%
  progress: 0
};

// definizione del reducer
export const videoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_VIDEO_URL':
      return { ...state, url: action.payload };
    case 'SET_VIDEO_VOLUME':
      return { ...state, volume: action.payload };
    case 'SET_VIDEO_PROGRESS':
      return { ...state, progress: action.payload };
    default:
      return state;
  }
};
