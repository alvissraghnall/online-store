<template>
    <div class="flex h-20 mb-5 items-center gap-x-2 max-w-sm md:min-w-[18rem] p-2.5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" :style="{background: bgColor}">
        <div class="flex place-items-center">
            <div class="rounded-full flex place-items-center bg-slate-900">
                <OhVueIcon 
                    :name="iconName" 
                    class="w-8 h-8 text-gray-700 dark:text-gray-400" 
                    fill="#fff"
                />
            </div>
        </div>
        <div class="text-white">

            <h5 class="font-mono text-sm font-normal text-neutral-800 tracking-tight dark:text-white">
                <slot name="header"></slot>
            </h5>
            <p class="hidden font-normal text-gray-700 dark:text-gray-400 text-xs sm:text-base">
                <slot name="rest"></slot>
            </p>
        </div>
    </div>
</template>


<style scoped>

</style>

<script setup lang="ts">
import { addIcons, OhVueIcon } from 'oh-vue-icons';
import { IconType } from 'oh-vue-icons/types/icons';
import { FaShippingFast, FcCustomerSupport, MdHighquality } from "oh-vue-icons/icons";
import { GiCycle } from "oh-vue-icons/icons/gi";
import { RiSecurePaymentLine, RiTruckLine } from "oh-vue-icons/icons/ri";


const props = defineProps<{
    bgColor: string;
    iconName: string;
    // icons: IconType[];
}>();

// let serviceIcons = [FcCustomerSupport, FaShippingFast, RiTruckLine, RiSecurePaymentLine, GiCycle, MdHighquality];

// addIcons(...serviceIcons);
</script>