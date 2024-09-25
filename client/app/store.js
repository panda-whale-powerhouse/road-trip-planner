import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from '../reducers/authSlice';
import genSettingsReducer from '../reducers/genSettingsSlice';

export const store = configureStore({
  reducer: {
    genSettings: genSettingsReducer,
    authSlice: authSliceReducer,
  },
});
