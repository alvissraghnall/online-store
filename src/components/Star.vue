<template>
    <svg :class="{ hidden: n === 0 }" aria-hidden="true" class="group w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <title>
            {{ ordinal }} star
        </title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
    n: number
}>();

let ordinal = props.n === 1 ? "1st" : (props.n === 2 ? "2nd" : (props.n === 3 ? "3rd" : props.n.toString().concat("th")));
</script>