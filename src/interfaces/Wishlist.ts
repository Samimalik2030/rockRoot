import { IUser } from "./IUser";
import { Product } from "./Product";

export interface Wishlist{
    _id:string,
    user:IUser,
    product:Product
}