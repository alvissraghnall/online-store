<template>
    <main class="mt-16 my-4 lg:p-3 lg:ml-40">
        <div class="container mx-auto font-poppins ">
            <div class="flex justify-between mb-4">
                <div class="max-lg:ml-3 flex items-baseline">
                    <h3 class="text-lg md:text-xl lg:text-3xl capitalize font-semibold"> orders </h3>
                    <span class="text-xs font-semibold ml-1.5 text-neutral-500 inline">
                        {{ numberOfOrders }} orders found
                    </span>
                </div>

                <div class="bg-purple-700 rounded-md shadow-sm">

                </div>
            </div>

            <div class="mb-2">
                <ul class="flex justify-start p-0 list-none">
                    <li class="my-0 mx-4 text-gray-500 cursor-pointer" v-for="(item, index) in tabs" :key="index" @click="handleTabChange(index)">
                        <div class="capitalize" :class="{ 'pb-2 border-b-2 border-solid border-purple-500 text-purple-500': item === activeTab }">
                            {{ item }}
                        </div>
                    </li>
                </ul>
            </div>

            <orders-content
                :orders="ordersInView"
                @remove-sort="handleRemoveSort"
            />
            
        </div>
    </main>
</template>

<script setup lang="ts">
import { Order } from '@/generated';
import { ref } from 'vue';
import { OrdersContent } from "@/components/dashboard";

let numberOfOrders = 22;

const tabs = ["All Orders", ...Object.keys(Order.status)].map(el => el.toLowerCase().charAt(0) + el.toLowerCase().slice(1));
let activeTab = ref(tabs[0]);

const handleRemoveSort = () => {
    ordersInView.value = ordersInView.value.slice();
}

const handleTabChange = (id: number): void => {
    activeTab.value = tabs[id];
    if(id !== 0) ordersInView.value = orders.filter(
    
        order => order.status === activeTab.value
    );
    else {
        ordersInView.value = orders;
    }
    console.log(ordersInView.value);
    console.log(tabs, id, activeTab.value);
}

const orders: Order[] = [
    {
        products: [{ quantity: 1 }],
        status: Order.status.COMPLETED,
        createdAt: new Date(2023, 6, 4, 12, 44).toISOString(),
        date: new Date(2023, 6, 4, 12, 44).toISOString(),
        id: (Math.random() * 10000000).toFixed()
    },
    {
        products: [{ quantity: 1 }],
        status: Order.status.CANCELLED,
        createdAt: new Date(2023, 1, 4, 12, 44).toISOString(),
        date: new Date(2023, 1, 4, 12, 44).toISOString(),
        id: (Math.random() * 10000000).toFixed()
    },
    {
        products: [{ quantity: 1 }],
        status: Order.status.PENDING,
        createdAt: new Date(2023, 4, 4, 12, 44).toISOString(),
        date: new Date(2023, 4, 4, 12, 44).toISOString(),
        id: (Math.random() * 10000000).toFixed()
    },
    {
        products: [{ quantity: 1 }],
        status: Order.status.PROCESSING,
        createdAt: new Date(2022, 6, 10, 12, 44).toISOString(),
        date: new Date(2022, 6, 10, 12, 44).toISOString(),
        id: (Math.random() * 10000000).toFixed()
    },
    {
        products: [{ quantity: 1 }],
        status: Order.status.COMPLETED,
        createdAt: new Date(2020, 9, 4, 12, 44).toISOString(),
        date: new Date(2020, 9, 4, 12, 44).toISOString(),
        id: (Math.random() * 10000000).toFixed()
    },
];

const ordersInView = ref(orders);
</script>