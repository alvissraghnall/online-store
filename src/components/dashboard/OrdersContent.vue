<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

        <table class="w-full text-sm text-left text-gray-500 font-poppins">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50  dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="text-left px-6 py-3">
                        &nbsp;
                    </th>
                    <th scope="col" class="text-left px-6 py-3">
                        Order ID
                    </th>
                    <th scope="col" class="text-left px-6 py-3">
                        <div class="flex items-center">
                            Address
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                        </div>
                    </th>
                    <th scope="col" class="text-left px-6 py-3">
                        <div class="flex items-center">
                            Date
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                        </div>
                    </th>
                    <th scope="col" class="text-left px-6 py-3">
                        <div class="flex items-center">
                            Status
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(order, idx) in orders" class="even:bg-gray-200 even:bg-opacity-30 last:border-b last:border-dotted last:border border-b dark:bg-gray-900 dark:border-gray-700">
                    <td class="px-6 py-4">
                        {{ idx + 1 }}
                    </td>
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        #{{ order.id }}
                    </th>
                    <td class="px-6 py-4"> <!-- Add 'address' property to Order schema ! -->
                        {{ order.id }}
                    </td>
                    <td class="px-6 py-4">
                        {{ new Date(Date.parse(order.createdAt ?? Date.now().toString())).toDateString() }}
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex items-center mx-auto rounded-md shadow capitalize w-fit px-4 p-2" :class="{ 
                            'text-green-500 bg-green-100': order.status === Order.status.COMPLETED,
                            'text-yellow-500 bg-yellow-100': order.status === Order.status.PENDING,
                            'text-red-500 bg-red-100': order.status === Order.status.CANCELLED,
                            'text-orange-500 bg-orange-100': order.status === Order.status.PROCESSING,
                        
                        }">
                            {{ order.status }}

                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script setup lang="ts">
import { Order } from '@/generated';


const props = defineProps<{
    orders: Order[]
}>();
</script>