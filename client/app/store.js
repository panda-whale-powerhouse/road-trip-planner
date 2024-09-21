import { configureStore } from '@reduxjs/toolkit';
import genSettingsReducer from '../features/genSettings/genSettingsSlice';

export const store = configureStore({
  reducer: {
    genSettings: genSettingsReducer,
  },
});
