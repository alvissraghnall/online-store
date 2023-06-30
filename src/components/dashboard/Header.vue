<template>
    <header class='w-full py-3 px-5 bg-white/25 blur-[4] border border-solid fixed z-[2] border-slate-50/20 top-0 lg:left-32'>
        <nav class='items-center justify-start flex'>
            
            <div class="w-8 h-8 rounded-full relative flex justify-center items-center bg-transparent lg:hidden float-left mr-2">
                <OhVueIcon name="hi-menu-alt-4" class='cursor-pointer w-2/3 h-2/3 text-blanc' @click="$emit('sidebarOpened')" />
            </div> 
            
            <router-link to="/" class="flex justify-start items-center no-underline">
                <span>
                    <OhVueIcon 
                        name="io-bag-handle-outline" 
                        fill="#646cff"
                        class="text-[#646cff] 2xl:w-9 2xl:h-9 w-7 h-7" 
                    />
                </span>
                <span class='font-mono ml-0.5 self-center text-xl font-semibold whitespace-nowrap'>.esrup</span>
            </router-link>       

        </nav>
    </header>
</template>

<script setup lang="ts">
import {OhVueIcon, addIcons} from "oh-vue-icons";
import { IoBagHandleOutline, LaShoppingCartSolid, MdFavoriteborderSharp, HiMenuAlt4,  } from "oh-vue-icons/icons";
import { ref } from "vue";

addIcons(IoBagHandleOutline, LaShoppingCartSolid, MdFavoriteborderSharp, HiMenuAlt4);

// const props = defineProps<{
//     sidebar: boolean
// }>();
</script>