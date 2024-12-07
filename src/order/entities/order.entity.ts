import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderItem } from "./orderItem.entity";


@Entity()
export class Order {
@PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User, user => user.orders)
  @JoinColumn()
  user: User;

  @Column()
  totalPrice: number;  

  @Column()
  status: string;  
  @OneToMany(() => OrderItem, orderItem => orderItem.order)
  items?: OrderItem[];

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}