import React from "react";
import logo from "./logo.svg";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "./App.scss";

const API_BASE_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
const ACCESS_TOKEN =
  "pk.eyJ1Ijoic3loa28iLCJhIjoiY2prMThnbnVhMDR6NTNvcnc3ZGNwbGV2ZCJ9.HaLGB6YPhrcvJbEkvg3U1A";

const Map = ReactMapboxGl({
  accessToken: ACCESS_TOKEN
});

const App = () => {
  return (
    <div className="App">
      <div className="main-banner">
        <h1>D-HUB</h1>
      </div>
      <div className="map-container">
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: "100%",
            width: "100%"
          }}
        />
      </div>
    </div>
  );
};

export default App;
