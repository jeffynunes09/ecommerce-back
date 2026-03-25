import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderDto } from './dto/order.dto';
@Injectable()
export class OrderService {


    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository<Order>,
     
    ) { }

    async create(orderDto: OrderDto) {

        try {
            const order = this.orderRepository.create(orderDto)
            return await this.orderRepository.save(order)
        } catch (error) {

            console.log(error.message)
        }
    }

}
