import axios from 'axios';

function defaultResInter(res) {
	return res.data;
}

function defaultReqInter(req) {
	return req;
}

function requestCreator(config = {}) {
	const { baseURL, timeout, headers, reqInter, resInter } = config;
	const ins = axios.create({
		baseURL: baseURL || 'http://localhost:1994/api',
		timeout: timeout || 1000 * 60,
		headers: { Authorization: window.localStorage.TOKEN, ...headers },
		withCredentials: true
	});

	ins.interceptors.request.use(req =>
		typeof reqInter === 'function' ? reqInter(req) : defaultReqInter(req)
	);
	ins.interceptors.response.use(res =>
		typeof resInter === 'function' ? resInter(res) : defaultResInter(res)
	);

	return ins;
}

export default requestCreator;
