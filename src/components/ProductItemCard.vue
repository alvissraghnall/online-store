<template>
    <!-- UI card from https://uxplanet.org/ultimate-guide-for-designing-ui-cards-59488a91b44f -->
    <div v-motion-pop-visible class=" flex flex-col justify-center">
        <div class="relative m-3 flex flex-wrap mx-auto justify-center">

            <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                <div class="overflow-hidden rounded-2xl relative">
                    <img 
                        v-motion
                        :initial="{
                            scale: 1.2,
                            // transition: {
                            //     ease: [0.175, 0.885, 0.32, 1.275], // 0.4, 0, 0.2, 1
                            //     duration: 0.3,
                            //     delay: 55
                            // }
                        }"
                        :hovered="{
                            scale: 1,
                            
                        }"
                        :visible="{
                            scale: 1.2,
                        }"
                        :delay="130"
                        class="h-40 rounded-2xl w-full object-cover transition-all ease-in-out duration-300" 
                        :src="transformCld(product.image)"
                    >
                    <p class="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group" @click="addToCart">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:opacity-50 opacity-70"
                            fill="none" viewBox="0 0 24 24" stroke="black">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </p>
                </div>
                <div class="mt-4 pl-2 mb-2 flex justify-between ">
                    <router-link :to="'/products/' + product.id">
                        <p class="text-lg font-semibold text-gray-900 mb-0">{{product.name.length < 29 ? product.name : product.name.slice(0, 29).concat("...")}}</p>
                        <p class="text-lg text-gray-900 mt-0 font-mono font-medium">${{product.price}}</p>
                    </router-link>
                    <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer" @click="toggleFavourite">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:opacity-70" fill="none"
                            viewBox="0 0 24 24" stroke="gray" v-if="!liked">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <HeartIcon v-else class="h-6 w-6 group-hover:opacity-70 text-purple-500" />
                    </div>
                </div>
            </div>

            <!-- <div class="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                <div class="overflow-x-hidden rounded-2xl relative">
                    <img class="h-40 rounded-2xl w-full object-cover" src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg">
                    <img class="h-40 rounded-2xl w-full object-cover" :src="product.image">
                    <p class="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:opacity-50 opacity-70"
                            fill="none" viewBox="0 0 24 24" stroke="black">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </p>
                </div>
                <div class="mt-4 pl-2 mb-2 flex justify-between ">
                    <div>
                        <p class="text-lg font-semibold text-gray-900 mb-0">Product Name</p>
                        <p class="text-md text-gray-800 mt-0">$340</p>
                    </div>
                    <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:opacity-70" fill="none"
                            viewBox="0 0 24 24" stroke="gray">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                </div>
            </div> -->

        </div>
    </div>

    <Toast
        msg="Product added to cart!"
        :success="true"
        :show="showToast"
        @close-toast="closeToast"
    />

</template>

<style scoped>
@keyframes toast-expiring {
    0% {
        width: 100%;
    }
    100% {
        width: 0%;
    }
}
</style>


<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useStore } from 'vuex';
import { Product } from '@/generated';
import Toast from './Toast.vue';
import { RootState, StoreNames } from '@/store';
import { CartActions, CartStateItem, FavouriteActions } from '@/store/constants';
import { HeartIcon } from "@heroicons/vue/24/solid";

let showToast = ref(false);
const xtive = reactive({
    showToast
})

const props = defineProps<{
    product: Product,
    liked?: boolean
}>();
const store = useStore<RootState>();
let timeout: number;


const toggleFavourite = async () => {
    const item = props.product;
    await store.dispatch(`${StoreNames.FAVOURITE}/${FavouriteActions.TOGGLE_ITEM}`, item);
}

const addToCart = () => {
    const data: CartStateItem = { quantity: 1, product: props.product, productId: props.product.id }
    store.dispatch(`${StoreNames.CART}/${CartActions.ADD_ITEM}`, data);
    console.log(store.getters["favourites/totalQuantity"], store.getters["cart/totalAmount"]);
}

const transformCld = (lnk: string) => {
    return lnk.replace('dcvx38ynp/image/upload', "dcvx38ynp/image/upload/w_600/q_30");
    // return arr[0].concat("/image/upload/w_600/q_30").concat(arr[1]);
}

const closeToast = () => {
    xtive.showToast = false; 
    clearTimeout(timeout);
}
</script>