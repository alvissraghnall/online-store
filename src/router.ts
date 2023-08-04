import { createRouter, createWebHistory } from "vue-router";
import { routes } from '@/routes';
import store, { StoreNames } from "@/store";
import { ApiError } from "@/generated";
import { AuthActions } from "@/store/constants";

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach(async (to, from, next) => {
    console.log(to);
    if (to.matched.some(record => record.meta.requiresAuth)) {
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
    }
    else next();
})

export default router;