module.exports = {
	// 向上查找eslint配置时，root为true不再继续往上查找
	root: true,
	// 指定脚本的运行环境
	env: {
		node: true
	},
	extends: ['eslint:recommended'],
	// 解析器选项。指定你想支持的语言，默认支持es5。指定啥语言，eslint就按照啥语法检查。
	parserOptions: {
		parser: '@babel/eslint-parser'
	},
	rules: {
		'no-unused-vars': 'error',
		'no-var': 'error',
		'no-debugger': 'error',
		'no-mixed-spaces-and-tabs': 'off'
	}
};
