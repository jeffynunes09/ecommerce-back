import { Exclude } from "class-transformer";
import { UUID } from "crypto";
import { Cart } from "src/cart/entities/cart.entity";
import { Order } from "src/order/entities/order.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";




@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: UUID;

    @Column()
    name:string;

    @Column()
    @Unique("email", ["email"])
    email:string;

    @Column()
    @Exclude()
    password:string;


    @Column({default: "user"})
    role: string;

    @OneToMany(() => Order, order => order.user)
    orders:Order[];

    @OneToMany(() => Cart, cart => cart.user)
    carts: Cart[];



}