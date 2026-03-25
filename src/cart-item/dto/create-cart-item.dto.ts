import { IsNumber, IsString } from "class-validator";

export class CreateCartItemDto {




    @IsString()
    cartId:string;

    @IsString()
    productId:string;

    @IsNumber()
    quantity:number;
}
