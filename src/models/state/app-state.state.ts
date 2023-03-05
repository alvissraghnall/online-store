import { Product } from "../Product.model";

export interface StoreState {
    cartItems: (Omit<Product, "description" | "rating" | "category"> & { quantity: number, totalPrice: number })[];
    // totalAmount: number;
    // totalQuantity: number;
}