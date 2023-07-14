<template>
    <section class="bg-cover bg-gradient-to-r bg-no-repeat bg-center from-indigo-200 to-purple-800 flex items-center justify-center py-16 md:py-24 px-0">
        <div class="flex mx-auto text-center">
            <h1 class="text-neutral-200/90 text-center font-semibold text-base md:text-lg">Products</h1>
        </div>
    </section>

    <section class="my-4">
        <div class="flex md:mx-auto">
            <div class="flex flex-row w-full mx-4 items-center md:space-x-2">
                <div class="flex justify-center flex-1 flex-col md:flex-row space-y-1 md:space-x-2 md:items-center">
                    <div class="filter-widget w-1/2">
                        <select class="py-2 px-7 cursor-pointer block w-full p-2 max-md:mb-2.5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-50 focus:outline-none" @change="handleFilter">
                            <option class="cursor-pointer text-base capitalize" selected disabled>Filter by Category</option>
                            <option class="cursor-pointer text-base" value="HEADSETS"> Headsets </option>
                            <option class="cursor-pointer text-base" value="CHARGERS"> Chargers </option>
                            <option class="cursor-pointer text-base" value="EARPHONES"> Earphones </option>
                            <option class="cursor-pointer text-base" value="POWER_BANKS"> Power Banks </option>
                            <option class="cursor-pointer text-base" value="SELFIE_STICKS"> Selfie sticks </option>
                        </select>
                    </div>
                    <div class="w-1/2 filter-widget">
                        <select class="py-2 px-7 cursor-pointer block w-full p-2 max-md:mb-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-50 focus:outline-none" @change="handleSort">
                            <option class="cursor-pointer text-base" selected disabled>Sort By</option>
                            <option class="cursor-pointer text-base" value="ASC">Price (ASC)</option>
                            <option class="cursor-pointer text-base" value="DESC">Price (DESC)</option>
                        </select>
                    </div>
                </div>
                <div class="w-1/2 flex-1">
                    <div class="w-full pr-3 pl-0.5 border rounded-md border-solid border-purple-500 flex items-center justify-between">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            class="w-full border-none outline-none py-2 px-2.5 "
                            @input="handleSearch"
                        >
                        <span class="text-sky-800">
                            <OhVueIcon
                                name="ri-search-line"
                                fill="rgb(168 85 247)"
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="flex">
            <div class="flex flex-wrap justify-evenly mx-auto">
                <h2 v-if="productsData.length === 0" class="py-12 text-center font-mono font-bold text-lg"> No products found! </h2>
                <div v-else v-for="product in productsData">
                    <ProductItemCard :product="product" />
                </div> 
                
            </div>
        </div>
    </section>
</template>
<!-- linear-gradient(to_right,var(--tw-gradient-stops) -->

<style scoped>

</style>

<script setup lang="ts">
import {OhVueIcon, addIcons} from "oh-vue-icons";
import { RiSearchLine } from "oh-vue-icons/icons";
import { allProducts } from "../assets/mock/products";
import { ref,  } from "vue";
import { ProductItemCard } from "../components";

const products = allProducts;
const productsData = ref(products);
addIcons(
    RiSearchLine
);
const props = defineProps<{
    // title: string
}>();

const handleFilter = (ev: Event) => {
    const filterValue = (ev.target as HTMLSelectElement).value;
    if (filterValue === 'HEADSETS') {
        const filteredProducts = products.filter(item => item.category === 'HEADSETS');
        productsData.value = filteredProducts;
    } else if (filterValue === 'POWER_BANKS') {
        productsData.value = products.filter(item => item.category === 'POWER_BANKS');
    } else if (filterValue === 'EARPHONES') {
        productsData.value = products.filter(item => item.category === 'EARPHONES');
    } else if (filterValue === 'SELFIE_STICKS') {
        productsData.value = products.filter(item => item.category === 'SELFIE_STICKS');
    } else if (filterValue === 'CHARGERS') {
        productsData.value = products.filter(item => item.category === 'CHARGERS');
    }
    console.log(productsData.value);
    console.log(filterValue);
    
}

const handleSort = (ev: Event) => {
    const sortValue = (ev.target as HTMLSelectElement).value;
    
    if (sortValue === 'ASC') {
        productsData.value.sort(
            (a, b) => a.price - b.price
        )
    } else {
        productsData.value.sort((a,b) => b.price - a.price);
    }
}

const handleSearch = (ev: Event) => {
    const search = (<HTMLInputElement>ev.target).value;
    
    const searchedProducts = products.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );
    productsData.value = searchedProducts;
}

</script>