import React from 'react';

const BuyButton = () => {
	return (
		<div className="buy-button">
			<p>Buy</p>
		</div>
	);
};

const Product = ({ productName, shopName, productImg, originalPrice, newPrice, department }) => {
	return (
		<div className="product-wrapper">
			<div className="left-wrapper">
				<img src={productImg} />
				<div className="seller-info">
					<h2>{productName}</h2>
					<h3>{department}</h3>
				</div>
			</div>
			<div className="right-wrapper">
				<div className="right-wrapper-column">
					<div className="previous-price">{Math.floor(originalPrice)} SEK</div>
					<div className="new-price">{Math.floor(newPrice)} SEK</div>
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
