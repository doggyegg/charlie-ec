export default {
	type: 'mysql', // 数据库类型，例如 'mysql', 'postgres', 'sqlite' 等
	host: 'localhost', // 数据库主机
	port: 3306, // 数据库端口
	username: 'root', // 数据库用户名
	password: '940308', // 数据库密码
	database: 'charlie_ec', // 数据库名称
	entities: ['dist/**/*.entity{.ts,.js}'], // 实体文件路径,通常是项目中的 TypeScript 文件或编译后的 JavaScript 文件
	synchronize: true // 是否自动同步数据库，在生产环境中应设为 false
};
