import { Cart } from "src/cart/entities/cart.entity";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class CartItem {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Cart, cart => cart.items)
  @JoinColumn()
  cart: Cart;

  @ManyToOne(() => Product, product => product.orderItems)
  @JoinColumn()
  product: Product;

  @Column()
  quantity: number; 

}