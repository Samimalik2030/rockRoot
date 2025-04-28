import { Product } from "./Product"


export interface ICart{
    user:string
    product:Product
    quantity:number
    _id:string
}