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

const MapComponent = ({ locations, selectedProductId }) => {
  const [center, setCenter] = React.useState([
    -46.63929204800168,
    -23.54562128115268
  ]);
  const [zoom, setZoom] = React.useState([13]);
  const [popup, setPopup] = React.useState({
    popup: false,
    lng: "",
    lat: "",
    title: "",
    imageUrl: ""
  });

  React.useEffect(() => {
    const selectedProduct = locations.filter(
      location => location.id === selectedProductId
    )[0];
    if (selectedProductId) {
      setPopup({
        popup: false,
        lng: selectedProduct.lng,
        lat: selectedProduct.lat,
        title: selectedProduct.title,
        imageUrl: selectedProduct.imageUrl
      });
      setCenter([selectedProduct.lng, selectedProduct.lat]);
      setZoom([16]);
    }
  }, [selectedProductId]);

  const Positions = locations => {
    return locations.map((location, key) => (
      <Feature
        coordinates={[location.lng, location.lat]}
        key={key}
        onMouseEnter={() =>
          setPopup({
            popup: true,
            lng: location.lng,
            lat: location.lat,
            title: location.title,
            imageUrl: location.imageUrl
          })
        }
        onMouseLeave={() => setPopup(false)}
      />
    ));
  };

  const PopupDisplay = ({ title, imageUrl }) => {
    return (
      <div className="popup-display">
        <img src={imageUrl} />
        {/* <p>{title}</p> */}
      </div>
    );
  };

  return (
    <div className="map-container">
      <Map
        style="mapbox://styles/mapbox/basic-v8"
        center={center}
        movingMethod="flyTo"
        flyToOptions={{
          speed: "0.8"
        }}
        containerStyle={{
          height: "100%",
          width: "100%"
        }}
        zoom={zoom}
      >
        <Layer type="symbol" layout={{ "icon-image": "marker-11" }}>
          {Positions(locations)}
        </Layer>
        {popup && (
          <Popup
            className="popup-wrapper"
            coordinates={[popup.lng, popup.lat]}
            offset={{
              "bottom-left": [12, -38],
              bottom: [0, -20],
              "bottom-right": [-12, -38]
            }}
          >
            <PopupDisplay imageUrl={popup.imageUrl} title={popup.title} />
          </Popup>
        )}
      </Map>
    </div>
  );
};

export default MapComponent;
