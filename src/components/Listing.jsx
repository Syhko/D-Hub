import React from "react";
import "./Listing.scss";
import Product from "./Product";

const Listing = () => {
  return (
    <div className="listing-wrapper">
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

export default Listing;
