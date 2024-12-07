import { Injectable } from '@nestjs/common';
import { OrderItemDto } from './dto/create-order-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderItem } from './entities/order-item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderItemService {
  constructor(

    @InjectRepository(OrderItem)
    private orderItemRepository:Repository<OrderItem>
  ){}
  async create(orderItemDto: OrderItemDto) {

    try {
      
      const orderItem = this.orderItemRepository.create({
        order: { id: orderItemDto.orderId },
        product: { id: orderItemDto.productId }, 
        quantity: orderItemDto.quantity,
        price: orderItemDto.price,
      })
    return await this.orderItemRepository.save(orderItem)
    } catch (error) {
      console.log(error.message)
    }
   
  }

  findAll() {
    return `This action returns all orderItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderItem`;
  }


  remove(id: number) {
    return `This action removes a #${id} orderItem`;
  }
}
