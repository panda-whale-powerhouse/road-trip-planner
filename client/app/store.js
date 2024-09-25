import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from '../reducers/authSlice'
import genSettingsReducer from '../features/genSettings/genSettingsSlice';
import tripSliceReducer from '../reducers/tripSlice';

export const store = configureStore({
  reducer: {
    genSettings: genSettingsReducer,
    authSlice: authSliceReducer,
    tripSlice: tripSliceReducer
  },
});
