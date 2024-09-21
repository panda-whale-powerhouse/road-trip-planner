import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  destination: '',
  origin: '',
  step: '',
};

export const genSettingsSlice = createSlice({
  name: 'genSettings',
  initialState,
  reducers: {
    updateOrigin: (state, newOrigin) => {
      state.origin = newOrigin.payload;
    },

    updateDestination: (state, newDestination) =>
      (state.destination = newDestination.payload),

    updateStep: (state, newstep) => (state.step = newStep.payload),
  },
});

export const { updateDestination, updateOrigin, updateStep } =
  genSettingsSlice.actions;
export default genSettingsSlice.reducer;
