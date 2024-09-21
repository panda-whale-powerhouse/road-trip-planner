// console.log("its working");

import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import SavedTrips from './components/savedTrips';
import Settings from './components/settings';
import Map from './components/map';
import { store } from './app/store';

const App = () => {
  return (
    <div>
      <SavedTrips />

      <Settings />

      <Map />
    </div>
  );
};

// const styles = {
//   body: {
//     display: 'flex',
//     justifyContent: 'space-evenly'
//   }
// }

const root = createRoot(document.getElementById('app'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
