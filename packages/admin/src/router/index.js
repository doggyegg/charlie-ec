import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login/index.vue';
import Home from '../views/Home/index.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		}
	]
});

export default router;
