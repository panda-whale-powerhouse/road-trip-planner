import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateDestination,
  updateOrigin,
  updateStep,
} from '../features/genSettings/genSettingsSlice';

const Settings = () => {
  const origin = useSelector((state) => state.origin);
  const destination = useSelector((state) => state.destination);
  const step = useSelector((state) => state.step);
  const dispatch = useDispatch();

  return (
    <div>
      <form>
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

        <label htmlFor='stops'>Stops:</label>
        <input
          id='stops'
          type='text'
          value={step}
          onChange={(e) => dispatch(updateStep(e.target.value))}
        ></input>
      </form>

      <form>
        <label htmlFor='from'>Chunk Trip By:</label>
        <select name='milesTime'>
          <option>Select One</option>
          <option>Miles</option>
          <option>Duration</option>
        </select>
      </form>
    </div>
  );
};

const styles = {
  chunkOptions: {
    margin: '30px',
  },
};

export default Settings;
