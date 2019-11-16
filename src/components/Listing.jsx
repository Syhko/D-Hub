import React from "react";
import "./Listing.scss";
import Product from "./Product";

const ProductList = ({ products, filter }) => {
  return products.filter(product => product.department === filter).map(product => (
    <Product
      productName={product.title}
      department={product.department}
      shopName={product.shop}
      productImg={product.imageUrl}
      newPrice={product.discountedPrice}
      originalPrice={product.originalPrice}
    />
  ));
};

const Listing = ({ products , filter}) => {
  return (
    <div className="listing-wrapper">
      <ProductList products={products} filter={filter}/>
    </div>
  );
};

export default Listing;
