import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/orderItem.entity';
import { OrderItemModule } from './orderItem.module';

@Module({
  imports:[TypeOrmModule.forFeature([Order])],
  controllers: [OrderController],
  providers: [OrderService,OrderItemModule],
})
export class OrderModule {}
