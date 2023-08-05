import { createStore } from 'vuex';
// import { auth, type AuthState } from "./modules/auth.module";
import { cart, auth, type AuthState } from "./modules";
import { CartState } from './constants';
import { type Product } from '@/generated';
export * from "./store-names.enum";
// import { StoreState } from '../models/state/app-state.state';

export type RootState = {
    auth: AuthState,
    cart: CartState,
    favourite: Product
}

const store = createStore<RootState>({
    modules: {
        auth,
        cart
    },
});

export * from "./constants";
export default store;