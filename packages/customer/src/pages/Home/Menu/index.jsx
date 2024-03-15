import './index.scss';
import { UnorderedListOutlined } from '@ant-design/icons';

export default function Menu() {
	return (
		<div className="home__menu">
			<div className="all">
				<UnorderedListOutlined />
				<span>全部</span>
			</div>
			<div>今日特价</div>
			<div>秒杀活动</div>
			<div>礼品卡</div>
			<div>客户服务</div>
		</div>
	);
}
