import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SavedTrips from "../components/savedTrips";

export const getSavedTrips = createAsyncThunk(
  '',// Need to find the route for stored trips
  async (id) => {
    const response = await fetch(''); // need to find the route for user id
    if (!response.ok) {
      throw new Error('Unable to retrieve trip list.');
    }
    const trips = response.json();
    console.log(trips);
    return trips;
  }
);

export const saveATrip = createAsyncThunk(
  '', // need route for trip post
  async(req) => {
    console.log('userID = ' + reqBody.id);
    const response = await fetch('', { // need database route
      headers: {
        'Content-Type': 'applications/json'
      },
      method: 'POST',
      body: JSON.stringify({
        from: req.trip.from,
        to: req.trip.to,
        waypoints: req.trip.waypoints,
        user_id: req.id //????
      }),
    });
    if (!response.ok) {
      throw new Error('Unable to save this trip.');
    }
    const trips = response.json();
    return trips;
  }
);

const initialState = {
  savedTrips: [],
}

export const tripSlice = createSlice({
  name: 'trips',
  initialState,
  reducers: {
    getSavedTrips: (state, action) => {
      return;
    },
    saveATrip: (state, action) => {
      return;
    }
  }
})

export const { fetchTrips, saveTrip } = tripSlice.actions;
export default tripSlice.reducer;