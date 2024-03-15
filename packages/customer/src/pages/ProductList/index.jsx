import './index.scss';
import { useState, useEffect } from 'react';
import Banner from './Banner';
import ProductItem from './ProductItem';

export default function ProductList() {
	const [listData, setListData] = useState([]);
	const fetchListData = () => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve([
					{
						productName: '小熊毛绒玩具',
						price: '999.99',
						id: 1,
						imgUrl:
							'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg'
					},
					{
						productName: '电脑套装配件',
						price: '999.99',
						id: 2,
						imgUrl:
							'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg'
					},
					{
						productName: '迷你音响',
						price: '999.99',
						id: 3,
						imgUrl:
							'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg'
					},
					{
						productName: '手工钱包',
						price: '999.99',
						id: 4,
						imgUrl:
							'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Easter/Fuji_Easter_Dash_card_1x_EN._SY304_CB581341381_.jpg'
					},
					{
						productName: '小熊毛绒玩具',
						price: '999.99',
						id: 1,
						imgUrl:
							'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg'
					},
					{
						productName: '电脑套装配件',
						price: '999.99',
						id: 2,
						imgUrl:
							'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg'
					},
					{
						productName: '迷你音响',
						price: '999.99',
						id: 3,
						imgUrl:
							'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg'
					},
					{
						productName: '手工钱包',
						price: '999.99',
						id: 4,
						imgUrl:
							'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Easter/Fuji_Easter_Dash_card_1x_EN._SY304_CB581341381_.jpg'
					},
					{
						productName: '小熊毛绒玩具',
						price: '999.99',
						id: 1,
						imgUrl:
							'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v3._SY304_CB573698005_.jpg'
					},
					{
						productName: '电脑套装配件',
						price: '999.99',
						id: 2,
						imgUrl:
							'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg'
					},
					{
						productName: '迷你音响',
						price: '999.99',
						id: 3,
						imgUrl:
							'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg'
					},
					{
						productName: '手工钱包',
						price: '999.99',
						id: 4,
						imgUrl:
							'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Easter/Fuji_Easter_Dash_card_1x_EN._SY304_CB581341381_.jpg'
					}
				]);
			}, 1000);
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
