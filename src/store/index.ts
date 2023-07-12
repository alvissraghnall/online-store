import { createStore } from 'vuex';
// import { auth, type AuthState } from "./modules/auth.module";
import { cart, auth, type AuthState } from "./modules";
import { CartState } from './constants';
// import { StoreState } from '../models/state/app-state.state';

export type RootState = {
    auth: AuthState,
    cart: CartState
}

const store = createStore<RootState>({
    modules: {
        auth,
        cart
    },
});

export default store;