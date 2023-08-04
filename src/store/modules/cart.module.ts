import type { Module } from "vuex";
// import { Product } from '../models/Product.model';
import router from "@/router";
import { CartControllerService, type Cart, type Product, CartItem } from "@/generated";
import { AuthActions, CartActions, CartGetters, CartMutations, CartState, CartStateItem } from "../constants";
import { RootState, StoreNames } from "..";
import { toast } from "vue3-toastify";

export const cart: Module<CartState, RootState> = {
    namespaced: true,
    state: {
        items: [],
    },
    actions: {
        [CartActions.ADD_ITEM] ({ commit, state, rootState }, payload: Required<CartStateItem> & Partial<Pick<CartStateItem, "quantity">>) {
            if (!rootState.auth.status.loggedIn) {
                router.push({ name: 'signin' });
            } else {
                const data = {
                    productId: payload.product.id,
                    quantity: payload.quantity
                }
                CartControllerService.cartControllerAddItem(
                    data
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
                            this.dispatch(`${StoreNames.AUTH}/${AuthActions.LOGOUT}`);
                        } else {

                        }
                    }
                )
            }
        },
        [CartActions.GET_CART] ({ commit, state, rootState }) {
            CartControllerService.cartControllerFindByUserId()
                .then(
                    response => {
                        commit(CartMutations.GET_CART, response);
                    }
                ).catch(
                    error => {
                        commit(CartMutations.GET_CART_FALLBACK)
                    }
                )
        },
        [CartActions.REMOVE_ITEM] ({ commit, state, rootState }, payload: CartItem) {
            CartControllerService.cartControllerRemoveItem(
                payload.productId ?? '0'
            ).then(
                response => {
                    commit(CartMutations.REMOVE_ITEM, payload);
                    toast.info(
                        "Item removed from cart!", {
                            autoClose: 3400,
                            pauseOnHover: false
                        }
                    );
                }
            ).catch(
                error => {
                    if(error.body?.error.statusCode === 401) {
                        this.dispatch(`${StoreNames.AUTH}/${AuthActions.LOGOUT}`);
                    } else if (error.body.error.statusCode === 404) {
                        toast.error(
                            "Item does not exist on cart!", {
                                autoClose: 3400,
                                pauseOnHover: false
                            }
                        );
                    } else if (error.body?.error.statusCode === 500) {
                        toast.error(
                            "Something went terribly wrong!", {
                                autoClose: 3400,
                                pauseOnHover: false
                            }
                        );
                    }
                }
            )
        }
    },
    mutations: {
        [CartMutations.ADD_ITEM] (state, payload: CartStateItem) {
            // const { description, category, rating, ...prod } = payload;
            const existingItem = state.items?.find(item => item.productId === payload.product.id);

            if(!existingItem) {
                state.items?.push({
                    ...payload,
                    quantity: payload.quantity ?? 1,
                })
            } else {
                existingItem.quantity += (payload.quantity ?? 1);
                // existingItem.totalPrice += prod.price;
            }

            console.log(state.items);
        },
        [CartMutations.REMOVE_ITEM] (state, payload: CartItem) {
            const itemIndex = state.items?.findIndex((item) => item.productId === payload.product?.id);
            if (itemIndex !== undefined && itemIndex >= 0 ) {
                state.items?.splice(itemIndex, 1);
            }
        },
        [CartMutations.GET_CART] (state, payload: Cart) {
            state.items = payload.items;
            console.log(state.items);
        },
        [CartMutations.GET_CART_FALLBACK] (state) {
            state.items = [];
        },
        [CartMutations.ADD_ITEM_FALLBACK] (state) {}
    },
    getters: {
        [CartGetters.TOTAL_AMOUNT]: state => state.items?.reduce(
            (acc, curr) => acc + (curr.product?.price ?? 0) * curr.quantity, 0
        ),
        [CartGetters.TOTAL_QUANTITY]: state => state.items?.reduce(
            (acc, cartItem) => acc + cartItem.quantity, 0
        ),
        [CartGetters.ITEMS]: state => state.items,
    }
}