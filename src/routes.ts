import {
    Home,
    ProductDetails,
    Products,
    Cart,
    Checkout,
    Signin,
    Signup,
    NotFound
} from "./pages";
import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/products",
        component: Products,
        meta: {
            transition: "slide-left"
        }
    },
    {
        path: "/products/:id",
        component: ProductDetails,
        meta: {
            transition: "slide-right"
        }
    },
    {
        path: "/cart",
        component: Cart,
        meta: {
            transition: "slide-right"
        }
    }, 
    {
        path: "/signin",
        component: Signin,
        meta: {
            transition: "slide-up"
        }
    }, 
    {
        path: "/signup",
        component: Signup,
        meta: {
            transition: "slide-down"
        }
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFound
    }
]