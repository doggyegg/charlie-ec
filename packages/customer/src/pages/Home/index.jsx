import store from '../../store';
import Header from './Header';
import Menu from './Menu';
import { Outlet } from 'react-router-dom';
import './index.scss';

export default function Home() {
	return (
		<div className="home">
			<Header userInfo={store.userInfo}></Header>
			<Menu></Menu>
			<div className="content">
				<Outlet></Outlet>
			</div>
		</div>
	);
}
