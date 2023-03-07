<template>
    <div
        class="flex items-center fixed z-50 right-4 w-full max-w-xs p-4 mb-4 text-gray-200 rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 duration-200 transition-all ease-in-out"
        :class="[success ? 'bg-green-600' : 'bg-red-600', show ? 'top-14' : '-top-20 absolute']"
        role="alert"
        v-if="show"
    >
        <div 
            class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg dark:bg-green-800 dark:text-green-200"
            :class="success ? 'text-green-500 bg-green-100' : 'text-red-700 bg-red-200'"
        >
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Check icon</span>
        </div>
        <!-- <div 
            class="ml-3 text-sm font-normal" 
            *ngIf="requestErrors">{{
        requestErrors[0]?.extensions.response.message
        }}</div> -->
        <div class="ml-3 text-sm font-normal">
            {{msg}}
        </div>
        <button
            type="button"
            class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            aria-label="Close"
            @click="$emit('closeToast')"
        >
            <span class="sr-only">Close</span>
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
    </div>
</template>

<script setup lang="ts">
// import { onMounted, reactive, ref } from 'vue';

// const showToast = ref(false);
// const re = reactive({
//     showToast
// })
defineProps<{
    show: boolean,
    success: boolean,
    msg: string,
    // close: () => void
}>();

</script>