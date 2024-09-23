import React from 'react';
import { useSelector } from 'react-redux';


const Map = () => {
  const destination = useSelector(
    (state) => state.genSettings.destination
  ).replace(/\s/, '+');
  const origin = useSelector((state) => state.genSettings.origin).replace(
    /\s/,
    '+'
  );
  const waypointStr = useSelector((state) => state.genSettings.waypointStr);



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
    width: '600',
    height: '450',
  },
};

export default Map;
