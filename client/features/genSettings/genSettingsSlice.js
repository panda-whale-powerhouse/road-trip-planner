import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  destination: '',
  origin: '',
  step: '',
};

export const genSettingsSlice = createSlice({
  name: 'genSettings',
  initialState,
  reducers: {},
});

export const {} = genSettingsSlice.actions;
export default genSettingsSlice.reducer;
