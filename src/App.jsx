import React from "react";
import MapComponent from "./components/MapComponent";
import Listing from "./components/Listing";
import ProductFilter from "./components/ProductFilter";
import "./App.scss";

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="main-banner">
        <h1>D-HUB</h1>
        <ProductFilter />
      </div>
      <div className="body-wrapper">
        <Listing />
        <MapComponent />
      </div>
    </div>
  );
};

export default App;
