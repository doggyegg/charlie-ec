import { makeAutoObservable } from 'mobx';

const theme = makeAutoObservable({
	value: 'dark',
	setValue(val) {
		this.value = val;
	}
});

const userInfo = makeAutoObservable({
	value: null,
	setValue(val) {
		this.value = val;
	}
});

export default {
	theme,
	userInfo
};
