import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductService {
	constructor(
		@InjectRepository(ProductEntity)
		private readonly productRepository: Repository<ProductEntity>
	) {}

	async create(data: Partial<ProductEntity>): Promise<Boolean> {
		this.productRepository.save(data);
		return true;
	}

	async queryAll(): Promise<ProductEntity[]> {
		return this.productRepository.find();
	}
}
