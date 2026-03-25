import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product)
        private productRepository:Repository<Product>
    ){}

    async create (productDto: ProductDto) {

        try {
            const product =  this.productRepository.create(productDto)
            return await this.productRepository.save(product);
        } catch (error) {
            console.log(error.message)
        }
    }
}
