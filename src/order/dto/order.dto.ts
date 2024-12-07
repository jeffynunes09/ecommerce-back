import { IsNotEmpty, IsNumber } from 'class-validator';
import { OrderItem } from 'src/order-item/entities/order-item.entity';


export class OrderDto {
  @IsNotEmpty()
  @IsNumber()
  totalPrice: number;

  @IsNotEmpty()
  status: string;

  items: OrderItem[];

  createdAt: Date;
}
