import { AuthControllerService, NewUser } from "../../generated";
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

export const auth: Module<AuthState, any> = {
    namespaced: true,
    state: initialState,
    actions: {
        async login({ commit }, user: LoginUserCredentials) {
            return AuthControllerService.authControllerSignIn(
                user
            ).then(
                response => {
                    console.log(response);
                    commit('loginSuccess', user.email);
                    toast.success("Login successful!", {
                        autoClose: 4300,
                        hideProgressBar: false,
                        pauseOnHover: false,
                    } as ToastOptions);
                    router.push("/profile");
                    localStorage.setItem("user", user.email);
                    localStorage.setItem("JWT_TOKEN", response.token ?? '');
                    
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
        },
        logout({ commit }) {
            localStorage.removeItem("JWT_TOKEN");
            localStorage.removeItem('user');
            commit('logout');

            router.push({ name: 'login' });
        },
        async register({ commit }, user: NewUser) {
            return AuthControllerService.authControllerCreate(user).then(
                response => {
                    commit('registerSuccess');
                    toast.success("Registration successful!", {
                        autoClose: 4300,
                        hideProgressBar: false,
                        pauseOnHover: false,
                    } as ToastOptions);
                    setTimeout(() => {
                        router.push({ name: "signin" });
                    }, 5000);
                    
                    return Promise.resolve(user);
                },
                error => {
                    commit('registerFailure');
                    toast.error(error.body?.error?.message, {
                        autoClose: 7700,
                        hideProgressBar: false,
                        pauseOnHover: true,
                    } as ToastOptions);
                    return Promise.reject(error);
                }
            );
        }
    },
    mutations: {
        loginSuccess(state: AuthState, user: NewUser) {
            state.status.loggedIn = true;
            state.status.loginError = null;
            state.user = user.email;
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
