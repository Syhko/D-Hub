import React from "react";
import "./Listing.scss";
import Product from "./Product";
import BuyModal from "./BuyModal";
import CheckMark from "./CheckMark";

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
        CO2={product.CO2}
        hours={product.hours}
        productImg={product.imageUrl}
        newPrice={product.discountedPrice}
        originalPrice={product.originalPrice}
        handleHover={id => handleHover(id)}
        handleOpen={handleOpen}
      />
    ));
};

const Listing = ({ products, filter, handleHover, handleOpen }) => {
  const [modal, setModal] = React.useState(null);
  return (
    <div className="listing-wrapper">
      {modal && <BuyModal handleClose={() => setModal(null)} product={modal} />}
      <ProductList
        products={products}
        filter={filter}
        handleHover={id => handleHover(id)}
        handleOpen={setModal}
      />
    </div>
  );
};

export default Listing;
