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
import store from "@/store";
import { AuthActions } from "@/store/constants";
import { AuthState } from "@/store/modules";
import { RootState, StoreNames } from "@/store";
import { ApiError } from "@/generated";

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
        beforeEnter: async (to, from, next) => {
            // const store = useStore<RootState>();
            const currUser = await store.dispatch(`${StoreNames.AUTH}/${AuthActions.GET_CURR_USER}`)
                .catch(error => {
                    if (error instanceof ApiError && error.name.includes("Unauthorized")) {
                        return next({ name: 'signin' });
                        // return false;
                    }
                });

            if (currUser) {
                next();
            }
            else next({ name: "signin"});
        },
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
            transition: "slide-up",
            requiresAuth: true
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