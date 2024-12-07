import { IsString } from "class-validator";
import { CartItem } from "src/cart-item/entities/cart-item.entity";

export class CreateCartDto {



    @IsString()
    userId:string;

    items: CartItem[] 

    
}
