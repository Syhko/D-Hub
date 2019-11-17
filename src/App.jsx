import React from 'react';
import MapComponent from './components/MapComponent';
import Listing from './components/Listing';
import ProductFilter from './components/ProductFilter';
import './App.scss';
import data from './data/products.json';
import { isMobile } from 'react-device-detect';
import MobilePage from './Mobile/MobilePage';
import { Link } from 'react-router-dom';

const App = () => {
	const [category, setCategory] = React.useState("Women's dresses");
	const [selectedProductId, setSelectedProductId] = React.useState(null);

	const categories = [...new Set(data.map(product => product.department))];
	const selectCategory = department => {
		setCategory(department);
	};
	const locations = data.map(product => ({
		id: product.id,
		lat: product.lat,
		lng: product.lng,
		title: product.title,
		imageUrl: product.imageUrl,
	}));
	return !isMobile ? (
		<div className="app-wrapper">
			<div className="main-banner">
				<img src="savelet.png" className="logo-app" />
				<Link className="app-link" to="/">
					SAVELET
				</Link>
				<ProductFilter categories={categories} handleFilter={selectCategory} filter={category} />
			</div>
			<div className="body-wrapper">
				<Listing products={data} filter={category} handleHover={id => setSelectedProductId(id)} />
				<MapComponent locations={locations} selectedProductId={selectedProductId} />
			</div>
		</div>
	) : (
		<MobilePage categories={categories} selectCategory={selectCategory} products={data} category={category} />
	);
};

export default App;
