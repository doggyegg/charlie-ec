import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import dbConfig from '../config/dbConfig';

@Module({
	// 如果需要用到别的模块的依赖需要在此导入
	imports: [ProductModule, TypeOrmModule.forRoot(dbConfig as TypeOrmModuleOptions)],
	// 处理http请求的路由，和客户端的交互
	controllers: [AppController],
	// 处理业务逻辑、数据，在此注册后在controller中使用，无需new实例
	providers: [AppService],
	// 提供给其它模块使用的逻辑在此暴露
	exports: []
})
export class AppModule {}
