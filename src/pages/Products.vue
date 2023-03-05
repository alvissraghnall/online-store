<template>
    <section class="bg-cover bg-gradient-to-r bg-no-repeat bg-center from-neutral-400 to-neutral-900 via-stone-800 flex items-center justify-center py-24 px-0">
        <div class="flex mx-auto text-center">
            <h1 class="text-neutral-200/90 text-center font-semibold">Products</h1>
        </div>
    </section>

    <section class="my-4">
        <div class="flex mx-auto">
            <div class="flex flex-row w-full mx-4">
                <div class="filter-widget w-1/4">
                    <select class="py-2 px-5 border-solid border border-cyan-900 cursor-pointer rounded-md bg-cyan-800 text-white/80 focus:outline-none">
                        <option class="cursor-pointer text-base capitalize" selected disabled>filter by category</option>
                        <option class="cursor-pointer text-base" value="headsets"> Headsets </option>
                        <option class="cursor-pointer text-base" value="chargers"> Chargers </option>
                        <option class="cursor-pointer text-base" value="earphones"> Earphones </option>
                        <option class="cursor-pointer text-base" value="power-banks"> Power Banks </option>
                        <option class="cursor-pointer text-base" value="selfie-sticks"> Selfie sticks </option>
                    </select>
                </div>
                <div class="w-1/4 filter-widget">
                    <select class="py-2 px-5 border-solid border border-cyan-900 cursor-pointer rounded-md bg-cyan-800 text-white/80 focus:outline-none">
                        <option class="cursor-pointer text-base" selected disabled>Sort By</option>
                        <option class="cursor-pointer text-base" value="ASC">Ascending</option>
                        <option class="cursor-pointer text-base" value="DESC">Descending</option>
                    </select>
                </div>
                <div class="w-1/2">
                    <div class="w-full pr-3 pl-0.5 border rounded-md border-solid border-cyan-800 flex items-center justify-between">
                        <input type="text" placeholder="Search..." class="w-full border-none outline-none py-2 px-2.5 ">
                        <span class="text-sky-800">
                            <OhVueIcon
                                name="ri-search-line"

                            />
                        </span>
                    </div>
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

const products = allProducts;
addIcons(
    RiSearchLine
);
const props = defineProps<{
    // title: string
}>();
</script>