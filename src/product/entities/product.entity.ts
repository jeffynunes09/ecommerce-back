
import { OrderItem } from "src/order-item/entities/order-item.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Product {



    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column("text")
    description: string;

    @Column()
    price: number;

    @Column("decimal", {nullable:true})
    discount: number

    
    @ManyToMany(() => OrderItem, orderItem => orderItem.product)
    orderItems: OrderItem[];


}