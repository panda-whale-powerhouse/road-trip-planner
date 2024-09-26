import React, { useState, useEffect } from 'react';
import Trip from './Trip.jsx';

const SavedTrips = () => {
  const [tripState, setTripState] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('roadtrips');
        const data = await response.json();
        console.log(data);
        setTripState(data);
      } catch (error) {
        console.log('Prob in SavedTrips', error);
      }
    }
    getData();
  }, []);

  const trips = tripState.map((tripEl, i) => {
    return <Trip key={i} trip={tripEl} />;
  });

  return (
    <div style={styles.savedBox}>
      <h3>Saved Trips:</h3>
      <div>{trips}</div>
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

export default SavedTrips;
