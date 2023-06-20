import {
    Home,
    ProductDetails,
    Products,
    Cart,
    Checkout,
    Signin,
    Signup,
    Profile,
    NotFound
} from "./pages";
import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: Home,
        name: "home",
    },
    {
        path: "/products",
        name: "products",
        component: Products,
        meta: {
            transition: "slide-left"
        }
    },
    {
        name: "product-details",
        path: "/products/:id",
        component: ProductDetails,
        meta: {
            transition: "slide-right"
        }
    },
    {
        path: "/cart",
        name: "cart",
        component: Cart,
        meta: {
            transition: "slide-right"
        }
    }, 
    {
        path: "/signin",
        name: "signin",
        component: Signin,
        meta: {
            transition: "slide-up"
        }
    }, {
        path: "/profile",
        name: "profile",
        component: Profile,
        meta: {
            transition: "slide-up"
        }
    }, 
    {
        path: "/signup",
        name: "signup",
        component: Signup,
        meta: {
            transition: "slide-down"
        }
    },
    {
        path: "/:pathMatch(.*)*",
        name: 'not-found',
        component: NotFound
    }
]