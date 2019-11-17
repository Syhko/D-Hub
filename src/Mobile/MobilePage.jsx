import React from 'react';
import Listing from './Listing';
import '../App.scss';
import ProductFilter from './ProductFilter';

const MobileView = ({ categories, selectCategory, category, products }) => {
	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				overflowY: 'hidden',
				position: 'fixed',
				top: 0,
			}}
		>
			<div
				style={{
					width: '100%',
					height: '10vh',
					padding: '1%',
				}}
			>
				<div style={{ margin: 'auto', width: '10vw' }}>
					<img src="savelet.png" style={{ width: '5vh', height: '5vh', margin: 'auto', zIndex: 5 }}></img>
				</div>
			</div>
			<div
				style={{
					width: '100%',
					display: 'flex',
					height: '89vh',
					flexDirection: 'column',
					justifyContent: 'flex-start',
					overlow: 'hidden',
				}}
			>
				<div
					style={{
						overflow: 'hidden',
						flex: category ? 0 : 1,
						transition: 'flex 0.5s ease-out',
						width: '100%',
					}}
				>
					<ProductFilter categories={categories} handleFilter={selectCategory} filter={category} />
				</div>
				<div
					style={{
						overflow: 'hidden',
						flex: category ? 1 : 0,
						opacity: category ? 1 : 0,
						transition: 'flex 0.5s ease-out,opacity 0.5 ease-out',
					}}
				>
					<div
						style={{
							width: '100%',
							height: '5vh',
							background: 'white',
							zIndex: 1,
							marginLeft: '2%',
							borderBottom: '2px solid lightgrey',
							opacity: category ? 1 : 0,
							transition: 'opacity 0.5s ease-in',
						}}
						onClick={() => selectCategory(null)}
					>
						<div>
							<h4>☰ {category}</h4>
						</div>
					</div>
					<div style={{ width: '100%', overflowY: 'scroll', height: '150vh' }}>
						<Listing
							selectCategory={selectCategory}
							category={category}
							products={products}
							filter={category}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
export default MobileView;
