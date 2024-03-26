<template>
	<c-button />
</template>

<script setup lang="jsx">
import { ElButton } from 'element-plus';

const cButton = props => {
	const { content } = props;
	return (
		<ElButton>
			<content></content>
		</ElButton>
	);
};
</script>
