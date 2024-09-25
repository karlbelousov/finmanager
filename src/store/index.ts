import { configureStore } from '@reduxjs/toolkit';
import viewTypeMainSlice from './reducers/view-type-for-main';
import dataSlice from './reducers/data';

export const store = configureStore({
  reducer: {
    viewTypeMain: viewTypeMainSlice,
    dataSlice: dataSlice
  }
});

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
