module.exports = {
	// 向上查找eslint配置时，root为true不再继续往上查找
	root: true,
	// 指定脚本的运行环境
	env: {
		node: true,
		browser: true,
		es2021: true
	},
	extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
	parserOptions: {
		parser: '@babel/eslint-parser',
		ecmaVersion: 12,
		allowImportExportEverywhere: true, // 不限制eslint对import使用位置
		ecmaFeatures: {
			jsx: false
		}
	},
	rules: {
		'vue/no-multiple-template-root': 'off',
		'vue/no-mutating-props': 'off',
		'vue/multi-word-component-names': 'off',
		'no-unused-vars': 'error',
		'no-var': 'error',
		'no-debugger': 'error',
		'no-mixed-spaces-and-tabs': 'off',
		'prefer-const': 'error',
		'vue/valid-define-props': 'off', // 允许在props中引用本地文件
		'no-console': ['error', { allow: ['info', 'error'] }],
		'import/no-extraneous-dependencies': 'off',
		'import/prefer-default-export': 'off',
		'no-plusplus': 'off'
	},
	globals: {}
};
