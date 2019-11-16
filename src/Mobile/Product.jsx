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
		<div className="product-wrapper" style={{ height: '60vh', width: '90%', margin: 'auto', marginTop: '2%' }}>
			<img src={productImg} style={{ height: '50%', width: 'auto', position: 'relative' }} />

			<div style={{ width: '100%' }}>
				<div>
					<h2>{productName}</h2>
					<h3>{department}</h3>
				</div>
				<div>
					<div>
						<div>{Math.floor(originalPrice)} SEK</div>
						<div>{Math.floor(newPrice)} SEK</div>
					</div>
					<div>
						<div>{shopName}</div>
						<BuyButton />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
