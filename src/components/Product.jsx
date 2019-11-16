import React from "react";
import "./Product.scss";

const BuyButton = () => {
  return (
    <div className="buy-button">
      <p>Buy</p>
    </div>
  );
};

const Product = ({
  id,
  productName,
  shopName,
  productImg,
  originalPrice,
  newPrice,
  department,
  handleHover
}) => {
  return (
    <div className="product-wrapper" onClick={() => handleHover(id)}>
      <div className="left-wrapper">
        <img src={productImg} />
        <div className="seller-info">
          <h2>{productName}</h2>
          <h3>{department}</h3>
        </div>
      </div>
      <div className="right-wrapper">
        <div className="right-wrapper-column">
          <div className="previous-price">{Math.floor(originalPrice)} €</div>
          <div className="new-price">{Math.floor(newPrice)} €</div>
        </div>
        <div className="right-wrapper-column">
          <div>{shopName}</div>
          <BuyButton />
        </div>
      </div>
    </div>
  );
};

export default Product;
