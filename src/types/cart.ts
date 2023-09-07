import { Book } from "./book";

export interface CartItem extends Book {
    totalPrice:number;
    quantity:number;
}