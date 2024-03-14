import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
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
						path: '/home',
						element: '/Home/index.jsx',
						children: [
							{
								name: 'productList',
								path: 'productList',
								element: '/ProductList'
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
				<Route path={menu.path} key={menu.path} element={<menu.component />}>
					{menu.children ? recurRender(menu.children) : null}
				</Route>
			);
		});
	};

	return (
		<Suspense fallback={<div>loading...</div>}>
			<Routes>
				<Route path="/" element={<Navigate to="/home/productList" />}></Route>
				<Route path="/home" element={<Navigate to="/home/productList" />}></Route>
				{recurRender(routes)}
			</Routes>
		</Suspense>
	);
};
