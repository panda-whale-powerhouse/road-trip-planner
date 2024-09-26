import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateName,
  updateDestination,
  updateOrigin,
  updateStep,
  updateWaypoints,
} from '../reducers/genSettingsSlice';

const Trip = ({ trip }) => {
  const dispatch = useDispatch();
  const { name, destination, origin, step, waypoints, waypointStr } =
    trip.tripData;

  function selectTrip() {
    dispatch(updateName(name));
    dispatch(updateOrigin(origin));
    dispatch(updateDestination(destination));
    dispatch(updateStep(step));
    dispatch(updateWaypoints(waypoints));
    //make call to update reducer to selected tripdata
  }

  return (
    <button onClick={selectTrip}>
      <p>{name}</p>
      <p>
        {origin} to {destination}
      </p>
    </button>
  );
};

export default Trip;
