import { useSelector } from 'react-redux';
import React from 'react';

const WaypointContainer = () => {
  const waypoints = useSelector((state) => state.genSettings.waypoints);
  return (
    <div style={styles.savedBox}>
      <h3>Waypoint List</h3>
      <ul>
        {waypoints.length === 0 ? 
        (<li>No Waypoints Yet</li>) : (
          waypoints.map((waypoint, index) => (
          <li key={index}>{waypoint}</li>
        ))
      )}
      </ul>
    </div>
  );
};

const styles = {
  savedBox: {
    border: '1px solid black',
    width: '300px',
    height: '300px',
    margin: 'auto 0',
    padding: '10px',
    borderRadius: '5px',
  },
};

export default WaypointContainer;
