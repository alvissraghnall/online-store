<template>
    <main class="mt-20 my-4 lg:p-3 lg:ml-40">

        <div class="container mx-auto font-poppins ">
            <h3 class="text-lg md:text-xl lg:text-3xl capitalize font-semibold"> favorites </h3>
            <p class="text-sm font-normal text-neutral-400 ">
                Find your saved items and get ready to order them.
            </p>
        
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div class="gap-3 rounded-md relative m-3 mx-auto" v-for="product in products">
                    <!-- <div class="min-w-[340px] flex flex-col group">
                        <div
                            class="h-48 md:h-56 lg:h-[24rem] w-full bg-red-500 border-2 border-white flex items-center justify-center text-white text-base mb-3 md:mb-5 overflow-hidden relative">

                            <img :src="product.image"
                                class="object-cover w-full h-full scale-100 group-hover:scale-110 transition-all duration-400" alt="">
                                
                                <div
                                class="absolute z-10 border-4 border-primary w-[95%] h-[95%] invisible group-hover:visible opacity-0 group-hover:opacity-100 group-hover:scale-90 transition-all duration-500" />

                        </div>

                        <router-link :to="'/products/' + product.id" class=" block text-neutral-800 text-center hover:text-sky-900 transition-colors duration-150 text-lg md:text-xl mb-1">
                            {{ product.name.length < 28 ? product.name : product.name.slice(0, 28).concat("...") }}
                        </router-link>

                        <p class="text-lg font-semibold font-dm_sans text-purple-400 text-center">
                            $ {{product.price}}
                        </p>

                        <div class="flex items-center mt-2.5 mb-5 justify-center">

                            <template v-for="idx in 5">
                                <StarIcon v-if="idx <= stars" class="h-5 w-5 text-purple-300" />
                                <StarOutlineIcon v-else class="h-5 w-5 text-purple-300" />
                            </template>
                            <span
                                class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{{ product.rating
                                    ?? 0 }}
                            </span>
                        </div>
                        
                        <div class="flex text-gray-500 font-inter justify-between">
                            <HeartIcon class="w-7 h-7 text-purple-400" />
                            <button class="rounded-2xl text-white/90 bg-purple-400 p-3 capitalize font-dm_sans">
                                buy
                            </button>
                        </div>
                        
                    </div> -->

                    <ProductItemCard
                        :product="product"
                        :liked="true"
                    />
                </div>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">

import { StarIcon, HeartIcon } from "@heroicons/vue/24/solid";
import { StarIcon as StarOutlineIcon } from "@heroicons/vue/24/outline";
import { ProductItemCard } from "@/components";

const products = [
    {
        "id": "645b19fb71f219bde0bab078",
        "createdAt": "2023-06-11T23:09:57.507Z",
        "updatedAt": "2023-06-25T00:35:01.914Z",
        "name": "iPhone XS Max",
        "description": "Welcome to the big screens! Super Retina in two sizes — including the largest display ever on an iPhone. Even faster Face ID. The smartest, most powerful chip in a smartphone. And a breakthrough dual‑camera system. iPhone XS is everything you love about iPhone. Taken to the extreme.",
        "category": "mobile",
        "price": 544,
        "rating": 5,
        "image": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-xs-max-5.jpg"
    },
    {
        "id": "648653e99e28c58805ed3374",
        "createdAt": "2023-06-11T23:08:25.804Z",
        "updatedAt": "2023-06-25T00:28:10.352Z",
        "name": "Fones de ouvido",
        "description": "Welcome to the big buns! Super nti in two sizes — including the biggest sounds ever on a Headset. Even faster Face ID. The smartest, most powerful chip in a smartphone. And a breakthrough dual‑camera system. iPhone XS is everything you love about iPhone. Taken to the extreme.",
        "category": "headset",
        "price": 1239,
        "rating": 4,
        "image": "https://cdn.pixabay.com/photo/2021/11/11/23/25/headphones-6787507_960_720.jpg"
    },
    {
        "id": "648913adbcda066c28cf9855",
        "createdAt": "2023-06-14T01:11:09.097Z",
        "updatedAt": "2023-06-25T00:28:10.352Z",
        "name": "Fones de ouvido",
        "description": "Welcome to the big buns! Super nti in two sizes — including the biggest sounds ever on a Headset. Even faster Face ID. The smartest, most powerful chip in a smartphone. And a breakthrough dual‑camera system. iPhone XS is everything you love about iPhone. Taken to the extreme.",
        "category": "headset",
        "price": 1239,
        "rating": 4,
        "image": "https://cdn.pixabay.com/photo/2021/11/11/23/25/headphones-6787507_960_720.jpg"
    },
    {
        "id": "648915e6a36b8773789bd406",
        "createdAt": "2023-06-14T01:20:38.203Z",
        "updatedAt": "2023-06-25T00:28:10.352Z",
        "name": "Fones de ouvido",
        "description": "Welcome to the big buns! Super nti in two sizes — including the biggest sounds ever on a Headset. Even faster Face ID. The smartest, most powerful chip in a smartphone. And a breakthrough dual‑camera system. iPhone XS is everything you love about iPhone. Taken to the extreme.",
        "category": "headset",
        "price": 1239,
        "rating": 4,
        "image": "https://cdn.pixabay.com/photo/2021/11/11/23/25/headphones-6787507_960_720.jpg"
    },
    {
        "id": "649775622955bfe4370fd864",
        "createdAt": "2023-06-24T22:59:45.894Z",
        "updatedAt": "2023-06-25T00:28:10.352Z",
        "name": "Fones de ouvido",
        "description": "Welcome to the big buns! Super nti in two sizes — including the biggest sounds ever on a Headset. Even faster Face ID. The smartest, most powerful chip in a smartphone. And a breakthrough dual‑camera system. iPhone XS is everything you love about iPhone. Taken to the extreme.",
        "category": "headset",
        "price": 1239,
        "rating": 4,
        "image": "https://cdn.pixabay.com/photo/2021/11/11/23/25/headphones-6787507_960_720.jpg"
    }];

</script>