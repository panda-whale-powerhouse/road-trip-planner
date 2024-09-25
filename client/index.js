import React from "react";
import "./assets/style.scss"
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from 'react-router-dom';

import { store } from "./app/store";

import SavedTrips from "./components/savedTrips";
import Settings from "./components/settings";
import Map from "./components/map";
import LoginForm from "./components/LoginForm.jsx";
import SignUpForm from "./components/SignUpForm.jsx";
import WaypointContainer from "./components/WaypointContainer";

const App = () => {
  return (
    <div id='background'>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route
            path="/mainPage"
            element={
              <div id='trips'>
                <SavedTrips id='trips2' />
                <div id='settings'>
                  <Settings />
                  <Map />
              </div>
                  <WaypointContainer />
              </div>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

// const styles = {
//   body: {
//     display: "flex",
//     justifyContent: "flex-start",
//     position: 'relative',
//   },
//   settingMap: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     margin: "50px",
//   },
//   waypoint: {
//     marginTop: '35px'
//   },
// };

const root = createRoot(document.getElementById("app"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
