<template>
    <intro-head 
        mini-head-text="Edit the information associated with your account."
        head-text="Your Personal Details"
    >
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-x-4 w-full">
            <div class="col-span-12 lg:col-span-7 space-y-3">
                <!-- <h6 class="font-semibold text-base font-dm_sans">About You</h6> -->
                <!-- <p class="text-slate-500 text-sm">This information is associated with your account.</p> -->

                <form class="mt-5 max-md:[&>label]:mx-4 w-full" @submit.prevent="handleSubmit">
                    <label class="flex flex-col gap-2 mb-4 mt-7">
                        <p class="text-sm text-neutral-500 uppercase">Address</p>

                        <input
                            class="bg-white text-zinc-800 w-full border-0 rounded ring-1 ring-blue-500 focus:ring-blue-100 px-3 py-2 uppercase"
                            placeholder=""
                            name="address"
                            type="text"
                            v-model="user.address"
                        />
                    </label>

                    <label class="flex flex-col gap-2 mb-4">
                        <p class="text-sm text-neutral-500 uppercase">First Name</p>

                        <input
                            class="bg-white text-zinc-800 w-full border-0 rounded ring-1 ring-blue-500 focus:ring-blue-100 px-3 py-2 uppercase"
                            placeholder="Alves"
                            name="firstName"
                            type="text"
                            v-model="user.firstName"
                        />
                    </label>

                    <label class="flex flex-col gap-2 mb-4">
                        <p class="text-sm text-neutral-500 uppercase">Last Name</p>

                        <input
                            class="bg-white text-zinc-800 w-full border-0 rounded ring-1 ring-blue-500 focus:ring-blue-100 px-3 py-2 uppercase"
                            placeholder="Spandex"
                            name="lastName"
                            type="text"
                            v-model="user.lastName"
                        />
                    </label>
                    
                    <!-- <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_first_name" id="floating_first_name"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer shadow-sm"
                                placeholder=" " required />
                            <label for="floating_first_name"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First
                                name</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="text" name="floating_last_name" id="floating_last_name"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer shadow-sm"
                                placeholder=" " required value="hhhhh" />
                            <label for="floating_last_name"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last
                                name</label>
                        </div>
                    </div> -->
                   
                    <label class="flex flex-col gap-2 mb-4">
                        <p class="text-sm text-neutral-500 uppercase">Phone Number</p>

                        <input
                            class="bg-white text-zinc-800 w-full border-0 rounded ring-1 ring-blue-500 focus:ring-blue-100 px-3 py-2 uppercase"
                            placeholder="+1 430 3902"
                            name="phone"
                            type="text"
                            v-model="user.phone"
                        />
                    </label>

                    <label class="flex flex-col gap-2 mb-4">
                        <p class="text-sm text-neutral-500 uppercase">E-mail Address</p>

                        <input
                            class="bg-white text-zinc-800 w-full border-0 rounded ring-1 ring-blue-500 focus:ring-blue-100 px-3 py-2 uppercase"
                            placeholder="alvessspandex@gmail.com"
                            name="email"
                            type="email"
                            v-model="user.email"
                        />
                    </label>

                    <!-- <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer shadow-sm"
                                placeholder=""
                                required
                            />
                            <label for="floating_phone"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone
                                number (123-456-7890)</label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <input type="email" name="email" id="email"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer shadow-sm"
                                placeholder=" " required />
                            <label for="email"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address</label>
                        </div>
                    </div> -->
                    <div class="grid md:grid-cols-12 md:gap-6 mt-6">
                        <div class="relative z-0 w-full mb-6 group col-span-12">
                            <button type="submit"
                                class="text-white/95 hover:bg-white/95 bg-blue-600 hover:text-blue-600 hover:border hover:border-blue-600 transition duration-150 ease-out focus:outline-none uppercase rounded-md w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 font-semibold">Submit</button>
                        </div>
                    </div>
                
                </form>


            </div>

            <div class="col-span-12 lg:col-span-5 flex">
                <div class="flex-1 flex gap-8 flex-col-reverse items-center">
                    <PayCardForm />

                    <PayCardCard />
                </div>

            </div>

        </div>

    </intro-head>
</template>

<script setup lang="ts">

import { onUnmounted, onMounted, reactive } from 'vue'
import { timeouts } from '@util/card-brands'
import { Form as PayCardForm, Card as PayCardCard, IntroHead } from "@/components";
import { ApiError, User, UserControllerService } from '@/generated';
import { type RootState, StoreNames } from '@/store';
import { AuthGetters, AuthActions } from '@/store/constants';
import { toast } from 'vue3-toastify';
import { useStore } from 'vuex';

onUnmounted(() => {
    timeouts.forEach(clearTimeout)
});

const handleSubmit = async (ev: Event) => {
    console.log(user);
    try {
        await UserControllerService.userControllerReplaceById(
            user
        );

        // store.
    } catch (err) {
        let error = err as ApiError;
        toast.error(error.body?.error.message);
    }
};

const store = useStore<RootState>();
const user: User = store.getters[`${StoreNames.AUTH}/${AuthGetters.CURRENT_USER}`];

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