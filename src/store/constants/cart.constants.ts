import { Cart, Product } from "@/generated";

export type CartState = Pick<Cart, "items">;

export type CartStateItem = { quantity: number, product: Product, productId?: string };

export enum CartMutations {
    GET_CART = 'GET_CART',
    ADD_ITEM = 'ADD_ITEM',
    GET_CART_FALLBACK = 'GET_CART_FALLBACK',
    ADD_ITEM_FALLBACK = 'ADD_ITEM_FALLBACK',
    REMOVE_ITEM = 'REMOVE_ITEM'
}

export enum CartActions {
    ADD_ITEM = 'addItem',
    GET_CART = 'getCart',
    REMOVE_ITEM = "removeItem",
}

export enum CartGetters {
    ITEMS = 'items',
    TOTAL_QUANTITY = 'totalQuantity',
    TOTAL_AMOUNT = 'totalAmount',
}