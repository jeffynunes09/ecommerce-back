import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto } from './dto/product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}




  @Post("create")
  async create (@Body() productDto:ProductDto){
    
    try {
      const product = await this.productService.create(productDto)
      return product
    } catch (error) {
      console.log(error.message)
    }
  }
  

}
