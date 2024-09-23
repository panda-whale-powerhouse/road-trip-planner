import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import LoginForm from './components/LoginForm.jsx';
import SignUpForm from './components/SignUpForm.jsx';
import SavedTrips from './components/savedTrips';
import Settings from './components/settings';
import Map from './components/map';
import { store } from './app/store';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<LoginForm/>}/>
        <Route path = "/signup" element={<SignUpForm/>}/>
        <Route path = "/mainPage" element={<Map/>}/>
      </Routes>
    </Router>
  );
};

const styles = {
  body: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  settingMap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '50px'
  }
}

const root = createRoot(document.getElementById('app'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);