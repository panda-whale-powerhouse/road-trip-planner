import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  destination: 'Los Angeles',
  origin: 'New York',
  step: 0,
  waypoints: [],
  waypointStr: '',
};

export const genSettingsSlice = createSlice({
  name: 'genSettings',
  initialState,
  reducers: {
    updateOrigin: (state, newOrigin) => {
      state.origin = newOrigin.payload;
    },

    updateDestination: (state, newDestination) => {
      state.destination = newDestination.payload;
    },

    updateStep: (state, newStep) => {
      state.step = newStep.payload;
    },

    updateWaypoints: (state, action) => {
      state.waypoints = action.payload;
      state.waypointStr =  state.waypoints.reduce((str, waypoint) => str + waypoint + '|', '&waypoints=').slice(0, -1);
    }
  },
});

export const { updateDestination, updateOrigin, updateStep, updateWaypoints } =
  genSettingsSlice.actions;
export default genSettingsSlice.reducer;
