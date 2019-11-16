import React from 'react';
import Listing from './Listing';
import '../App.scss';
import ProductFilter from './ProductFilter';

const MobileView = ({ categories, selectCategory, category, products }) => {
	return (
		<div style={{ width: window.innerWidth, height: window.innerHeight }}>
			<div style={{ height: '10vh' }}>
				<h1>D-HUB</h1>
			</div>
			<div
				style={{
					display: 'flex',
					height: '90vh',
					flexDirection: 'column',

					justifyContent: 'flex-start',
				}}
			>
				<div style={{ overflow: 'hidden', flex: category ? 0 : 1, transition: 'flex 0.5s ease-out' }}>
					<ProductFilter categories={categories} handleFilter={selectCategory} filter={category} />
				</div>
				<div
					style={{
						overflowY: 'scroll',
						flex: category ? 1 : 0,
						transition: 'flex 0.5s ease-out',
					}}
				>
					<div
						style={{
							width: '100%',
							height: '5vh',
							position: 'sticky',
							top: 0,
							background: 'white',
							zIndex: 1,
						}}
						onClick={() => selectCategory(null)}
					>
						<h2>{category}</h2>
					</div>
					<div style={{ width: '100%' }}>
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
