import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
export class ProductEntity {
	@PrimaryGeneratedColumn()
	id: number; // 标记为主列，值自动生成

	@Column()
	productName: string; // 产品名称

	@Column({ default: 1 })
	price: number; // 产品单价

	@Column()
	imgUrl: string; // 产品主图地址
}
