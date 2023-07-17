import type { Module } from "vuex";
// import { Product } from '../models/Product.model';
import router from "@/router";
import { FavouritesControllerService, type Product, } from "@/generated";
import { AuthActions, FavouriteActions, FavouriteGetters, FavouriteMutations, FavouriteStateItem } from "../constants";
import { RootState, StoreNames } from "..";
import { toast } from "vue3-toastify";

export const favourites: Module<Record<"items", FavouriteStateItem[]>, RootState> = {
    namespaced: true,
    state: {
        items: [],
    },
    actions: {
        [FavouriteActions.ADD_ITEM] ({ commit, state, rootState }, payload: Required<FavouriteStateItem> & Partial<FavouriteStateItem>) {
            if (!rootState.auth.status.loggedIn) {
                router.push({ name: 'signin' });
            } else {
                const data = {
                    productId: payload.id ?? "5xx4xx3xx2xx1xx"
                }
                FavouritesControllerService.favouritesControllerAdd(
                    data
                ).then(
                    response => {
                        commit(FavouriteMutations.ADD_ITEM, payload);
                        toast.success(
                            "Item added to favourites!", {
                                autoClose: 3400,
                                pauseOnHover: false
                            }
                        );
                    }
                ).catch(
                    error => {
                        if(error.body?.error.statusCode === 401) {
                            this.dispatch(`${StoreNames.AUTH}/${AuthActions.LOGOUT}`);
                        } else if (error.body?.error.statusCode === 500) {
                            toast.error(
                                "Something went wrong!", {
                                    autoClose: 3400,
                                    pauseOnHover: false
                                }
                            );
                        }
                    }
                )
            }
        },
        [FavouriteActions.GET_FAVOURITES] ({ commit, state, rootState }) {
            FavouritesControllerService.favouritesControllerFind()
                .then(
                    response => {
                        commit(FavouriteMutations.GET_FAVOURITES, response);
                    }
                ).catch(
                    error => {
                        commit(FavouriteMutations.GET_FAVOURITES_FALLBACK)
                    }
                )
        },
        [FavouriteActions.REMOVE_ITEM] ({ commit, state, rootState }, payload: FavouriteStateItem) {
            // FavouritesControllerService.favourites(
            //     payload.
            // )
        }
    },
    mutations: {
        [FavouriteMutations.ADD_ITEM] (state, payload: FavouriteStateItem) {
            // const { description, category, rating, ...prod } = payload;
            const existingItem = state.items?.find(item => item.id === payload.id);

            if(!existingItem) {
                state.items?.push({
                    ...payload
                });
            } else {
                state.items = state.items.filter(item => item.id !== payload.id);
            }
            console.log(state.items);
            return;
        },
        [FavouriteMutations.GET_FAVOURITES] (state, payload: Product[]) {
            state.items = payload;
            console.log(state.items);
        },
        [FavouriteMutations.GET_FAVOURITES_FALLBACK] (state) {
            state.items = [];
        },
        [FavouriteMutations.ADD_ITEM_FALLBACK] (state) {}
    },
    getters: {
        // [FavouriteGetters.TOTAL_AMOUNT]: state => state.items?.reduce(
        //     (acc, curr) => acc + (curr.product?.price ?? 0) * curr.quantity, 0
        // ),
        // [FavouriteGetters.TOTAL_QUANTITY]: state => state.items?.reduce(
        //     (acc, favouritesItem) => acc + favouritesItem.quantity, 0
        // ),
        [FavouriteGetters.ITEMS]: state => state.items,
    }
}