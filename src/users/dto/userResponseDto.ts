import { Exclude, Expose } from 'class-transformer';  // Importe os decorators
import { UUID } from 'crypto';
import { Order } from 'src/order/entities/order.entity';
import { Cart } from 'src/cart/entities/cart.entity';

export class UserResponseDto {
  
  @Expose()  // Exclui apenas os campos que você quer expor
  id: UUID;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Expose()
  role: string;

  @Expose()
  orders: Order[];

  @Expose()
  carts: Cart[];
}
