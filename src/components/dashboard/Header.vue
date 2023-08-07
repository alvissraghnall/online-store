<template>
    <header class='w-full py-3 px-5 bg-white/25 blur-[4] border border-solid z-[2] border-slate-50/20 top-0 lg:pl-40 lg:opacity-75 transition-[top] duration-300 fixed' ref="headerRef">
        <nav class='items-center justify-between flex'>
            <div class="justify-start flex">
                
                <div class="w-8 h-8 rounded-full relative flex justify-center items-center bg-transparent lg:hidden float-left mr-2">
                    <OhVueIcon name="hi-menu-alt-4" class='cursor-pointer w-2/3 h-2/3 text-blanc' @click="$emit('sidebarOpened')" />
                </div> 
                
                <router-link to="/" class="flex justify-start items-center no-underline">
                    <span>
                        <ShoppingBagIcon 
                            class="text-purple-500 2xl:w-7 2xl:h-7 w-5 h-5" 
                        />
                    </span>
                    <span class='font-mono ml-0.5 self-center text-xl font-semibold whitespace-nowrap text-purple-500 lg:opacity-90'>.esrup</span>
                </router-link>       
                
            </div>

            <div class="float-right rounded-2xl border border-solid border-slate-600 -my-1 space-x-2 p-1.5 flex items-center">
                <img src="" alt="" class="rounded-full w-5 h-5" />
                <span class="font-dm_sans font-medium text-sm">{{ user.firstName + " " + user.lastName }}</span>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
import {OhVueIcon, addIcons} from "oh-vue-icons";
import { IoBagHandleOutline, LaShoppingCartSolid, MdFavoriteborderSharp, HiMenuAlt4,  } from "oh-vue-icons/icons";
import { ShoppingBagIcon } from "@heroicons/vue/24/outline"
import { ref, onMounted } from 'vue'
import { ApiError, User, UserControllerService } from '@/generated';
import { type RootState, StoreNames } from '@/store';
import { AuthGetters, AuthActions } from '@/store/constants';
import { toast } from 'vue3-toastify';
import { useStore } from 'vuex';

const store = useStore<RootState>();
const user: User = store.getters[`${StoreNames.AUTH}/${AuthGetters.CURRENT_USER}`];

const getUserDetails = async () => {
    // let currUser: User;
    try {
        await store.dispatch(`${StoreNames.AUTH}/${AuthActions.GET_CURR_USER}`);
    } catch (err) {
        let error = err as Error;
    }
}

addIcons(IoBagHandleOutline, LaShoppingCartSolid, MdFavoriteborderSharp, HiMenuAlt4);

const headerRef = ref<HTMLElement | null>(null);

onMounted(() => {
    // headerRef.value?.focus();
    const prevScrollPos = ref(window.scrollY);

    window.addEventListener("scroll", () => {
        const currScrollPos = window.scrollY;

        if(prevScrollPos.value > currScrollPos) {
            headerRef.value!.style.top = '0';
        } else {
            headerRef.value!.style.top = '-50px';
        }
        prevScrollPos.value = currScrollPos;
    });

    getUserDetails();
})
</script>