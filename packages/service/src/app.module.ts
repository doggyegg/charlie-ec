import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import dbConfig from '../config/dbConfig';

@Module({
	// 如果需要用到别的模块的依赖需要在此导入
	imports: [ProductModule, TypeOrmModule.forRoot(dbConfig as TypeOrmModuleOptions)],
	// 提供给其它模块使用的逻辑在此暴露
	exports: []
})
export class AppModule {}
