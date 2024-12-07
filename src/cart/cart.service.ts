import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { CreateCartDto } from './dto/cart.dto';

@Injectable()
export class CartService {

    constructor(
        @InjectRepository(Cart)
        private cartRepository:Repository<Cart>
    ){}


    async create(createCartDto:CreateCartDto){

        try {
            const cart = this.cartRepository.create({

                 
                user: { id: createCartDto.userId },
                items:createCartDto.items

                
            })

            return await this.cartRepository.save(cart)
        } catch (error) {
            console.log(error.message)
        }
    }
}
