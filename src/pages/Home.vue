<template>

    <section class="bg-teal-200 w-screen flex flex-col-reverse sm:flex-row p-4">
        <div class="w-full sm:w-1/2 my-12 m-4">
            <p class="m-4 text-sm md:text-base font-mono font-light text-slate-700">
                Trending product in {{ monthYear }}
            </p>
            <h2 class="font-semibold mx-4 text-xl lg:text-4xl capitalize font-serif text-slate-900">
                Stylize and beautify your mobile devices whilst improve your productivity
            </h2>

            <p class="mx-4 my-5 text-sm text-slate-600 font-serif font-extralight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo asperiores magnam dolorum quo quis, minus repellendus exercitationem. Tenetur? Eaque, odit?
            </p>

            <button class="m-4 bg-slate-700 text-white hover:bg-white group py-2 rounded-full transition duration-100">
                <router-link to="/products">
                    <span class="font-semibold py-2 px-4 text-white group-hover:text-slate-700">Shop Now</span>
                </router-link>
            </button>
        </div>
        <div class="w-full sm:w-1/2 order-1 max-h-[75%] flex place-items-center">
            <img src="../assets/hero-img.png" alt="" class="object-contain cursor-pointer">
        </div>

    </section>

    <section class="p-10">

        <div class="flex flex-wrap justify-evenly sm:flex-row items-center">
            <ServicesCard
                v-for="service in services"
                :key="service.id"
                :bgColor="service.bgColor"
                :iconName="service.iconName"
            >
                <template #header>
                    {{ service.title }}
                </template>
                <template #rest>
                    {{ service.description }}
                </template>
            </ServicesCard>
        </div>
    </section>


    <section class="mb-8">
        <h2 class="mx-auto text-slate-800 font-semibold text-lg font-mono capitalize text-center p-8 sm:text-xl md:text-2xl lg:text-3xl">
            trending products
        </h2>

        <swiper-container
            :slides-per-view="3"
            :space-between="10"
            :slides-offset-before="5"
            :breakpoints="{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                643: {
                    slidesPerView: 2,
                    spaceBetween: 5
                },
                768: {
                    slidesPerView: 3,
                },
                1160: {
                    slidesPerView: 4
                }
            }"
            :speed="500"
        >
            <swiper-slide 
                v-for="product in products" 
            >
                <ProductCard :product="product" />
            </swiper-slide>
        </swiper-container>
    </section>

    <section>
        <div class="flex gap-2 w-full text-white p-12 bg-sky-900 text-left">
            <div class="">

                <h6 class="capitalize text-sm font-mono font-light my-3"> limited offers </h6>
                <div class="mb-4 capitalize text-xl text-left font-semibold font-mono">
                    <p> quality armchair </p>
                </div>
                
                <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
                    <div class="flex flex-col">
                        <span class="countdown font-mono text-5xl">
                            <span>{{ days }}</span>
                        </span>
                        days
                    </div> 
                    <span class="text-5xl pt-1">:</span>
                    <div class="flex flex-col">
                        <span class="countdown font-mono text-5xl">
                            <span>{{ hours }}</span>
                        </span>
                        hours
                    </div> 
                    <span class="text-5xl pt-1">:</span>
                    <div class="flex flex-col">
                        <span class="countdown font-mono text-5xl">
                            <span>{{minutes}}</span>
                        </span>
                        min
                    </div> 
                    <span class="text-5xl pt-1">:</span>
                    <div class="flex flex-col">
                        <span class="countdown font-mono text-5xl">
                            <span>{{seconds}}</span>
                        </span>
                        sec
                    </div>
                </div>
            
                <button class="my-3 capitalize relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-sky-800 rounded-lg group bg-gradient-to-tr from-sky-900 to-blue-600 group-hover:from-sky-800 group-hover:to-blue-700 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        visit store
                    </span>
                </button>
            </div>

            <div class="flex transform -scale-x-100 rotate-[50deg] justify-center items-center pb-3">
                <img src="../assets/hero-image-ii.png" alt="" class="object-contain">
            </div>
        </div>
    </section>
    
</template>


<style scoped>
.sad {
    background: #ab9ae6;
}
</style>

<script setup lang="ts">
import { addIcons } from "oh-vue-icons";
import { FaShippingFast, FcCustomerSupport, MdHighquality } from "oh-vue-icons/icons";
import { GiCycle } from "oh-vue-icons/icons/gi";
import { RiSecurePaymentLine, RiTruckLine } from "oh-vue-icons/icons/ri";
import { ServicesCard, ProductCard } from "../components";
import { products } from "../assets/mock/products";
import { services } from "../assets/mock/services";
import { onMounted } from "vue";
let date = new Date();

let monthYear = date.toLocaleString("en-us", { month: "long", year: "numeric" });
let serviceIcons = [FcCustomerSupport, FaShippingFast, RiTruckLine, RiSecurePaymentLine, GiCycle, MdHighquality];

addIcons(...serviceIcons);

let days: number, hours: number, minutes: number, seconds: number, interval: any;

const setCountdownVars = ({
    d, h, m, s
}: {[x: string]: number}) => {
    days = d; hours = h;
    minutes = m; seconds = s;
}

const countDown = () => {
    const destDate = new Date(2023, 1, 23, 1).getTime();    

    interval = setInterval(() => {
        const now = Date.now();
        const difference = destDate - now;

        const ays = Math.floor(difference / (1000 * 60 * 60 * 24));
        const ours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const inutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
        const econds = Math.floor(difference % (1000 * 60) / (1000));

        if (destDate < 0) clearInterval(interval.current);
        else {
            setCountdownVars({
                ays, ours, inutes, econds
            });
        }
    })
};

onMounted(() => {
    countDown();
})
//brainshop AI
</script>