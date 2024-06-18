import { Controller, Post, Get, Param, Body, Query } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
	constructor(private readonly ProductService: ProductService) {}
	@Post('createProduct')
	async createProduct(@Body() data) {
		return await this.ProductService.create(data);
	}
	@Get('list')
	async fetchProductList() {
		return await this.ProductService.queryAll();
	}
}
