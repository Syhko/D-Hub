import React from "react";
import "./Listing.scss";
import Product from "./Product";
import BuyModal from "./BuyModal";

const ProductList = ({ products, filter, handleHover }) => {
  return products
    .filter(product => product.department === filter)
    .map(product => (
      <Product
        key={product.id}
        id={product.id}
        productName={product.title}
        department={product.department}
        shopName={product.shop}
        productImg={product.imageUrl}
        newPrice={product.discountedPrice}
        originalPrice={product.originalPrice}
        handleHover={id => handleHover(id)}
      />
    ));
};

const Listing = ({ products, filter, handleHover }) => {
  return (
    <div className="listing-wrapper">
      <ProductList
        products={products}
        filter={filter}
        handleHover={id => handleHover(id)}
      />
    </div>
  );
};

export default Listing;
