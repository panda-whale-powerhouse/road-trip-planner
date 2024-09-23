import React, {useState, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateDestination,
  updateOrigin,
  updateStep,
} from '../features/genSettings/genSettingsSlice';

const Settings = () => {
  const origin = useSelector((state) => state.genSettings.origin);
  const destination = useSelector((state) => state.genSettings.destination);
  const step = useSelector((state) => state.genSettings.step);
  const dispatch = useDispatch();


  const [waypoints, setWaypoints] = useState([])
  const inputRef = useRef(null);

  function handleChunk(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    setWaypoints(waypoints => [...waypoints, formJson.waypoints]);

    inputRef.current.value= '';
  }

  return (
    <div>
      <div style={styles.settings}>
        <form style={styles.top}>
          <label htmlFor='from'>From:</label>
          <input
            id='from'
            type='text'
            value={origin}
            onChange={(e) => dispatch(updateOrigin(e.target.value))}
          ></input>

          <label htmlFor='to'>To:</label>
          <input
            id='to'
            type='text'
            value={destination}
            onChange={(e) => dispatch(updateDestination(e.target.value))}
          ></input>
        </form>

        <form style= {styles.bottom}>
          <label htmlFor='steps'>Chunk Trip By Miles:</label>
          <input
            id='steps'
            type='number'
            value={step}
            onChange={(e) => dispatch(updateStep(e.target.value))}
          ></input>
          <button type='submit'>Chunk Trip</button>
        </form> 

        <form style={styles.bottom} onSubmit= {handleChunk}>
          <label htmlFor='waypoints'>Stops You Want to Make:</label>
          <input type='text' ref = {inputRef} id= 'waypoints' name='waypoints'></input>
          {/* <a href='/corsproxy/TEST'>CORSPROXY TEST</a> */}
          <button style= {styles.addWaypoint} type='submit'>Add</button>
        </form>
      </div>
    <div style={styles.waypoints}>
        <h3>Waypoint List:</h3>
        <ul>
          {waypoints.length === 0 ? 
          (<li>No Waypoints Yet</li>) : (
            waypoints.map((waypoint, index) => (
              <li key={index}>{waypoint}</li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  settings: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexDirection: 'column',
    position: 'relative'
  },
  top: {
    display: 'flex',
    gap: '5px',
  },
  bottom: {
    display: 'flex',
    gap: '5px',
  },
  waypoints: {
    border: '1px solid black',
    display: 'flex',
    position: 'absolute',
    right: '20',
    height: '400px',
    width: '300px',
    flexDirection: 'column',
    padding: '10px'
  }
};

export default Settings;
