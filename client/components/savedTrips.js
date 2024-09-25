import Trip from './components/Trip'

const SavedTrips = ({ savedTrips }) => {
  if (!savedTrips) {
    savedTrips.from = '';
    savedTrips.to = '';
    savedTrips.waypoints = [];
  }
  const tripList = [];
  for (let i = 0; i < savedTrips.length; i++) {
    tripList.push(
      <Trip
        from={savedTrips[i].from}
        to={savedTrips[i].to}
        waypoints={savedTrips[i].waypoints}
        />
    );
  }
  return (
    <div style={styles.savedBox}>
        <h3>Saved Trips:</h3>
        Trip to Texas!
        <br></br>
        ...
    </div>
  );
}


const styles = {
    savedBox: {
        border: '1px solid black',
        width: '300px',
        height: '530px',
        margin: 'auto 0',
        padding: '10px',
        borderRadius: '5px'
    }
}

export default SavedTrips;