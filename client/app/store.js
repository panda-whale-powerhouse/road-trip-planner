import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from '../reducers/authSlice';
import genSettingsReducer from '../features/genSettings/genSettingsSlice';

export const store = configureStore({
  reducer: {
    genSettings: genSettingsReducer,
    authSlice: authSliceReducer,
  },
});
