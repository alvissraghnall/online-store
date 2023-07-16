import {
    Home,
    ProductDetails,
    Products,
    MakeOrder,
    Checkout,
    Signin,
    Signup,
    NotFound
} from "../pages";
import { type RouteRecordRaw } from "vue-router";
import { userRoutes } from "./user.route";
import { UserLayout } from "@/components/dashboard";

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
        path: "/make-order",
        name: "make-order",
        component: MakeOrder,
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
        path: "/user",
        name: "user",
        component: UserLayout,
        meta: {
            transition: "slide-up"
        },
        children: userRoutes,
        // beforeEnter: 
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