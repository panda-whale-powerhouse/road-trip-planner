// console.log("its working");

import React, {useState, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import SavedTrips from './savedTrips'
import Settings from './settings'
import Map from './map'

const App = () => {
  return (
    <div>
      
      <SavedTrips />
      
      <Settings />

      <Map />

    </div>
  )
}


// const styles = {
//   body: {
//     display: 'flex',
//     justifyContent: 'space-evenly'
//   }
// }


const root = createRoot(document.getElementById('app'))
root.render(<App />)

