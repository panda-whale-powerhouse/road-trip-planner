import React, { useState, useEffect } from 'react';
// import React from 'react';
import './assets/style.scss';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { store } from './app/store';

import SavedTrips from './components/savedTrips';
import Settings from './components/settings';
import Map from './components/map';
import LoginForm from './components/LoginForm.jsx';
import SignUpForm from './components/SignUpForm.jsx';
import WaypointContainer from './components/WaypointContainer';

const App = () => {
  const [tripState, setTripState] = useState([]);

  //Thought State would be easier for savedTrips, wound up needing to be accessed in Settings Component AND savedTrips Component, and led to this. Probably could've been handled with Redux
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
    console.log('List O-Trips', tripState);
  }, []);

  console.log('List O-Trips2', tripState);

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/signup' element={<SignUpForm />} />
          <Route
            path='/mainPage'
            element={
              <div id='trips'>
                <SavedTrips id='trips2' tripState={tripState} />
                <div id='settings'>
                  <Settings setTripState={setTripState} tripState={tripState} />
                  <Map />
                </div>
                <div>
                  <WaypointContainer />
                </div>
              </div>
            }
          />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </div>
  );
};

const root = createRoot(document.getElementById('app'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
