import { UUID } from "crypto";
import { OrderItem } from "src/order/entities/orderItem.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Product {



    @PrimaryGeneratedColumn()
    id: UUID;

    @Column()
    name: string;

    @Column("text")
    description: string;

    @Column()
    price: number;

    @Column("decimal", {nullable:true})
    discount: number

    @ManyToMany(() => OrderItem , orderItem => orderItem.product)
    
    @ManyToMany(() => OrderItem, orderItem => orderItem.product)
    orderItems: OrderItem[];


}