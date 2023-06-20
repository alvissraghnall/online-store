import type { Module } from "vuex";
import { Product } from '../models/Product.model';
import { StoreState } from '../models/state/app-state.state';


export const cart: Module<StoreState, any> = {
    state: {
        cartItems: [],
    },
    mutations: {
        ADD_CART_ITEM (state, payload: Product) {
            const { description, category, rating, ...prod } = payload;
            const existingItem = state.cartItems.find(item => item.id === payload.id);

            if(!existingItem) {
                state.cartItems.push({
                    ...prod,
                    quantity: 1,
                    totalPrice: prod.price
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += prod.price;
            }

            console.log(state.cartItems);
        }
    },
    getters: {
        totalAmount: state => state.cartItems.reduce(
            (acc, curr) => acc + curr.price * curr.quantity, 0
        ),
        totalQuantity: state => state.cartItems.reduce(
            (acc, cartItem) => acc + cartItem.quantity, 0
        ),
        cartItems: state => state.cartItems,
    }
}