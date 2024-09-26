import React from 'react';
import "./assets/style.scss"
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router-dom';

import { store } from './app/store';

import SavedTrips from './components/savedTrips';
import Settings from './components/settings';
import Map from './components/map';
import LoginForm from './components/LoginForm.jsx';
import SignUpForm from './components/SignUpForm.jsx';
import WaypointContainer from './components/WaypointContainer';

const App = () => {
  return (
    <div id='background'>
      <h1>Road Trip Planner</h1>
      <Router>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='/signup' element={<SignUpForm />} />
          <Route
            path='/mainPage'
            element={
              <div id='trips'>
                <SavedTrips id='trips2' />
                <div id='settings'>
                  <Settings />
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
