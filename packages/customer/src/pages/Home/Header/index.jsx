import './index.scss';
import CInput from '@charlie-ec/base/src/reactComponents/base/CInput';
import { observer } from 'mobx-react-lite';
import { ShoppingCartOutlined } from '@ant-design/icons';

function Header(props) {
	const { userInfo } = props;
	const selectData = {
		defaultValue: '',
		options: [
			{ label: '全部分类', value: '' },
			{ label: '成人用品', value: 'adult' },
			{ label: '生活用品', value: 'daily' }
		]
	};

	const LoginStatus = () => {
		const { value } = userInfo;

		return value?.name ? (
			<div>{value.name}</div>
		) : (
			<div className="login-trigger">
				<div>您好,</div>
				<div>点击登录</div>
			</div>
		);
	};

	const handleSearch = () => {
		debugger;
	};

	return (
		<div className="home__header">
			<div className="icon">Charlie-EC</div>
			<div className="address">
				<div>配送至</div>
				<div>中国</div>
			</div>
			<CInput selectData={selectData} onSearch={handleSearch} />
			{<LoginStatus />}
			<ShoppingCartOutlined style={{ marginLeft: '16px', fontSize: '24px' }}></ShoppingCartOutlined>
		</div>
	);
}

export default observer(Header);
