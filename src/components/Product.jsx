import React from "react";
import "./Product.scss";

const BuyButton = ({ handleOpen }) => {
  return (
    <div className="buy-button" onClick={handleOpen}>
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
  handleHover,
  handleOpen
}) => {
  return (
    <div className="product-wrapper" onClick={() => handleHover(id)}>
      <div className="left-wrapper">
        <img src={productImg} />
        <div className="seller-info">
          <h1>{shopName}</h1>
          <h2>{productName}</h2>
        </div>
      </div>
      <div className="right-wrapper">
        <div className="right-wrapper-column">
          <div className="right-wrapper-column-price">
            <div className="previous-price">{Math.floor(originalPrice)} €</div>
            <div className="new-price">{Math.floor(newPrice)} €</div>
          </div>

          <BuyButton handleOpen={handleOpen} />
        </div>
      </div>
    </div>
  );
};

export default Product;
