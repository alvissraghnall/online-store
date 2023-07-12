<template>
    <footer class="p-8 max-sm:p-5 bg-blue-900">
        <div class="flex items-center justify-between max-lg:flex-col">
            <div class="lg:w-1/3 w-full mb-2">
                <div class="flex items-center space-x-7">
                    <router-link to="/">
                        <span class="text-[#646cff]">
                            <OhVueIcon 
                                name="io-bag-handle-outline" 
                                fill="#fff"
                                :inverse="true"
                                class="text-[#646cff]" 
                            />
                        </span>
                        <span class="self-center text-xl font-bold whitespace-nowrap text-white">
                            .esrup
                        </span>
                    </router-link>
                </div>

                <p class="text-base font-mono text-white/95 mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dolorum praesentium? Quidem iste minima temporibus molestias placeat earum inventore nostrum esse excepturi totam corrupti, corporis nisi quia neque. Mollitia at odio sapiente culpa!
                </p>
            </div>
            <div class="flex justify-around lg:w-1/3 w-full max-md:flex-col max-lg:my-4 max-lg:md:justify-start">
                <ul class="list-none flex flex-col max-lg:mb-4 max-lg:md:w-1/2">
                    <li class="mb-2.5 text-slate-50 font-semibold text-base font-mono max-lg:mb-1">
                        Top Categories
                    </li>
                    <li class="mb-1" v-for="cat in topCategories">
                        <router-link :to="cat.url">
                            <span class="text-[#eee] font-mono font-light">{{ cat.name }}</span>
                        </router-link>
                    </li>
                </ul>

                <ul class="list-none flex flex-col">
                    <li class="mb-2.5 text-slate-50 capitalize font-semibold text-base font-mono max-lg:mb-1">
                        useful links
                    </li>
                    <li class="mb-1" v-for="link in usefulLinks">
                        <router-link :to="link.toLowerCase().split(' ').join('-')">
                            <span class="text-[#eee] font-mono font-light">{{ link }}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="lg:w-1/3 w-full flex justify-around flex-col max-lg:my-3 md:max-lg:-my-2">
                <ul class="list-none flex flex-col">
                    <li class="mb-3 text-slate-50 capitalize font-semibold text-base font-mono">
                        contact
                    </li>
                    <li class="mb-3">
                        <a class="text-white space-x-1 hover:text-[#eee]">
                            <span class="cursor-pointer text-[#eee] font-mono font-light">
                                <OhVueIcon
                                    name="co-location-pin"
                                    :scale="1.2"
                                />
                            </span>
                            <span>
                                372 Fabrizio Romano Street, Manchester.
                            </span>
                        </a>
                    </li>
                    <li class="mb-3">
                        <a href="tel:+17443902" class="text-white space-x-1 hover:text-[#eee]">
                            <span class="cursor-pointer text-[#eee] font-mono font-light">
                                <OhVueIcon
                                    name="fa-phone"
                                />
                            </span>
                            <span>
                                +1 74 439 02
                            </span>
                        </a>
                    </li>
                    <li class="mb-3">
                        <a class="text-white space-x-1 hover:text-[#eee]" href="mailto:mail@esrup.shop">
                            <span class="cursor-pointer text-[#eee] font-mono font-light">
                                <OhVueIcon
                                    name="hi-mail"
                                />
                            </span>
                            <span>
                                mail@esrup.shop
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { addIcons, OhVueIcon } from "oh-vue-icons";

import { FaPhone, CoLocationPin, HiMail, IoBagHandleOutline } from "oh-vue-icons/icons";

addIcons(IoBagHandleOutline, HiMail, FaPhone, CoLocationPin);

const topCategories = [
    {
        name: "Pouches",
        url: "pouches"
    }, {
        name: "Smart watches",
        url: "smart-watches"
    }, {
        name: "Earphones",
        url: "earphones"
    }, {
        name: "Headsets",
        url: "headsets"
    },
];

const usefulLinks = [
    "Products", "Cart", "About us", "Privacy Policy"
];
</script>