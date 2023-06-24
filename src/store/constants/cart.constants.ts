import { Cart } from "@/generated";

export type CartState = Pick<Cart, "items">;

export enum CartMutations {
    GET_CART = 'GET_CART',
    ADD_ITEM = 'ADD_ITEM',
    GET_CART_FALLBACK = 'GET_CART_FALLBACK',
    ADD_ITEM_FALLBACK = 'ADD_ITEM_FALLBACK',
}

export enum CartActions {
    ADD_ITEM = 'addItem',
    GET_CART = 'getCart',
    REMOVE_ITEM = "removeItem",
}