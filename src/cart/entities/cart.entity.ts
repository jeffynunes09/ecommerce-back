
import { CartItem } from "src/cart-item/entities/cart-item.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Cart {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() =>  User, user => user.carts)
    @JoinColumn()
    user:User;
    
    @OneToMany(() => CartItem, cartItem => cartItem.cart)
    items: CartItem[];

}