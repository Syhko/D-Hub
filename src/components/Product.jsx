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
          <h1>{shopName}</h1>
          <h2>{productName}</h2>
          <p style={{ fontSize: "1.2em", textAlign: "left" }}>
            <i class="fas fa-clock"></i> {Math.floor(Math.random() * 50)} hours
            left
          </p>
        </div>
      </div>
      <div className="right-wrapper">
        <div className="right-wrapper-column">
          <div className="right-wrapper-column-price">
            <div>
              <p style={{ fontSize: "0.7em" }}>
                <span style={{ color: "green" }}>
                  <i class="fas fa-leaf"></i>{" "}
                </span>
                {Math.floor(Math.random() * 50)}g CO<sub>2</sub> saved
              </p>
            </div>
            <br />
            <div>
              <span className="previous-price">
                {Math.floor(originalPrice)}{" "}
              </span>{" "}
              {Math.floor(newPrice)} €
            </div>
          </div>

          <BuyButton />
        </div>
      </div>
    </div>
  );
};

export default Product;
