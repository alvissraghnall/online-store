import { Product } from "@/generated";

export type FavouriteStateItem = Product;

export enum FavouriteMutations {
    GET_FAVOURITES = 'GET_FAVOURITES',
    ADD_ITEM = 'ADD_ITEM',
    GET_FAVOURITES_FALLBACK = 'GET_FAVOURITES_FALLBACK',
    ADD_ITEM_FALLBACK = 'ADD_ITEM_FALLBACK',
}

export enum FavouriteActions {
    ADD_ITEM = 'addItem',
    GET_FAVOURITES = 'getFavourites',
    REMOVE_ITEM = "removeItem",
}

export enum FavouriteGetters {
    ITEMS = 'items',
    // TOTAL_QUANTITY = 'totalQuantity',
    // TOTAL_AMOUNT = 'totalAmount',
}