import React from "react";
import "./ProductFilter.scss";

const ProductLabel = () => {
  return (
    <div className="label">
      <p>Product</p>
    </div>
  );
};

const ProductFilter = () => {
  return (
    <div className="product-filter-wrapper">
      <ProductLabel />
      <ProductLabel />
      <ProductLabel />
      <ProductLabel />
      <ProductLabel />
    </div>
  );
};

export default ProductFilter;
