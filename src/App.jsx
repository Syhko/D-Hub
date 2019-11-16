import React from 'react';
import MapComponent from './components/MapComponent';
import Listing from './components/Listing';
import ProductFilter from './components/ProductFilter';
import './App.scss';
import data from './data/products.json';
import { isMobile } from 'react-device-detect';
import MobilePage from './Mobile/MobilePage';

const App = () => {
	const [category, setCategory] = React.useState('Clothing');
	const categories = [...new Set(data.map(product => product.department))];
	const selectCategory = department => {
		setCategory(department);
	};
	const locations = data.map(product => ({ lat: product.lat, lng: product.lng }));
	return !isMobile ? (
		<div className="app-wrapper">
			<div className="main-banner">
				<h1>D-HUB</h1>
				<ProductFilter categories={categories} handleFilter={selectCategory} filter={category} />
			</div>
			<div className="body-wrapper">
				<Listing products={data} filter={category} />
				<MapComponent locations={locations} />
			</div>
		</div>
	) : (
		<MobilePage
			categories={categories}
			selectCategory={selectCategory}
			products={data}
			category={category}
		></MobilePage>
	);
};

export default App;
