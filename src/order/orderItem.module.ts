import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/orderItem.entity';


@Module({
    imports: [TypeOrmModule.forFeature([OrderItem])],
    controllers: [],
    providers: [],
})
  export class OrderItemModule {}
  