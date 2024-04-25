// src/app/store.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/searchSlice';
import videoReducer from '../features/videoSlice';

export const rootReducer = combineReducers({
  search: searchReducer,
  video: videoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
