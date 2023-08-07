<template>
    <main class="mt-16 my-4 lg:p-3 lg:ml-40">
    <div class="container mx-auto font-poppins ">
            <router-link to="/" class="text-purple-600 font-dm_sans text-sm uppercase m-1 flex items-center no-underline mb-2 hover:text-purple-700 max-md:ml-2 max-lg:-ml-1">
                <ArrowLeftIcon class="w-6 h-6" />
                <span class="ml-1">Back to shop</span>
            </router-link>

            <h3 class="text-lg md:text-xl lg:text-3xl capitalize font-semibold max-md:ml-2"> {{ headText || $route.name?.toString().replace("user_", "") }} </h3>
            <p class="text-sm font-normal text-neutral-400 mt-1 max-md:ml-2">
                {{ miniHeadText }}
            </p>
            
            <slot></slot>
        </div>

    </main>
</template>

<script setup lang="ts">

const props = defineProps<{
    miniHeadText: string,
    headText?: string
}>();

import { ArrowLeftIcon } from '@heroicons/vue/24/solid';
</script>