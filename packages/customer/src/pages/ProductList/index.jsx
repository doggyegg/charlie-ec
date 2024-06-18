import './index.scss';
import { useState, useEffect } from 'react';
import Banner from './Banner';
import ProductItem from './ProductItem';
import request from '@/request';

export default function ProductList() {
	const [listData, setListData] = useState([]);
	const fetchListData = () => {
		return new Promise(resolve => {
			request.get('/product/list').then(({ code, data } = {}) => {
				if (code === 0) {
					resolve(data);
				}
			});
		});
	};

	useEffect(() => {
		fetchListData().then(data => {
			setListData(data);
		});
	}, []);
	return (
		<div className="product-list">
			<Banner />
			<div className="product-content">
				{listData.map(item => {
					return <ProductItem item={item} key={item.id} />;
				})}
			</div>
		</div>
	);
}
