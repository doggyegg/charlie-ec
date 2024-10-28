import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ResponseInterceptor } from '../intercepters/responce';

async function bootstrap() {
	const app = await NestFactory.create(AppModule); // 项目根模块
	app.setGlobalPrefix('api'); // 设置全局路由前缀
	// 解决跨域
	app.enableCors({
		origin: ['http://localhost:3000', '*'], // 将其设置为你的前端运行的端口
		credentials: true // 允许携带凭证（如 Cookie）,允许携带cookie时，origin不能为*
	});
	// 统一返回值格式
	app.useGlobalInterceptors(new ResponseInterceptor());
	await app.listen(1994); // 启用端口号
	console.info('success bootstrap');
}

bootstrap();
