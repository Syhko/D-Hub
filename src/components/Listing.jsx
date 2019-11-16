import React from "react";
import "./Listing.scss";
import Product from "./Product";
import BuyModal from "./BuyModal";

const ProductList = ({ products, filter, handleHover, handleOpen }) => {
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
        handleOpen={handleOpen}
      />
    ));
};

const Listing = ({ products, filter, handleHover, handleOpen }) => {
  const [modal, setModal] = React.useState(false);
  return (
    <div className="listing-wrapper">
      {modal && <BuyModal handleClose={() => setModal(false)} />}
      <ProductList
        products={products}
        filter={filter}
        handleHover={id => handleHover(id)}
        handleOpen={() => setModal(true)}
      />
    </div>
  );
};

export default Listing;
