<template>
	<Login></Login>
</template>

<script setup lang="jsx">
import { ref, onMounted } from 'vue';
const val = ref('zs');

const changeVal = _val => {
	val.value = _val;
};

const Login = () => {
	return (
		<div
			className="login"
			onClick={() => {
				changeVal('ww');
			}}
		>
			{val.value}
		</div>
	);
};
</script>

<style lang="scss" scoped>
.login {
	color: red;
}
</style>
