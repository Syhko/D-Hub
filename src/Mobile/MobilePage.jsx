import React from 'react';
import Listing from './Listing';
import '../App.scss';
import ProductFilter from './ProductFilter';

const MobileView = ({ categories, selectCategory, category, products }) => {
	return (
		<div style={{ width: window.innerWidth, height: window.innerHeight }}>
			<h1>D-HUB</h1>
			<ProductFilter categories={categories} handleFilter={selectCategory} filter={category} />
			<Listing products={products} filter={category} />
		</div>
	);
};
export default MobileView;
