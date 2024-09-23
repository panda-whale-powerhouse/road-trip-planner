import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { store } from "./app/store";

import SavedTrips from "./components/savedTrips";
import Settings from "./components/settings";
import Map from "./components/map";
import LoginForm from "./components/LoginForm.jsx";
import SignUpForm from "./components/SignUpForm.jsx";
import WaypointContainer from "./components/WaypointContainer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route
          path="/mainPage"
          element={
            <div style={styles.body}>
              <SavedTrips />

              <div style={styles.settingMap}>
                <Settings />
                <Map />
                <WaypointContainer />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

const styles = {
  body: {
    display: "flex",
    justifyContent: "flex-start",
  },
  settingMap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "50px",
  },
};

const root = createRoot(document.getElementById("app"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
