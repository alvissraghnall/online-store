<template>
    
    <div class="mx-auto w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
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
    </div>

</template>


<style scoped>

</style>

<script setup lang="ts">
import { Product } from "../models/Product.model";
import Star from "./Star.vue";

const props = defineProps<{
    product: Product
}>();

let stars: number = 5;
</script>