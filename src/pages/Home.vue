<template>
    
    <section class="bg-teal-200 w-full flex flex-col-reverse sm:flex-row p-4">
        <div class="w-full sm:w-1/2 my-12 m-4">
            <p class="m-4 text-sm md:text-base font-mono font-light text-slate-700">
                Trending product in {{ monthYear }}
            </p>
            <h2 class="font-semibold mx-4 text-xl lg:text-4xl capitalize font-serif text-slate-900">
                Stylize and beautify your mobile devices whilst improving your productivity
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
            <swiper-slide v-if="products === null" v-for="prod in 5">
                <ProductCardSkeleton />
            </swiper-slide>

            <swiper-slide 
                v-else
                v-for="product in swiperProducts" 
            >
                <ProductCard :product="product" />
            </swiper-slide>
        </swiper-container>
    </section>

    <section :class="state.countdownPassed ? 'hidden' : ''">
        <div class="flex max-h-80 gap-2 w-full text-white p-12 bg-sky-900 text-left">
            <div class="w-1/2">

                <h6 class="capitalize text-sm font-mono font-light my-3"> limited offers </h6>
                <div class="mb-4 capitalize text-xl text-left font-semibold font-mono">
                    <p> quality headphones </p>
                </div>
                
                <Countdown :countDownDate="countDownDate" />
            
                <router-link to="/products">
                    <button class="my-3 capitalize relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-sky-800 rounded-lg group bg-gradient-to-tr from-sky-900 to-blue-600 group-hover:from-sky-800 group-hover:to-blue-700 hover:text-white dark:text-white focus:outline-none dark:focus:ring-cyan-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            visit store
                        </span>
                    </button>
                </router-link>
            </div>

            <div class="flex justify-center items-center pb-3">
                <!--<img src="../assets/hero-image-ii.png" alt="" class="object-contain overflow-clip transform -scale-x-100 rotate-[50deg] h-full"> -->
            </div>
        </div>
    </section>

    <section>
        <div class="my-8 w-full">
            <h2 class="mx-auto text-slate-800 font-semibold text-lg font-mono capitalize text-center p-8 sm:text-xl md:text-2xl lg:text-3xl">
                new arrivals
            </h2>
            <div class="flex flex-wrap justify-evenly">
                <div v-for="product in newArrivals">
                    <ProductItemCard :product="product" />
                    
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="my-8 w-full">
            <h2 class="mx-auto text-slate-800 font-semibold text-lg font-mono capitalize text-center p-8 sm:text-xl md:text-2xl lg:text-3xl"> 
                popular in category
            </h2>
            <div class="flex flex-wrap justify-evenly">
                <div v-for="product in mobiles">
                    <ProductItemCard :product="product" />
                </div> 
            </div>
        </div>
    </section>
    
</template>


<style>
.sad {
    background: #ab9ae6;
}

body {
    overflow-x: auto;
}
</style>

<script setup lang="ts">
import { addIcons } from "oh-vue-icons";
import { FaShippingFast, FcCustomerSupport, MdHighquality } from "oh-vue-icons/icons";
import { GiCycle } from "oh-vue-icons/icons/gi";
import { RiSecurePaymentLine, RiTruckLine } from "oh-vue-icons/icons/ri";
import { ServicesCard, ProductCard, ProductItemCard, Countdown, ProductCardSkeleton } from "../components";
// import { phones } from "../assets/mock/products";
import { services } from "../assets/mock/services";
import { reactive, onMounted, ref } from "vue";
import { Product, ProductControllerService } from "@/generated";
let date = new Date();

let monthYear = date.toLocaleString("en-us", { month: "long", year: "numeric" });
let serviceIcons = [FcCustomerSupport, FaShippingFast, RiTruckLine, RiSecurePaymentLine, GiCycle, MdHighquality];

addIcons(...serviceIcons);

const countDownDate = {
    year: 2023,
    month: 6,
    day: 25
}

const products = ref<Product[] | null>(null);
const swiperProducts = ref<Product[] | null>(null);
const newArrivals = ref<Product[] | null>(null);
const mobiles = ref<Product[] | null>(null);


ProductControllerService.productControllerFind()
    .then((res) => {
        console.log(res);
        products.value = res;
        newArrivals.value = res.slice(0).sort((a, b) => Date.parse(b.createdAt ?? '') - Date.parse(a.createdAt ?? '')).slice(0, 9);
        mobiles.value = res.filter((product) => product.category === 'mobile').slice(0, 9);
        swiperProducts.value = res.slice(0, 7);
        // artemsandov@samcloudq.com
    });

const state = reactive({
    countdownPassed: false
});

onMounted(() => {
    state.countdownPassed = Date.now() > new Date(countDownDate.year, countDownDate.month, countDownDate.day).getTime();
});

//brainshop AI
</script>