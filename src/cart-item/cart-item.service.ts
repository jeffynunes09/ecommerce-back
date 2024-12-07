import { Injectable } from '@nestjs/common';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CartItem } from './entities/cart-item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartItemService {
  constructor(
    @InjectRepository(CartItem)
    private cartItemRepository:Repository<CartItem>
  ){}
  async create(createCartItemDto: CreateCartItemDto) {
   try {
    const cartItem = this.cartItemRepository.create({
      cart: { id: createCartItemDto.cartId},
      product:{ id :createCartItemDto.productId},
      quantity:createCartItemDto.quantity
      
    })

    return await this.cartItemRepository.save(cartItem)
   } catch (error) {
    console.log(error.message)
   }
  }

  findAll() {
    return `This action returns all cartItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cartItem`;
  }

  update(id: number, updateCartItemDto: UpdateCartItemDto) {
    return `This action updates a #${id} cartItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} cartItem`;
  }
}
