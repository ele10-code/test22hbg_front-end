// src/app/store.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/searchSlice';
import videoReducer from '../features/videoSlice';
/* aiuta a combinare più reducer in un unico reducer radice. 
Ogni reducer gestisce una parte indipendente dello stato globale. Nel tuo caso, video gestito da videoReducer e search gestito da searchReducer. */

// Definire il rootReducer
// Combine all reducers into a single reducer function to create the root reducer
export const rootReducer = combineReducers({
  video: videoReducer,
  search: searchReducer,
 
});
// Definire il tipo RootState per il tipo di stato globale
export type RootState = ReturnType<typeof rootReducer>;

// Definire lo store con il rootReducer e lo stato iniziale 
export const store = configureStore({
  reducer: rootReducer,
});
