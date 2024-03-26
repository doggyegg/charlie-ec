<template>
	<Header />
</template>

<script setup lang="jsx">
import { ref } from 'vue';

const Header = props => {
	console.log(props);
	return <div>{props.testVal.value}</div>;
};
</script>

<style></style>
