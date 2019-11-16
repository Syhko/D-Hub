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
		<div
			className="product-wrapper"
			style={{
				height: '50vh',
				width: '90%',
				margin: 'auto',
				marginTop: '2%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-evenly',
				padding: '0%',
			}}
		>
			<div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
				<div>
					<img src={productImg} style={{ width: '40vw', height: 'auto' }} />
				</div>
				<div style={{ padding: '5%' }}>
					<h3>{shopName}</h3>
					<h4>{productName}</h4>
				</div>
			</div>

			<div
				style={{
					width: '100%',
					borderTop: '2px solid grey',
				}}
			>
				<div style={{ float: 'right', padding: '2%' }}>
					<div>
						<span style={{ textDecoration: 'line-through' }}>{Math.floor(originalPrice)} SEK</span>{' '}
						{Math.floor(newPrice)} SEK
					</div>

					<BuyButton />
				</div>
			</div>
		</div>
	);
};

export default Product;
