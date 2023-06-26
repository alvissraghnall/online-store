<template>
    
    <!-- <div class="mx-auto w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
        <router-link :to="'/products/' + product.id">
            <img class="h-56 p-3.5 box-border w-full rounded-[1.6rem] object-cover" :src="product.image" alt="product image" />
        </router-link>
        <div class="px-5 pb-5">
            <router-link :to="'/products/' + product.id">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{ product.name.length < 28 ? product.name : product.name.slice(0, 28).concat("...") }}</h5>
            </router-link>
            <div class="flex items-center mt-2.5 mb-5">

                <Star :n="stars" v-for="star in stars" />
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{{product.rating ?? 5.0}}</span>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-white">${{product.price}}</span>
                <div class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</div>
            </div>
        </div>
    </div> -->

    <div class="relative m-3 flex flex-wrap mx-auto justify-center">
                        <div class="min-w-[340px]flex flex-col group">
                            <div
                                class="h-48 md:h-56 lg:h-[24rem] w-full bg-red-500 border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">

                                <img :src="product.image" class="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400"
                                    alt="">

                                <div
                                    class="absolute z-10 border-4 border-primary w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500">
                                </div>

                            </div>
                            <router-link :to="'/products/' + product.id"
                                class=" block text-black text-center hover:text-sky-900 transition-colors duration-150 text-lg md:text-xl mb-1">
                                {{ product.name.length < 28 ? product.name : product.name.slice(0, 28).concat("...") }}</router-link>


                                <div class="flex items-center mt-2.5 mb-5 justify-center">

                                    <!-- <Star :n="stars" :idx="idx" v-for="(star, idx) in 5" :key="star" /> -->
                                    <template v-for="idx in 5">
                                        <StarIcon v-if="idx <= stars" class="h-5 w-5 text-yellow-300" />
                                        <StarOutlineIcon v-else class="h-5 w-5 text-yellow-300" />
                                    </template>
                                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{{product.rating ?? 0}}</span>
                                </div>
                            <p class="mb-4 md:text-lg lg:text-3xl text-center text-md font-bold text-sky-900">${{  product.price }}</p>

                            <div class="flex justify-center gap-x-3">
                                <div @click="addToCart"
                                    class=" px-5 py-2 border border-primary text-primary hover:bg-primary transition-all outline-none bg-sky-900 border-sky-900 text-white hover:text-sky-900 hover:bg-white font-bold cursor-pointer">
                                    Add</div>
                                <router-link :to="'/products/' + product.id"
                                    class="px-5 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-all outline-none bg-white border-sky-900 text-sky-900 hover:bg-sky-900 font-bold">
                                    View</router-link>
                            </div>

                        </div>
  </div>

</template>


<style scoped>

</style>

<script setup lang="ts">
import { type Product } from "@/generated";
import Star from "./Star.vue";
import { RootState } from "@/store";
import { CartActions } from "@/store/constants";
import { useStore } from "vuex";
import { StarIcon } from "@heroicons/vue/24/solid";
import { StarIcon as StarOutlineIcon } from "@heroicons/vue/24/outline";

const props = defineProps<{
    product: Product
}>();

const stars: number = Math.round(props.product.rating ?? 0);

const store = useStore<RootState>();

const addToCart = () => {
    store.dispatch(`cart/${CartActions.ADD_ITEM}`, props.product);
    // alert("Product added to cart!")
    console.log(store.getters["cart/totalQuantity"], store.getters["cart/totalAmount"]);
    
}

</script>