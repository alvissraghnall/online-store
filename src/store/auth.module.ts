import AuthService from '../services/auth.service';
import { AuthControllerService, NewUser } from "../generated";
// import type { NewUser } from '../generated/models/NewUser';
import type { Module } from "vuex";
import router from "@/router";
import { toast, type ToastOptions } from "vue3-toastify";

export type AuthState = {
    status: {
        loggedIn: boolean,
        loginError: string | null
    },
    user: string | null
}

type LoginUserCredentials = Pick<Required<NewUser>, "email" | "password">;

// const router = useRouter();
const user = localStorage.getItem('user');

const initialState = user
    ? 
        { status: { 
            loggedIn: true, 
            loginError: null 
        }, user }
    : { status: { 
        loggedIn: false, 
        loginError: "" 
    }, user: null };

export const auth: Module<any, any> = {
    namespaced: true,
    state: initialState,
    actions: {
        async login({ commit }, user: LoginUserCredentials) {
            return AuthControllerService.authControllerSignIn(
                user
            ).then(
                response => {
                    console.log(response);
                    commit('loginSuccess', response.token);
                    toast.success("Login successful!", {
                        autoClose: 4300,
                        hideProgressBar: false,
                        pauseOnHover: false,
                    } as ToastOptions);
                    router.push("/profile");
                    return Promise.resolve(user);
                }
            ).catch (
                error => {
                    console.log(error.body, error.request);
                    commit('loginFailure', error.message);
                    toast.error(error.body?.error?.message, {
                        autoClose: 9000,
                        hideProgressBar: false,
                        pauseOnHover: true,
                    } as ToastOptions)
                    return Promise.reject(error);
                }
            );
            
            // .then(
            //     user => {
            //         commit('loginSuccess', user);
            //         return Promise.resolve(user);
            //     },
            //     error => {
            //         commit('loginFailure');
            //         return Promise.reject(error);
            //     }
            // );
        },
        logout({ commit }) {
            AuthService.logout();
            commit('logout');

            router.push("/login");
        },
        register({ commit }, user: NewUser) {
            return AuthService.register(user).then(
                response => {
                    commit('registerSuccess');
                    return Promise.resolve(response.data);
                },
                error => {
                    commit('registerFailure');
                    return Promise.reject(error);
                }
            );
        }
    },
    mutations: {
        loginSuccess(state: AuthState, user: NewUser) {
            state.status.loggedIn = true;
            state.status.loginError = null;
            state.user = user.email ?? "";
        },
        loginFailure(state: AuthState, payload: string) {
            state.status.loggedIn = false;
            state.status.loginError = payload;
            state.user = null;
        },
        logout(state: AuthState) {
            state.status.loggedIn = false;
            state.user = null;
        },
        registerSuccess(state: AuthState) {
            state.status.loggedIn = false;
        },
        registerFailure(state: AuthState) {
            state.status.loggedIn = false;
        }
    }
};
