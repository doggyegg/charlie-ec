import { makeAutoObservable } from 'mobx';

const theme = makeAutoObservable({
	value: 'dark',
	setValue(val) {
		this.value = val;
	}
});

const userInfo = makeAutoObservable({
	value: { age: 18, name: 'zs', gender: 'man' },
	setValue(val) {
		this.value = val;
	}
});

export default {
	theme,
	userInfo
};
