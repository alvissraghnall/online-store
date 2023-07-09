<template>
<header ref="headerRef" class="flex h-12 bg-[#eee] px-2 sm:px-4 py-2.5 rounded border-gray-200 dark:bg-gray-900 dark:border-gray-700 items-center justify-around">
    <div class="flex items-center space-x-7">
      <router-link to="/" class="flex justify-start items-center no-underline">
        <span>
            <ShoppingBagIcon 
                class="text-purple-500 2xl:w-7 2xl:h-7 w-5 h-5" 
            />
        </span>
        <span class='font-mono ml-0.5 self-center text-xl font-semibold whitespace-nowrap text-purple-500 lg:opacity-90'>.esrup</span>
      </router-link>   
    </div>

    <nav class="hidden w-full md:block md:w-auto">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <router-link to="/" class="block py-2 pl-3 pr-4 bg-blue-700 text-purple-500 font-semibold hover:after:-translatex-full after:translate-x-0 after:h-1 rounded md:bg-transparent md:p-0 dark:text-white transition-all duration-200 hover:text-purple-500" aria-current="page">Home</router-link>
        </li>
        <li>
          <router-link to="/about" class="block py-2 pl-3 pr-4 text-purple-500 rounded font-semibold hover:after:-translatex-full after:translate-x-0 after:h-1 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all duration-100 hover:text-purple-500">About</router-link>
        </li>
        <li>
          <router-link to="/products" class="block py-2 pl-3 pr-4 text-purple-500 rounded font-semibold hover:after:-translatex-full after:translate-x-0 after:h-1 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all duration-100 hover:text-purple-500 no-underline">Services</router-link>
        </li>
        <li>
          <router-link to="/cart" class="block py-2 pl-3 pr-4 text-purple-500 rounded font-semibold hover:after:-translatex-full after:translate-x-0 after:h-1 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all duration-100 hover:text-purple-500 no-underline">Cart</router-link>
        </li>
        <li>
          <router-link to="/contact" class="block py-2 pl-3 pr-4 text-purple-500 rounded font-semibold hover:after:-translatex-full after:translate-x-0 after:h-1 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all duration-100 hover:text-purple-500 no-underline ">Contact Us</router-link>
        </li>
      </ul>
    </nav>

    <div class="flex items-center space-x-4 min-w-[10rem] md:min-w-[8rem]">
        <span class="relative cursor-pointer h-full w-full ml-1">
            <OhVueIcon 
                name="md-favoriteborder-sharp" 
                fill="#646cff" 
            />
            <span class="absolute mx-0 top-0 right-0 w-4 h-4 z-10 font-semibold flex items-center justify-center rounded-full text-xs bg-[#646cff] text-[#eee] mr-2.5 md:mr-0">
              <!-- badge -->
              4
            </span>
        </span>
        <span class="relative cursor-pointer h-full w-full ml-1" @click="isCartOpen = true">
            <OhVueIcon 
                name="la-shopping-cart-solid" 
                fill="#646cff" 
            />
            <span class="absolute top-0 right-0 w-4 h-4 z-10 font-semibold flex items-center justify-center rounded-full text-xs bg-[#646cff] text-[#eee] mr-2.5 md:mr-0">
              <!-- badge -->
              {{ totalQuantity || 0 }}
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

<CartOverlay :open="isCartOpen" @close="isCartOpen = false" />
</template>

<style scoped>
.sticky-head {
  @apply w-full sticky top-0 left-0 leading-8 z-50 shadow-md shadow-[#ddd] bg-[#fff];
}
</style>

<script setup lang="ts">
import {OhVueIcon, addIcons} from "oh-vue-icons";
import { IoBagHandleOutline, LaShoppingCartSolid, MdFavoriteborderSharp } from "oh-vue-icons/icons";
import { ref, VNodeRef, onMounted, onUnmounted, reactive, computed } from "vue";
import { mapState, useStore } from "vuex";
import CartOverlay from "./CartOverlay.vue";
import { ignoreBaseComps } from "../util/hide-base-helper";
import { StoreNames } from "@/store/store-names.enum";
import { CartActions, CartGetters } from "@/store/constants";
import { type RootState } from "@/store";
// import { useRouter } from "vue-router";
import { ShoppingBagIcon } from "@heroicons/vue/24/outline"

const store = useStore<RootState>();
let isCartOpen = ref(false);
addIcons(IoBagHandleOutline, LaShoppingCartSolid, MdFavoriteborderSharp);

const totalQuantity = computed(() => store.getters[`${StoreNames.CART}/${CartGetters.TOTAL_QUANTITY}`]);
// ref(useStore().getters.totalQuantity);
// const re = reactive({
//   totalQuantity
// })

// const tQ = $store.getters.totalQuantity;

let headerRef = ref<HTMLElement | null>(null);

const stickyHeader = () => {
  window.addEventListener("scroll", () => {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.value?.classList.add("sticky-head");
    } else {
      headerRef.value?.classList.remove("sticky-head");
    }
  });
  console.log(headerRef, headerRef.value);
}
// console.log();

onMounted(() => {
  stickyHeader();
  store.dispatch(`${StoreNames.CART}/${CartActions.GET_CART}`);
});

onUnmounted(() => {
  window.removeEventListener("scroll", stickyHeader);
});

</script>