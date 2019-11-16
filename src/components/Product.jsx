import React from "react";
import "./Product.scss";

const BuyButton = ({ handleOpen, CO2 }) => {
  return (
    <div className="buy-button" onClick={() => handleOpen({ CO2 })}>
      <p>Buy</p>
    </div>
  );
};

const Product = ({
  id,
  productName,
  shopName,
  CO2,
  hours,
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
          <p style={{ fontSize: "1.2em", textAlign: "left" }}>
            <i class="fas fa-clock"></i> {hours} hours left
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
                {CO2}g CO<sub>2</sub> saved
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

          <BuyButton handleOpen={handleOpen} CO2={CO2} />
        </div>
      </div>
    </div>
  );
};

export default Product;
