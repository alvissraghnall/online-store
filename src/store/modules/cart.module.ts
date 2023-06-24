import type { Module } from "vuex";
// import { Product } from '../models/Product.model';
import router from "@/router";
import { CartControllerService, type Cart, type Product, CartItem } from "@/generated";
import { CartActions, CartMutations, CartState } from "../constants";
import { RootState } from "..";
import { toast } from "vue3-toastify";

export const cart: Module<CartState, RootState> = {
    namespaced: true,
    state: {
        items: [],
    },
    actions: {
        [CartActions.ADD_ITEM] ({ commit, state, rootState }, payload: CartItem) {
            if (!rootState.auth.status.loggedIn) {
                router.push({ name: 'signin' });
            } else {
                CartControllerService.cartControllerAddItem(
                    payload
                ).then(
                    response => {
                        commit(CartMutations.ADD_ITEM, payload);
                        toast.success(
                            "Item added to cart!", {
                                autoClose: 3400,
                                pauseOnHover: false
                            }
                        );
                    }
                ).catch(
                    error => {
                        if(error.body?.error.statusCode === 401) {
                            this.dispatch("auth/logout");
                        } else {

                        }
                    }
                )
            }
        },
        [CartActions.GET_CART] ({ commit, state, rootState }, payload: Cart) {
            CartControllerService.cartControllerFindByUserId()
                .then(
                    response => {
                        commit(CartMutations.GET_CART, payload);
                    }
                ).catch(
                    error => {
                        commit(CartMutations.GET_CART_FALLBACK)
                    }
                )
        },
        [CartActions.REMOVE_ITEM] ({ commit, state, rootState }, payload: CartItem) {
            // CartControllerService.cart(
            //     payload.
            // )
        }
    },
    mutations: {
        [CartMutations.ADD_ITEM] (state, payload: CartItem) {
            // const { description, category, rating, ...prod } = payload;
            const existingItem = state.items?.find(item => item.productId === payload.productId);

            if(!existingItem) {
                state.items?.push({
                    ...payload,
                    quantity: payload.quantity ?? 1,
                })
            } else {
                existingItem.quantity += payload.quantity;
                // existingItem.totalPrice += prod.price;
            }

            console.log(state.items);
        },
        [CartMutations.GET_CART] (state, payload: Cart) {
            state.items = payload.items;
        },
        [CartMutations.GET_CART_FALLBACK] (state) {
            state.items = [];
        },
        [CartMutations.ADD_ITEM_FALLBACK] (state) {}
    },
    getters: {
        totalAmount: state => state.items?.reduce(
            (acc, curr) => acc + (curr.product?.price ?? 0) * curr.quantity, 0
        ),
        totalQuantity: state => state.items?.reduce(
            (acc, cartItem) => acc + cartItem.quantity, 0
        ),
        items: state => state.items,
    }
}