import { UUID } from "crypto";
import { Cart } from "src/cart/entities/cart.entity";
import { Order } from "src/order/entities/order.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";




@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: UUID;

    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    password:string;


    @Column({default: "user"})
    role: string;

    @OneToMany(() => Order, order => order.user)
    orders:Order[];

    @OneToMany(() => Cart, cart => cart.user)
    carts: Cart[];



}