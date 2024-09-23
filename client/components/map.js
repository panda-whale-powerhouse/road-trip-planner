import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateWaypoints } from '../features/genSettings/genSettingsSlice';

const Map = () => {
  const destination = useSelector(
    (state) => state.genSettings.destination
  ).replace(/\s/, '+');
  const origin = useSelector((state) => state.genSettings.origin).replace(
    /\s/,
    '+'
  );
  const step = useSelector((state) => state.genSettings.step);
  const waypointStr = useSelector((state) => state.genSettings.waypointStr);
 
 
  const dispatch = useDispatch();


  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `/corsproxy/directions?url=https://maps.googleapis.com/maps/api/directions/json&key=AIzaSyBgxv1mUqaMXN3hkGTaXLN1X3Lhc87pLN4&destination=New+York&origin=Los+Angeles`,
        {
          method: 'GET',
          mode: 'cors',
          headers: {
            Accept: 'application/json',
          },
        }
      )
      const data = await response.json();
      // console.dir(data);
      //    initialize waypoints array = []
      const waypoints = [];
      let totalDist = 0;
      const stepInMeters = step * 1609;
      //    iterate through legs array, set totalDist = 0
      //        iterate through each leg's steps array,
      for ( const step of data.routes[0].legs[0].steps){
      //              for each step, add its distance to the totalDist
        totalDist += step.distance.value;
        // if totalDist is greater than chunkLength:
        if (totalDist > stepInMeters){
           // add the startLocation (place id maybe?) from the step to our own waypoints array
          waypoints.push(`${step.start_location.lat},${step.start_location.lng}`);
          
          // reset the totalDist to 0
          totalDist = 0;
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
  }, [destination, origin, step]);



  const url =
    destination === '' || origin === ''
      ? `https://www.google.com/maps/embed/v1/view?key=${process.env.GOOGLE_API_KEY}&center=39.828175,-98.5795`
      : `https://www.google.com/maps/embed/v1/directions?key=${process.env.GOOGLE_API_KEY}=&origin=${origin}&destination=${destination}${waypointStr}`;
  //waypoints=via:<lat>,<lng>|via:<lat>,<lng>
  //&waypoints=via:34.0535718,-118.2060754|via:34.0765953,-117.5447185|via:36.1686396,-115.158777|via:38.5797859,-112.5983144|via:39.7876311,-105.0691424|via:41.0258597,-102.1559692|via:41.2265643,-95.9632743|via:41.5970606,-90.6766827|via:41.4402384,-90.3307208|via:41.5827015,-87.6852897|via:41.5846104,-87.2349419|via:41.3867741,-82.17848|via:41.1196353,-80.8457415|via:40.7398569,-74.079358
  return <iframe style={styles.map} src={url}></iframe>;
};

const styles = {
  map: {
    width: '670',
    height: '420',
  },
};

export default Map;
