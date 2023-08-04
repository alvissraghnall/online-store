import { UserProfile, UserFavourites, UserTransactions, UserOrders, UserSettings } from "@/pages/user";
import { RouteRecordRaw } from "vue-router";

export enum UserRoutes {
    USER_PROFILE = "user_profile",
    USER_TRANSACTIONS = "user_transactions",
    USER_ORDERS = "user_orders",
    USER_SETTINGS = "user_settings",
    USER_FAVOURITES = "user_favourites",
    USER_LAYOUT = "user_layout"
}

export const userRoutes: RouteRecordRaw[] = [
    {
        name: UserRoutes.USER_LAYOUT,
        path: "",
        redirect: {name: UserRoutes.USER_PROFILE}
    },
    {
        name: UserRoutes.USER_PROFILE,
        path: "profile",
        component: UserProfile,
    },{
        name: UserRoutes.USER_FAVOURITES,
        path: "favourites",
        component: UserFavourites,
    },{
        name: UserRoutes.USER_ORDERS,
        path: "orders",
        component: UserOrders,
    },{
        name: UserRoutes.USER_SETTINGS,
        path: "settings",
        component: UserSettings,
    },{
        name: UserRoutes.USER_TRANSACTIONS,
        path: "transactions",
        component: UserTransactions,
    },
]