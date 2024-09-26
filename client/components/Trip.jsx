import React from 'react';
import Button from '@mui/material/Button';
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

  //make call to update reducer to selected tripdata
  function selectTrip() {
    dispatch(updateName(name));
    dispatch(updateOrigin(origin));
    dispatch(updateDestination(destination));
    dispatch(updateStep(step));
    dispatch(updateWaypoints(waypoints));
  }

  return (
    <>
    <Button 
      variant="contained" 
      sx={{color: '#d6d3ff'}}
      onClick={selectTrip}>
      {name}
    </Button>
    </>
  );
};

export default Trip;
