import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Map = () => {
  const destination = useSelector(
    (state) => state.genSettings.destination
  ).replace(/\s/, '+');
  const origin = useSelector((state) => state.genSettings.origin).replace(
    /\s/,
    '+'
  );

  // functionality to chuck up the route
  // check for chuckLength if its nothing, return early
  // fetch request to routes api using origin and destination
  //    initialize waypoints array = []
  //    iterate through legs array, set totalDist = 0
  //        iterate through each leg's steps array,
  //              for each step, add its distance to the totalDist
  //                  if totalDist is greater than chunkLength:
  //                      add the startLocation (place id maybe?) from the step to our own waypoints array
  //                      reset the totalDist to 0
  //    include waypoints array into the embedded map src url

  useEffect(() => {
    function getData() {
      fetch(
        `/corsproxy/directions?url=https://maps.googleapis.com/maps/api/directions/json&key=AIzaSyBgxv1mUqaMXN3hkGTaXLN1X3Lhc87pLN4&destination=New+York&origin=Los+Angeles`,
        {
          method: 'GET',
          mode: 'cors',
          headers: {
            Accept: 'application/json',
          },
        }
      )
        .then((response) => response.text())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    }
    getData();
  }, []);

  const url =
    destination === '' || origin === ''
      ? `https://www.google.com/maps/embed/v1/view?key=${process.env.GOOGLE_API_KEY}&center=39.828175,-98.5795`
      : `https://www.google.com/maps/embed/v1/directions?key=${process.env.GOOGLE_API_KEY}=&origin=${origin}&destination=${destination}`;

  return <iframe style={styles.map} src={url}></iframe>;
};

const styles = {
  map: {
    width: '600',
    height: '450',
  },
};

export default Map;
