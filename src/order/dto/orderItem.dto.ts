import { IsNotEmpty, IsNumber, IsUUID, Min } from 'class-validator';

export class OrderItemDto {
  @IsNotEmpty()
  @IsUUID()
  orderId: string; // ID do pedido relacionado

  @IsNotEmpty()
  @IsUUID()
  productId: string; // ID do produto relacionado

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  quantity: number; // Quantidade do produto

  @IsNotEmpty()
  @IsNumber()
  price: number; // Preço do produto
}
