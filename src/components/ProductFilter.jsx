import React from "react";
import "./ProductFilter.scss";

const ProductLabel = ({ key, department, handleFilter, filter }) => {
  return (
    <div className={filter === department ? "selected-label" : "label"} onClick={() => handleFilter(department)}>
      <p>{department}</p>
    </div>
  );
};

const ProductLabelList = ({ categories, handleFilter, filter }) => {
    return (
        categories.map((category, index) => (<ProductLabel key={index} department={category} handleFilter={(department) => handleFilter(department)} filter={filter}/>))
    );
}

const ProductFilter = ({ categories, handleFilter, filter }) => {
  return (
    <div className="product-filter-wrapper">
      <ProductLabelList categories= {categories} handleFilter={(department) => handleFilter(department)} filter={filter}/>
    </div>
  );
};

export default ProductFilter;
