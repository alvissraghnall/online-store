import { Profile } from "@/pages";
import { RouteRecordRaw } from "vue-router";

export enum UserRoutes {
    USER_PROFILE = "user-profile",
    // PROFILE = "profile",
}

export const userRoutes: RouteRecordRaw[] = [
    {
        name: UserRoutes.USER_PROFILE,
        path: "profile",
        component: Profile,
    },
]