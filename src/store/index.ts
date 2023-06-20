import { createStore } from 'vuex';
import { auth, type AuthState } from "./auth.module";
import { cart } from "./cart.module";
import { StoreState } from '../models/state/app-state.state';

export type RootState = {
    auth: AuthState,
    cart: StoreState
}

const store = createStore<RootState>({
    modules: {
        auth,
        cart
    },
});

export default store;