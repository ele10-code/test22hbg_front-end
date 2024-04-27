// src/features/searchSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

 // Definizione dello stato iniziale del modulo search
interface SearchState {
  query: string;
  results: any[];
  isLoading: boolean;
  error: string | null;
}
 // Inizializzazione dello stato del modulo search
const initialState: SearchState = {
  query: '',
  results: [],
  isLoading: false,
  error: null,
};

// Creazione di uno slice per il modulo search con le funzioni di reducer
export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => { // Funzione reducer per impostare la query
      state.query = action.payload; // Imposta la query nello stato del modulo search
    },
    setResults: (state, action: PayloadAction<any[]>) => { // Funzione reducer per impostare i risultati
      state.results = action.payload; // Imposta i risultati nello stato del modulo search
    },
    setLoading: (state, action: PayloadAction<boolean>) => { // Funzione reducer per impostare il loading
      state.isLoading = action.payload; // Imposta il loading nello stato del modulo search
    },
    setError: (state, action: PayloadAction<string | null>) => { // Funzione reducer per impostare l'errore
      state.error = action.payload; // Imposta l'errore nello stato del modulo search
    },
  },
});

export const { setQuery, setResults, setLoading, setError } = searchSlice.actions; // Esporta le azioni del modulo search per essere utilizzate in altri moduli

export default searchSlice.reducer; // Esporta il reducer del modulo search per essere utilizzato nel configureStore
