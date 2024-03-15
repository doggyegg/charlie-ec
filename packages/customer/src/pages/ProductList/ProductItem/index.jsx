import './index.scss';
import { useNavigate } from 'react-router-dom';
export default function ProductItem(props) {
	const { item } = props;
	const { productName, price, id, imgUrl } = item;
	const navigate = useNavigate();
	const goDetail = id => {
		navigate(`/home/productDetail?id=${id}`);
	};

	return (
		<div className="product-list__product-item" onClick={() => goDetail(id)}>
			<div className="title">{productName}</div>
			<img src={imgUrl} className="product-img" />
			<div className="product-price">
				<span className="price-unit">￥</span>
				<span className="price-amount">{price}</span>
			</div>
		</div>
	);
}
