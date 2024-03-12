import axios from 'axios';

function requestCreator(config = {}) {
	const { baseURL, timeout, headers, reqInter, resInter } = config;
	const ins = axios.create({
		baseURL: baseURL || 'http://localhost:6666/',
		timeout: timeout || 1000 * 60,
		headers: { Authorization: window.localStorage.TOKEN, ...headers },
		withCredentials: true
	});

	ins.interceptors.request.use(req => {
		return typeof reqInter === 'function' ? reqInter(req) : defaultReqInter(req);
	});
	ins.interceptors.response.use(res => {
		return typeof resInter === 'function' ? resInter(res) : defaultResInter(res);
	});

	return ins;
}

function defaultReqInter(req) {
	return req;
}

function defaultResInter(res) {
	return res;
}

export default requestCreator;
