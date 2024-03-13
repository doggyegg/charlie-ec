import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import store from '../store/index';

export default () => {
	const [routes, setRoutes] = useState([]);

	useEffect(() => {
		fetchMenus().then(res => {
			setRoutes(buildMenus(res));
		});
	}, []);

	// 路由权限走后端，暂时模拟接口
	const fetchMenus = () => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve([
					{
						name: '首页',
						path: '/',
						element: '/Home/index.jsx',
						children: [
							{
								name: 'page1',
								path: 'page1',
								element: '/Home/Page1'
							}
						]
					},
					{
						name: '个人中心',
						path: '/center',
						element: '/Center/index.jsx'
					}
				]);
			}, 1000);
		});
	};

	// 构建菜单路由
	const buildMenus = menus => {
		const recurFunc = menus => {
			menus.forEach(menu => {
				menu.component = lazy(() => {
					return import(`../pages${menu.element}`);
				});
				if (menu.children?.length) {
					recurFunc(menu.children);
				}
			});
		};

		recurFunc(menus);
		return menus;
	};

	// 递归渲染路由组件
	const recurRender = routes => {
		return routes.map(menu => {
			return (
				<Route
					path={menu.path}
					key={menu.path}
					element={<menu.component theme={store.theme} userInfo={store.userInfo}></menu.component>}
				>
					{menu.children ? recurRender(menu.children) : null}
				</Route>
			);
		});
	};

	return (
		<Suspense fallback={<div>loading...</div>}>
			<Routes>{recurRender(routes)}</Routes>
		</Suspense>
	);
};
