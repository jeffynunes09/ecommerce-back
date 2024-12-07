import { IsNotEmpty, IsNumber } from 'class-validator';
import { OrderItem } from '../entities/orderItem.entity';

export class OrderDto {
  @IsNotEmpty()
  @IsNumber()
  totalPrice: number;

  @IsNotEmpty()
  status: string;

  items: OrderItem[];

  createdAt: Date;
}
