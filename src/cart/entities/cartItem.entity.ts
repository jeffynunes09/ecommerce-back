import { Product } from "src/product/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cart } from "./cart.entity";

@Entity()
export class CartItem {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cart, cart => cart.items)
  @JoinColumn()
  cart: Cart;

  @ManyToOne(() => Product, product => product.orderItems)
  @JoinColumn()
  product: Product;

  @Column()
  quantity: number;  // Quantidade do produto no carrinho

}