import React from 'react';
import BuyModal from '../components/BuyModal';

const BuyButton = () => {
	const [isBought, setIsBought] = React.useState(false);
	return (
		<div className="buy-button" style={{ borderColor: 'black' }}>
			{isBought && <BuyModal handleClose={() => setIsBought(false)}></BuyModal>}
			<p onClick={() => setIsBought(true)}>Buy</p>
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
				backgroundColor: 'whitesmoke',
				boxShadow: '2px 2px 10px lightgrey',
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
				<div style={{ float: 'right', padding: '5%' }}>
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
