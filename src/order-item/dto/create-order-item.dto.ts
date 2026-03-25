import { IsNotEmpty, IsNumber, IsUUID, Min } from 'class-validator';

export class OrderItemDto {
  @IsNotEmpty()
  @IsUUID()
  orderId: string; 

  @IsNotEmpty()
  @IsUUID()
  productId: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  quantity: number; 

  @IsNotEmpty()
  @IsNumber()
  price: number; 
}
