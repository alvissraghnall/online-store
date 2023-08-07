<template>
    <intro-head 
        mini-head-text="View the entire set of your completed transactions."
    >
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">

            <table class="w-full text-sm text-left text-gray-500 font-poppins">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50  dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="text-left px-6 py-3">
                            &nbsp;
                        </th>
                        <th scope="col" class="text-left px-6 py-3">
                            <abbr title="Transaction ID">Txn ID</abbr>
                        </th>
                        <th scope="col" class="text-left px-6 py-3">
                            <div class="flex items-center">
                                Date
                            </div>
                        </th>
                        <th scope="col" class="text-left px-6 py-3">
                            <div class="flex items-center">
                                Order
                            </div>
                        </th>
                        <th scope="col" class="text-left px-6 py-3">
                            <div class="flex items-center">
                                Amount
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <!-- <tr v-for="(txn, idx) in sortedOrders" class="even:bg-gray-200 even:bg-opacity-30 last:border-b last:border-dotted last:border border-b dark:bg-gray-900 dark:border-gray-700">
                        <td class="px-6 py-4">
                            {{ idx + 1 }}
                        </td>
                        <th scope="row" class="px-6 py-4 font-dm_sans font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            #{{ new Date(txn.date).toLocaleDateString('en-GB') }}
                        </th>
                        <td class="px-6 py-4">
                            {{ txn.orderId }}
                        </td>
                        <td class="px-6 py-4">
                            {{ txn.amount }}
                        </td>
                    </tr> -->
                </tbody>
            </table>

        </div>
        <div class="font-medium font-inter max-md:text-lg text-xl lg:text-2xl xl:text-3xl tracking-wider 2xl:text-4xl flex justify-center m-8">No Transactions found!</div>

    </intro-head>
    
</template>

<script setup lang="ts">
import { IntroHead } from "@/components/dashboard";
</script>