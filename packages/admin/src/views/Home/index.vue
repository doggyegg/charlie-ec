<template>
	<Home />
</template>

<script setup lang="jsx">
import Header from './Header/index.vue';
import CButton from '@charlie-ec/base/src/vueComponents/base/Button/index.vue';
import { ref } from 'vue';

const Home = props => {
	const testVal = ref('parent');

	return (
		<div>
			<CButton content={<div>Test</div>}></CButton>
			<Header testVal={testVal}></Header>
		</div>
	);
};
</script>

<style></style>
