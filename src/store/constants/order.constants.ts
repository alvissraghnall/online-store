import { Order } from "@/generated";

export type OrderStateItem = Order;

export enum OrderMutations {
    GET_ORDERS = 'GET_ORDERS',
    ADD_ITEM = 'ADD_ITEM',
    GET_ORDERS_FALLBACK = 'GET_ORDERS_FALLBACK',
    ADD_ITEM_FALLBACK = 'ADD_ITEM_FALLBACK',
}

export enum OrderActions {
    ADD_ITEM = 'addItem',
    GET_ORDERS = 'getOrders',
    REMOVE_ITEM = "removeItem",
}

export enum OrderGetters {
    ITEMS = 'items',
}