import { IsNumber, IsString } from "class-validator";
import { OrderItem } from "src/order-item/entities/order-item.entity";

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