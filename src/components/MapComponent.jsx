import React from "react";
import ReactMapboxGl, { Layer, Feature, Popup } from "react-mapbox-gl";
import "./MapComponent.scss";
import data from "../data/geodata";

const API_BASE_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
const ACCESS_TOKEN =
  "pk.eyJ1Ijoic3loa28iLCJhIjoiY2prMThnbnVhMDR6NTNvcnc3ZGNwbGV2ZCJ9.HaLGB6YPhrcvJbEkvg3U1A";

const Map = ReactMapboxGl({
  accessToken: ACCESS_TOKEN
});

const MapComponent = ({ locations }) => {
  const [popup, setPopup] = React.useState({ popup: false, lng: "", lat: "" });

  const Positions = locations => {
    return locations.map((location, key) => (
      <Feature
        coordinates={[location.lng, location.lat]}
        key={key}
        onMouseEnter={() =>
          setPopup({ popup: true, lng: location.lng, lat: location.lat })
        }
        onMouseLeave={() => setPopup(false)}
      />
    ));
  };

  return (
    <div className="map-container">
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        center={[-46.63929204800168, -23.54562128115268]}
        containerStyle={{
          height: "100%",
          width: "100%"
        }}
        zoom={[15]}
      >
        <Layer type="symbol" layout={{ "icon-image": "triangle-stroked-15" }}>
          {Positions(locations)}
        </Layer>
        {popup && (
          <Popup
            coordinates={[popup.lng, popup.lat]}
            offset={{
              "bottom-left": [12, -38],
              bottom: [0, -38],
              "bottom-right": [-12, -38]
            }}
          >
            <h1>Popup</h1>
          </Popup>
        )}
      </Map>
    </div>
  );
};

export default MapComponent;
