import {
    Home,
    ProductDetails,
    Products,
    MakeOrder,
    Checkout,
    Signin,
    Signup,
    NotFound,
    Contact,
    About,
    PaymentSuccess
} from "../pages";
import { type RouteRecordRaw } from "vue-router";
import { userRoutes } from "./user.route";
import { UserLayout } from "@/components/dashboard";
import store from "@/store";
import { AuthActions, AuthGetters } from "@/store/constants";
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
        path: "/about",
        name: "about",
        component: About,
        meta: {
            transition: "slide-left"
        }
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact,
        meta: {
            transition: "slide-right"
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

            if (currUser && store.getters[`${StoreNames.AUTH}/${AuthGetters.IS_LOGGED_IN}`]) {
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
        
        path: "/payment-success",
        name: "payment-success,",
        component: PaymentSuccess,
        props: (route) => ({ reference: route.query.reference }),
        meta: {
            transition: "slide-up",
            requiresAuth: true
        },
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