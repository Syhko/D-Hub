import React from 'react';

function chunkify(a, n, balanced) {
	if (n < 2) return [a];

	var len = a.length,
		out = [],
		i = 0,
		size;

	if (len % n === 0) {
		size = Math.floor(len / n);
		while (i < len) {
			out.push(a.slice(i, (i += size)));
		}
	} else if (balanced) {
		while (i < len) {
			size = Math.ceil((len - i) / n--);
			out.push(a.slice(i, (i += size)));
		}
	} else {
		n--;
		size = Math.floor(len / n);
		if (len % size === 0) size--;
		while (i < size * n) {
			out.push(a.slice(i, (i += size)));
		}
		out.push(a.slice(size * n));
	}

	return out;
}

const ProductLabel = ({ key, department, handleFilter, filter }) => {
	return (
		<div style={{ background: filter === department ? 'white' : 'grey' }} onClick={() => handleFilter(department)}>
			<p>{department}</p>
		</div>
	);
};

const ProductLabelList = ({ categories, handleFilter, filter }) => {
	return chunkify(categories, 2, false).map(c => (
		<div key={c} style={{ display: 'flex', flexDirection: 'column' }}>
			{c.map((cat, index) => (
				<ProductLabel
					key={cat}
					department={cat}
					handleFilter={department => handleFilter(department)}
					filter={filter}
				/>
			))}
		</div>
	));
};

const ProductFilter = ({ categories, handleFilter, filter }) => {
	return (
		<div
			style={{
				width: '100%',
				height: '50%',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-evenly',
			}}
		>
			<ProductLabelList
				categories={categories}
				handleFilter={department => handleFilter(department)}
				filter={filter}
			/>
		</div>
	);
};

export default ProductFilter;
