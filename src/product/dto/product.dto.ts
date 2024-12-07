import { IsNumber, IsString } from "class-validator";
import { OrderItem } from "src/order/entities/orderItem.entity";

export class ProductDto {

    @IsString()
    name:string;

    @IsString()
    description:string;

    @IsNumber()
    price : number;

    @IsNumber()
    discount: number;

    orderItems:OrderItem[];
}