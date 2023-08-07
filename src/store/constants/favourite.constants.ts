import { Product } from "@/generated";

export type FavouriteStateItem = Product;

export enum FavouriteMutations {
    GET_FAVOURITES = 'GET_FAVOURITES',
    TOGGLE_ITEM = 'TOGGLE_ITEM',
    GET_FAVOURITES_FALLBACK = 'GET_FAVOURITES_FALLBACK',
    TOGGLE_ITEM_FALLBACK = 'TOGGLE_ITEM_FALLBACK',
}

export enum FavouriteActions {
    TOGGLE_ITEM = 'toggleItem',
    GET_FAVOURITES = 'getFavourites',
    // REMOVE_ITEM = "removeItem",
}

export enum FavouriteGetters {
    ITEMS = 'items',
    TOTAL_QUANTITY = 'totalQuantity',
    // TOTAL_AMOUNT = 'totalAmount',
}