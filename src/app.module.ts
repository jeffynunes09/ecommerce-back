import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { OrderItemModule } from './order/orderItem.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "ecommerce.db",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    JwtModule.register({
      global:true,
      secret:process.env.SECRET,
      signOptions:{
        expiresIn:"1h"
      }
    }),
    OrderModule,
    ProductModule,
    UsersModule,
    CartModule,
    AuthModule,
    OrderItemModule
  ],
})
export class AppModule {}
