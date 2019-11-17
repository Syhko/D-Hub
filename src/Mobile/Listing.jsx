import React from 'react';
import Product from './Product';

const ProductList = ({ products, filter, category, selectCategory }) => {
	return products
		.filter(product => product.department === filter)
		.map(product => (
			<Product
				productName={product.title}
				department={product.department}
				shopName={product.shop}
				productImg={product.imageUrl}
				newPrice={product.discountedPrice}
				originalPrice={product.originalPrice}
			/>
		));
};

const Listing = ({ products, filter, category, selectCategory }) => {
	return <ProductList products={products} filter={filter} />;
};

export default Listing;
