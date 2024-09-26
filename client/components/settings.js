import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateName,
  addWaypoint,
  updateDestination,
  updateOrigin,
  updateStep,
  updateWaypoints,
} from '../reducers/genSettingsSlice';

const Settings = () => {
  const name = useSelector((state) => state.genSettings.name);
  const origin = useSelector((state) => state.genSettings.origin);
  const destination = useSelector((state) => state.genSettings.destination);
  const step = useSelector((state) => state.genSettings.step);
  const waypointStr = useSelector((state) => state.genSettings.waypointStr);
  const totalStore = useSelector((state) => state.genSettings);
  //Can we make this more dry?

  const dispatch = useDispatch();

  const inputRef = useRef(null);

  function handleChunk(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    dispatch(addWaypoint(formJson.waypoints.replace(' ', '+')));

    inputRef.current.value = '';
  }

  function chunkRoute() {
    async function getData() {
      console.log('Getting ready to fetch!');
      const response = await fetch(
        `/corsproxy/directions?url=https://maps.googleapis.com/maps/api/directions/json&key=${
          process.env.GOOGLE_API_KEY
        }&destination=${destination.replace(' ', '+')}&origin=${origin.replace(
          ' ',
          '+'
        )}${waypointStr}`,
        {
          method: 'GET',
          mode: 'cors',
          headers: {
            Accept: 'application/json',
          },
        }
      );
      console.log('Made it out!', response);
      const data = await response.json();
      console.log('Data theoretically', data);
      // console.dir(data);
      //    initialize waypoints array = []
      const waypoints = [];
      let totalDist = 0;
      const stepInMeters = step * 1609;
      //    iterate through legs array, set totalDist = 0
      //        iterate through each leg's steps array,
      console.log('num legs = ', data.routes[0].legs.length);
      console.log('num routes = ', data.routes.length);
      if (data.routes.length === 0) return;
      for (const leg of data.routes[0].legs) {
        for (const step of leg.steps) {
          //              for each step, add its distance to the totalDist
          totalDist += step.distance.value;
          // if totalDist is greater than chunkLength:
          if (totalDist > stepInMeters) {
            // add the startLocation (place id maybe?) from the step to our own waypoints array
            waypoints.push(
              `${step.start_location.lat},${step.start_location.lng}`
            );

            // reset the totalDist to 0
            totalDist = 0;
          }
        }
      }
      console.dir(waypoints);
      dispatch(updateWaypoints(waypoints));
      //    include waypoints array into the embedded map src url
    }
    // check for step if its nothing, return early
    if (!step) return;
    // fetch request to routes api using origin and destination
    getData();
  }

  function saveTrip() {
    //make post request to DB sending:
      //genSettingsSlice, name of trip, name of person
    // console.log('Clicked saveTrip');
    const bodyObj = {
      tripData: totalStore,
      creator: "Alex's Cookie",
      roadtripName: name,
    };
    console.log('Post Body here:', bodyObj);
    fetch('/roadtrips', {
      //I believe this route is causing us issues
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, 'newroute response');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    //reset store? (STRETCH GOAL)

    //if we can't reload page, we need to find a way to reload savedTrips component
  }

  return (
    <div id='TripDetails'>
      <form>
        <TextField
          id="title" label="Trip Name" variant="standard"
          type='text'
          onChange={(e) => dispatch(updateName(e.target.value))}
          value={name}
        ></TextField>
        <Button type='Button' onClick={saveTrip}>
          Save Trip
        </Button>
      </form>

      <form >
        <label htmlFor='from'></label>
        <TextField
          label="Origin" variant="standard"
          id='from'
          type='text'
          value={origin}
          onChange={(e) => dispatch(updateOrigin(e.target.value))}
        ></TextField>

        <label htmlFor='to'></label>
        <TextField
          label="Destination" variant="standard"
          id='to'
          type='text'
          value={destination}
          onChange={(e) => dispatch(updateDestination(e.target.value))}
        ></TextField>
      </form>

      <form >
        <label htmlFor='steps'></label>
        <TextField
          label="Split up by X miles" variant="standard"
          id='steps'
          type='number'
          value={step}
          onChange={(e) => dispatch(updateStep(e.target.value))}
        ></TextField>
        <Button
          onClick={(e) => {
            e.preventDefault();
            chunkRoute();
          }}
        >
          Find Stops
        </Button>
      </form>

      <form onSubmit={handleChunk}>
        <label htmlFor='waypoints'></label>
        <TextField
          id="waypoints" label="Enter additional stops" variant="standard"
          type='text'
          name='waypoints'
        ></TextField>
        <Button type='submit'>
          Add
        </Button>
      </form>
    </div>
  );
};

export default Settings;
