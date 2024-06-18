import { useState } from 'react';
import './index.scss';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

export default function Banner() {
	const [curBanner, setCurBanner] = useState(0);
	const [banners, setBanners] = useState([
		{ id: 1, imgUrl: 'https://img2.imgtp.com/2024/03/15/SLAr8is1.jpg', detailUrl: 'www.baidu.com' },
		{ id: 2, imgUrl: 'https://img2.imgtp.com/2024/03/15/wqtpSfb7.jpg', detailUrl: 'www.baidu.com' }
	]);
	// 切换轮播图
	const changeBanner = action => {
		setCurBanner(cur => {
			const result = cur + action;
			if (result > banners.length - 1) return 0;
			if (result < 0) return banners.length - 1;
			return result;
		});
	};
	return (
		<div className="product-list__banner">
			<LeftOutlined className="arrow left-arrow" onClick={() => changeBanner(-1)}></LeftOutlined>
			<div
				className="content"
				style={{ backgroundImage: `url("${banners[curBanner].imgUrl}")` }}></div>
			<RightOutlined
				className="arrow right-arrow"
				onClick={() => {
					changeBanner(1);
				}}></RightOutlined>
		</div>
	);
}
