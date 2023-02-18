<template>
<header :ref="headerRef" class="flex h-12 bg-[#eee] px-2 sm:px-4 py-2.5 rounded border-gray-200 dark:bg-gray-900 dark:border-gray-700 items-center justify-around">
    <div class="flex items-center space-x-7">
        <router-link to="/">
            <span class="text-[#646cff]">
                <!-- logo -->
                <OhVueIcon 
                    name="io-bag-handle-outline" 
                    fill="#646cff"
                    class="text-[#646cff]" 
                />
                <!-- <IoBagHandleOutline  /> -->
            </span>
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                .esrup
            </span>
        </router-link>
    </div>

    <nav class="hidden w-full md:block md:w-auto">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <router-link to="/" class="block py-2 pl-3 pr-4 bg-blue-700 text-[#646cff] hover:text-[#525afc] font-semibold hover:font-bold rounded md:bg-transparent md:p-0 dark:text-white transition-all duration-200" aria-current="page">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="block py-2 pl-3 pr-4 text-[#646cff] rounded font-semibold hover:font-bold hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all duration-100 hover:text-[#525afc]">About</router-link>
        </li>
        <li>
          <router-link to="/products" class="block py-2 pl-3 pr-4 text-[#646cff] rounded font-semibold hover:font-bold hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all duration-100 hover:text-[#525afc]">Services</router-link>
        </li>
        <li>
          <router-link to="/cart" class="block py-2 pl-3 pr-4 text-[#646cff] rounded font-semibold hover:font-bold hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all duration-100 hover:text-[#525afc]">Cart</router-link>
        </li>
        <li>
          <router-link to="/contact" class="block py-2 pl-3 pr-4 text-[#646cff] rounded font-semibold hover:font-bold hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all duration-100 hover:text-[#525afc]">Contact Us</router-link>
        </li>
      </ul>
    </nav>

    <div class="flex items-center space-x-4 min-w-[10rem] md:min-w-[8rem]">
        <span class="relative cursor-pointer h-full w-full">
            <OhVueIcon 
                name="md-favoriteborder-sharp" 
                fill="#646cff" 
            />
            <span class="absolute top-0 right-0 w-4 h-4 z-10 font-semibold flex items-center justify-center rounded-full text-xs bg-[#646cff] text-[#eee] mr-2.5 md:mr-0">
              <!-- badge -->
              4
            </span>
        </span>
        <span class="relative cursor-pointer h-full w-full">
            <OhVueIcon 
                name="la-shopping-cart-solid" 
                fill="#646cff" 
            />
            <span class="absolute top-0 right-0 w-4 h-4 z-10 font-semibold flex items-center justify-center rounded-full text-xs bg-[#646cff] text-[#eee] mr-2.5 md:mr-0">
              <!-- badge -->
              3
            </span>
        </span>
        <span class="h-full w-full">
            <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" src="../assets/user-icon.png" alt="user photo">
            </button>
        </span>
    </div>
</header>
</template>

<style scoped>
.sticky-head {
  @apply w-full sticky top-0 left-0 leading-8 z-50 shadow-md shadow-[#ddd];
}
</style>

<script setup lang="ts">
import {OhVueIcon, addIcons} from "oh-vue-icons";
import { IoBagHandleOutline, LaShoppingCartSolid, MdFavoriteborderSharp } from "oh-vue-icons/icons";
import { ref, VNodeRef } from "vue";

addIcons(IoBagHandleOutline, LaShoppingCartSolid, MdFavoriteborderSharp)

let headerRef = ref<VNodeRef>();

const stickyHeader = () => {
  window.addEventListener("scroll", () => {
    if(document.body.scrollTo > 80 || document.documentElement.scrollTo > 80) {
      headerRef.value
    }
  });
}
</script>