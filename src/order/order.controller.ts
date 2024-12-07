import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDto } from './dto/order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

@Post("create")
async createOrder (@Body() orderDto:OrderDto){

  try {
    const order = await this.orderService.create(orderDto)
    return order
  } catch (error) {
    console.log(error.message)
  }
}


  
}
