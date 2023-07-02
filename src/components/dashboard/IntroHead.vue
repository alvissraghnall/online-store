<template>
    <main class="mt-20 my-4 lg:p-3 lg:ml-40">
        <div class="container mx-auto font-poppins ">
            <h3 class="text-lg md:text-xl lg:text-3xl capitalize font-semibold"> {{ $route.name?.toString().replace("user_", "") }} </h3>
            <p class="text-sm font-normal text-neutral-400 mt-1">
                {{ miniHeadText }}
            </p>
            <slot></slot>
        </div>

    </main>
</template>

<script setup lang="ts">

const props = defineProps<{
    miniHeadText: string,
}>();
</script>