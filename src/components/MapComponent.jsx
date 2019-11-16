import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "./MapComponent.scss";
import data from "../data/geodata";

const API_BASE_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
const ACCESS_TOKEN =
  "pk.eyJ1Ijoic3loa28iLCJhIjoiY2prMThnbnVhMDR6NTNvcnc3ZGNwbGV2ZCJ9.HaLGB6YPhrcvJbEkvg3U1A";

const Map = ReactMapboxGl({
  accessToken: ACCESS_TOKEN
});

const positions = data.data.map((node, key) => (
  <Feature
    coordinates={[node.geolocation_lng, node.geolocation_lat]}
    key={key}
  />
));

const MapComponent = () => {
  return (
    <div className="map-container">
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        center={[-46.63929204800168, -23.54562128115268]}
        containerStyle={{
          height: "100%",
          width: "100%"
        }}
      >
        <Layer type="symbol" layout={{ "icon-image": "harbor-15" }}>
          {/* {positions} */}
        </Layer>
      </Map>
    </div>
  );
};

export default MapComponent;
