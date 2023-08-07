import { AuthControllerService, NewUser, User } from "../../generated";
// import type { NewUser } from '../generated/models/NewUser';
import type { Module } from "vuex";
import router from "@/router";
import { toast, type ToastOptions } from "vue3-toastify";
import { AuthActions, AuthGetters, AuthMutations } from "../constants";

export type AuthState = {
    status: {
        loggedIn: boolean,
        loginError: string | null
    },
    user: Partial<User> | User | null
}

type LoginUserCredentials = Pick<Required<NewUser>, "email" | "password">;

// const router = useRouter();
const userMail = localStorage.getItem('user');

const initialState = userMail
    ? 
        { 
            status: { 
                loggedIn: true, 
                loginError: null 
            }, user: {
                email: userMail,

            } 
        }
    :   { 
        status: { 
            loggedIn: false, 
            loginError: "" 
        }, 
        user: null 
    };

export const auth: Module<AuthState, any> = {
    namespaced: true,
    state: initialState,
    actions: {
        async [AuthActions.LOGIN] ({ commit }, user: LoginUserCredentials) {
            return AuthControllerService.authControllerSignIn(
                user
            ).then(
                response => {
                    console.log(response);
                    commit(AuthMutations.LOGIN_SUCCESS, user.email);
                    toast.success("Login successful!", {
                        autoClose: 4300,
                        hideProgressBar: false,
                        pauseOnHover: false,
                    } as ToastOptions);
                    setTimeout(() => {
                        router.push({ name: "home" });
                    }, 4800);
                    localStorage.setItem("user", user.email);
                    localStorage.setItem("JWT_TOKEN", response.token ?? '');
                    
                    return Promise.resolve(user);
                }
            ).catch (
                error => {
                    console.log(error.body, error.request);
                    commit(AuthMutations.LOGIN_FAILURE, error.message);
                    toast.error(error.body?.error?.message, {
                        autoClose: 9000,
                        hideProgressBar: false,
                        pauseOnHover: true,
                    } as ToastOptions)
                    return Promise.reject(error);
                }
            );
        },
        [AuthActions.LOGOUT] ({ commit }) {
            localStorage.removeItem("JWT_TOKEN");
            localStorage.removeItem('user');
            commit(AuthMutations.LOGOUT);

            router.push({ name: 'login' });
        },
        async [AuthActions.REGISTER] ({ commit }, user: NewUser) {
            return AuthControllerService.authControllerCreate(user).then(
                response => {
                    commit(AuthMutations.REGISTER_SUCCESS);
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
                    commit(AuthMutations.REGISTER_FAILURE);
                    toast.error(error.body?.error?.message, {
                        autoClose: 7700,
                        hideProgressBar: false,
                        pauseOnHover: true,
                    } as ToastOptions);
                    return Promise.reject(error);
                }
            );
        },
        async [AuthActions.GET_CURR_USER] ({ commit }) {
            return AuthControllerService.authControllerWhoAmI()
                .then(
                    response => {
                        commit(AuthMutations.GET_CURR_USER, response);
                        return Promise.resolve(response);
                    }
                ).catch(
                    error => {
                        commit(AuthMutations.GET_CURR_USER_FALLBACK, error);
                        return Promise.reject(error);
                    }
                )
        }
    },
    mutations: {
        [AuthMutations.LOGIN_SUCCESS] (state: AuthState, user: NewUser) {
            state.status.loggedIn = true;
            state.status.loginError = null;
            state.user = user;
        },
        [AuthMutations.LOGIN_FAILURE] (state: AuthState, payload: string) {
            state.status.loggedIn = false;
            state.status.loginError = payload;
            state.user = null;
        },
        [AuthMutations.LOGOUT] (state: AuthState) {
            state.status.loggedIn = false;
            state.user = null;
        },
        [AuthMutations.REGISTER_SUCCESS] (state: AuthState) {
            state.status.loggedIn = false;
        },
        [AuthMutations.REGISTER_FAILURE] (state: AuthState) {
            state.status.loggedIn = false;
        },
        [AuthMutations.GET_CURR_USER] (state, payload: User) {
            state.status.loginError = null;
            state.status.loggedIn = true;
            state.user = payload;
        },
        [AuthMutations.GET_CURR_USER_FALLBACK] (state, payload: Error) {
            state.status.loggedIn = false;
            state.status.loginError = payload.message;
            state.user = null;
        }
    },
    getters: {
        [AuthGetters.IS_LOGGED_IN]: (state) => state.status.loggedIn,
        [AuthGetters.LOGIN_ERROR]: state => state.status.loginError,
        [AuthGetters.CURRENT_USER]: state => state.user
    }
};
