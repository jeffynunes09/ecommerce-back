import { Product } from "src/product/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";

@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Order, order => order.items)
  @JoinColumn()
  order: Order;

  @ManyToOne(() => Product, product => product.orderItems)
  @JoinColumn()
  product: Product;

  @Column()
  quantity: number; 

  @Column('decimal')
  price: number;  

}