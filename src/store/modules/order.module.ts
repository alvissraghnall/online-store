import type { Module } from "vuex";
// import { Product } from '../models/Product.model';
import router from "@/router";
import { CartItem, NewOrder, Order, OrderControllerService, type Product, } from "@/generated";
import { AuthActions, OrderActions, OrderGetters, OrderMutations, OrderStateItem } from "../constants";
import { RootState, StoreNames } from "..";
import { toast } from "vue3-toastify";

export const order: Module<Record<"items", OrderStateItem[]>, RootState> = {
    namespaced: true,
    state: {
        items: [],
    },
    actions: {
        [OrderActions.ADD_ITEM] ({ commit, state, rootState }, payload: CartItem[]) {
            if (!rootState.auth.status.loggedIn) {
                router.push({ name: 'signin' });
            } else {
                const data: NewOrder = {
                    products: payload
                }
                OrderControllerService.orderControllerCreate(
                    data
                ).then(
                    response => {
                        commit(OrderMutations.ADD_ITEM, payload);
                        toast.info(
                            "Order created and is pending!", {
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
        [OrderActions.GET_ORDERS] ({ commit, state, rootState }) {
            OrderControllerService.orderControllerFindByUser()
                .then(
                    response => {
                        commit(OrderMutations.GET_ORDERS, response);
                    }
                ).catch(
                    error => {
                        commit(OrderMutations.GET_ORDERS_FALLBACK)
                    }
                )
        },
        [OrderActions.REMOVE_ITEM] ({ commit, state, rootState }, payload: OrderStateItem) {
            // OrderControllerService.favourites(
            //     payload.
            // )
        }
    },
    mutations: {
        [OrderMutations.ADD_ITEM] (state, payload: OrderStateItem) {
            // const { description, category, rating, ...prod } = payload;
            state.items?.push({
                ...payload
            });
            console.log(state.items);
            return;
        },
        [OrderMutations.GET_ORDERS] (state, payload: Order[]) {
            state.items = payload;
            console.log(state.items);
        },
        [OrderMutations.GET_ORDERS_FALLBACK] (state) {
            state.items = [];
        },
        [OrderMutations.ADD_ITEM_FALLBACK] (state) {}
    },
    getters: {
        // [OrderGetters.TOTAL_AMOUNT]: state => state.items?.reduce(
        //     (acc, curr) => acc + (curr.product?.price ?? 0) * curr.quantity, 0
        // ),
        // [OrderGetters.TOTAL_QUANTITY]: state => state.items?.reduce(
        //     (acc, favouritesItem) => acc + favouritesItem.quantity, 0
        // ),
        [OrderGetters.ITEMS]: state => state.items,
    }
}