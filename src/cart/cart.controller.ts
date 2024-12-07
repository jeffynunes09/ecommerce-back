import { Body, Controller, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService){}

  @Post()
  async create (@Body() createCartDto:CreateCartDto){

    try {
      const cart = await this.cartService.create(createCartDto)
      return cart
    } catch (error) {
      console.log(error.message)
    }
    
  }
}
