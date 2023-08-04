<template>
    <main class="mt-20 my-4 lg:p-3 lg:ml-40">
        <div class="container mx-auto -p-3 font-poppins">
            <h3 class="text-lg lg:text-3xl font-semibold mt-5 lg:-mt-4 ml-5 lg:ml-0"> Personal Information</h3>
            <p class="mt-2 text-sm text-neutral-400 ml-4 lg:ml-0">
                View and manage your personal information - including email address, phone
                numbers, & where you can be contacted.
            </p>

            <div v-motion-slide-visible-right class="m-4 p-5 lg:-ml-1">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div v-for="(item, idx) in data" :key="idx" class="rounded-md border-y hover:bg-purple-200 cursor-pointer border-purple-300 border-solid transition duration-200 ease-out">
                        <div class="flex flex-col p-2 gap-[0.38rem]">
                            <div class="flex justify-between">
                                <h6 class="font-medium text-base lg:leading-2 capitalize">{{ item.field }}</h6>
                                <OhVueIcon
                                    :name="item.icon"
                                    fill="rgb(147, 51, 234)"
                                    class="w-8 h-8"
                                />
                            </div>
                            <p class="font-normal text-sm font-dm_sans">{{ item.value }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </main>
</template>

<script setup lang="ts">
    import {
        OhVueIcon, addIcons
    } from "oh-vue-icons";
    import {
        CoMinutemailer, GiRotaryPhone, GiGlobe, FaUserAlt
    } from "oh-vue-icons/icons";
    import { type RootState, StoreNames } from "@/store";
    import { onMounted, ref, computed } from "vue";
    import { type User } from "@/generated";
    import { AuthActions, AuthGetters } from "@/store/constants";
    import { toast } from "vue3-toastify";
    import { useStore } from "vuex";
    

    addIcons(
        CoMinutemailer, GiRotaryPhone, GiGlobe, FaUserAlt
    );
    
    const store = useStore<RootState>();
    const user: User = store.getters[`${StoreNames.AUTH}/${AuthGetters.CURRENT_USER}`];
    const data = [
        { field: "name", value: user.firstName + " " + user.lastName, icon: "fa-user-alt" },
        { field: "email", value: user.email, icon: "co-minutemailer" },
        { field: "phone", value: user.phone, icon: "gi-rotary-phone" },
        { field: "country, region", value: "israel, tbilisi", icon: "gi-globe" },
    ];

    const getUserDetails = async () => {
        let currUser: User;
        try {
            await store.dispatch(`${StoreNames.AUTH}/${AuthActions.GET_CURR_USER}`);
        } catch (err) {
            let error = err as Error;
            toast.error(error.message, {
                autoClose: 6400,
                pauseOnHover: true
            });
        }
    }

    onMounted(getUserDetails);
</script>