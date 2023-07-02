<template>

    <table class="w-full text-base font-poppins">
        <thead>
            <tr class="border-b border-gray-600">
                <th class="text-left p-1 pb-2">
                    &nbsp;
                </th>
                <th class="text-left p-1 pb-2">
                    <abbr title="Order ID">ID</abbr>
                </th>
                <th class="text-left p-1 pb-2">
                    <abbr title="Delivery Address">Address</abbr>
                </th>
                <th class="text-left p-1 pb-2">
                   Date
                </th>
                <th class="text-left p-1 pb-2">
                    Status
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(order, idx) in orders" class="odd:bg-gray-200 odd:bg-opacity-30 last:border-b last:border-dotted last:border">
                <td class="text-center p">
                    {{ idx + 1 }}
                </td>
                <td class="text-center p-1">
                    #{{ order.id }}
                </td>
                <td class="text-center p-1"> <!-- Add 'address' property to Order schema ! -->
                    {{ order.updatedAt }}
                </td>
                <td class="text-center p-1">
                    {{ new Date(Date.parse(order.createdAt ?? Date.now().toString())).toDateString() }}
                </td>
                <td class="text-center p-1">
                    {{ order.status }}
                </td>
            </tr>
        </tbody>
    </table>

</template>

<script setup lang="ts">
import { Order } from '@/generated';


const props = defineProps<{
    orders: Order[]
}>();
</script>