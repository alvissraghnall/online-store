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

    <section>

        <div class="flex flex-col sm:flex-row justify-center items-center">
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


<!-- 
    <section class="">
        <swiper-container>
            <swiper-slide v-for="product in products">
                <div class="w-full h-full flex mx-8 bg-teal-600" :style="{ background: product.bgColor }">
                    
                    <div class="w-1/2">

                    </div>

                    <div class="w-1/2 ">
                        <img :src="product.image" alt="" class="object-contain" />
                    </div>
                </div>
            </swiper-slide>
        </swiper-container>
        <div class="w-full h-full flex">
            <div class="">

            </div>
        </div> 
    </section>-->
</template>


<style scoped>
.sad {
    background: #ffccf4;
}
</style>

<script setup lang="ts">
import { addIcons } from "oh-vue-icons";
import { FaShippingFast, FcCustomerSupport, MdHighquality } from "oh-vue-icons/icons";
import { GiCycle } from "oh-vue-icons/icons/gi";
import { RiSecurePaymentLine, RiTruckLine } from "oh-vue-icons/icons/ri";
import { ServicesCard } from "../components";
import { products } from "../assets/mock/products";
let date = new Date();

let monthYear = date.toLocaleString("en-us", { month: "long", year: "numeric" });

let services = [
    {
        id: 1,
        title: "Fast Delivery",
        description: "Lorem exe aque, odit?",
        bgColor: "#e2b3b5",
        iconName: "ri-truck-line",
    },
    {
        id: 2,
        title: "Free Shipping",
        description: "Lorem repellendus exercitation?",
        bgColor: "#572c41",
        iconName: "fa-shipping-fast",
    },
    {
        id: 3,
        title: "24/7 Support",
        description: "Lorem haw dus exercitati",
        bgColor: "#aff0b5",
        iconName: "fc-customer-support",
    },
    {
        id: 4,
        title: "Secure Payment",
        description: "Lorem lit. dagnus ercitati",
        bgColor: "#d8f784",
        iconName: "ri-secure-payment-line",
    },
    {
        id: 5,
        title: "Easy Returns",
        description: "Lorem adipisicing elit.",
        bgColor: "#a6dbd7",
        iconName: "gi-cycle",
    }, {
        id: 6,
        title: "High Quality ",
        description: "Loret consectetur adipisicing elit.",
        bgColor: "#ffccf4",
        iconName: "md-highquality",
    }
];

let serviceIcons = [FcCustomerSupport, FaShippingFast, RiTruckLine, RiSecurePaymentLine, GiCycle, MdHighquality];

addIcons(...serviceIcons);
//brainshop AI
</script>