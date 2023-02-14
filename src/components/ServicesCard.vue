<template>
    <div class="flex h-20 max-w-sm min-w-[14rem] p-2.5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" :style="{background: bgColor}">
        <div class="w-[30%] flex place-items-center">
            <div class="rounded-full flex place-items-center bg-slate-900">
                <OhVueIcon 
                    :name="iconName" 
                    class="w-8 h-8 text-gray-700 dark:text-gray-400" 
                    fill="#fff"
                />
            </div>
        </div>
        <div class="w-[70%]">

            <h5 class="font-mono text-sm font-normal tracking-tight text-gray-900 dark:text-white">
                <slot name="header"></slot>
            </h5>
            <p class="hidden sm:block font-normal text-gray-700 dark:text-gray-400">
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