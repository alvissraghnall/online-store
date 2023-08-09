<template>
    <div v-motion-slide-visible-right class="relative overflow-x-auto shadow-md sm:rounded-lg">

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
                        <div class="flex items-center cursor-pointer" @click="changeArrowDirection('address')">
                            Address
                            <a class="w-1.5 h-1.5 flex items-center">
                                <OhVueIcon
                                    v-if="arrowDirections.address !== ArrowDirection.NEUTRAL"
                                    :name="
                                        arrowDirections.address === ArrowDirection.DOWN ? 'ri-arrow-down-s-fill'
                                        : arrowDirections.address === ArrowDirection.UP ? 'ri-arrow-up-s-fill' : ''
                                    "
                                />
                            </a>
                        </div>
                    </th>
                    <th scope="col" class="text-left px-6 py-3">
                        <div class="flex items-center cursor-pointer" @click="changeArrowDirection('date')">
                            Date
                            <a class="w-1.5 h-1.5 flex items-center">
                                <OhVueIcon
                                    v-if="arrowDirections.date !== ArrowDirection.NEUTRAL"
                                    :name="
                                        arrowDirections.date === ArrowDirection.DOWN ? 'ri-arrow-down-s-fill'
                                        : arrowDirections.date === ArrowDirection.UP ? 'ri-arrow-up-s-fill' : ''
                                    "
                                />
                            </a>
                        </div>
                    </th>
                    <th scope="col" class="text-left px-6 py-3">
                        <div class="flex items-center cursor-pointer" @click="() => changeArrowDirection('status')">
                            Status
                            <a
                                class="w-1.5 h-1.5 flex items-center"
                            >
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg> -->
                                <OhVueIcon
                                    v-if="arrowDirections.status !== ArrowDirection.NEUTRAL"
                                    :name="
                                        arrowDirections.status === ArrowDirection.DOWN ? 'ri-arrow-down-s-fill'
                                        : arrowDirections.status === ArrowDirection.UP ? 'ri-arrow-up-s-fill' : ''
                                    "
                                />
                            </a>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-motion-slide-visible-left v-for="(order, idx) in sortedOrders" class="even:bg-gray-200 even:bg-opacity-30 last:border-b last:border-dotted last:border border-b dark:bg-gray-900 dark:border-gray-700">
                    <td class="px-6 py-4">
                        {{ idx + 1 }}
                    </td>
                    <th scope="row" class="px-6 py-4 font-dm_sans font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        #{{ order.id }}
                    </th>
                    <td class="px-6 py-4"> <!-- Add 'address' property to Order schema ! -->
                        {{ order.id }}
                    </td>
                    <td class="px-6 py-4">
                        {{ new Date(order.createdAt!).toLocaleDateString('en-GB') }}
                    </td>
                    <td class="px-6 py-4">
                        <div class="flex items-center mx-auto rounded-md shadow capitalize w-24 justify-center px-4 p-2" :class="{ 
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
import { ref, type Ref, reactive, computed } from 'vue';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { RiArrowDownSFill, RiArrowUpSFill } from 'oh-vue-icons/icons';

addIcons(RiArrowDownSFill, RiArrowUpSFill);

const props = defineProps<{
    orders: Order[]
}>();
const emit = defineEmits(['removeSort']);

const sortedOrders = computed(() => props.orders);
// sortedOrders.value = props.orders;
console.log(props.orders);

const statusOrderToBeSorted = {
  [Order.status.CANCELLED]: 1,
  [Order.status.PENDING]: 2,
  [Order.status.PROCESSING]: 3,
  [Order.status.COMPLETED]: 4,
};

const sortOrders = (field: keyof typeof arrowDirections) => {
    console.log(field, props.orders, props.orders.map(r => r.status));
    switch (field) {
        case 'date':
            console.log('date')
            arrowDirections[field] === ArrowDirection.UP
            ? sortedOrders.value.sort(
                (a, b) => a.date!.localeCompare(b.date!)
            )
            : arrowDirections[field] === ArrowDirection.DOWN
            ? sortedOrders.value.sort(
                (a, b) =>  a.date! > b.date! ? -1 : a.date! < b.date! ? 1 : 0
            ) : emit('removeSort')
            break;
        case 'address':
            console.log('address');
            arrowDirections[field] === ArrowDirection.UP
                ? sortedOrders.value.sort((a, b)  => {
                    return a.id!.toLowerCase() < b.id!.toLowerCase() ? -1 : a.id!.toLowerCase() > b.id!.toLowerCase() ? 1 : 0;
                })
                : arrowDirections[field] === ArrowDirection.DOWN
                ? sortedOrders.value.sort((a, b)  => {
                    return a.id!.toLowerCase() < b.id!.toLowerCase() ? -1 : a.id!.toLowerCase() > b.id!.toLowerCase() ? 1 : 0;
                }).reverse()
                : emit('removeSort')
            break;
        default:
            console.log('status')
            arrowDirections[field] === ArrowDirection.UP
                ? sortedOrders.value.sort((a, b)  => {
                    // return a.status === Order.status.CANCELLED ? -1 : a.status === Order.status.PENDING && b.status === Order.status.PROCESSING ? 1 : 0;
                    // return Order.status[a.status] > Order.status[b.status] ? 1 : -1;
                    return statusOrderToBeSorted[a.status!] - statusOrderToBeSorted[b.status!];
                })
                : arrowDirections[field] === ArrowDirection.DOWN
                ? sortedOrders.value.sort((a, b)  => statusOrderToBeSorted[a.status!] - statusOrderToBeSorted[b.status!]).reverse()
                : sortedOrders.value.sort(
                    (a, b) => { console.log(props.orders.map(s => s.status)); return props.orders.indexOf(a) - props.orders.indexOf(b)}
                );
            console.log(sortedOrders.value.map(r => r.status));
            break;
    }
}

const cancelSort = (a: Order, b: Order) => {

}

enum ArrowDirection {
    UP, DOWN, NEUTRAL
}

const arrowDirections = reactive({
    address: ArrowDirection.NEUTRAL,
    date: ArrowDirection.NEUTRAL,
    status: ArrowDirection.NEUTRAL,
})

const currArrowDirection = ref(ArrowDirection.NEUTRAL);

const changeArrowDirection = (key: keyof typeof arrowDirections) => {
    console.log(arrowDirections[key]);
    if (arrowDirections[key] === ArrowDirection.NEUTRAL) {
        arrowDirections[key] = ArrowDirection.DOWN;
    } else if (arrowDirections[key] === ArrowDirection.DOWN) {
        arrowDirections[key] = ArrowDirection.UP;
    } else if (arrowDirections[key] === ArrowDirection.UP) {
        arrowDirections[key] = ArrowDirection.NEUTRAL;
    }
    console.log(arrowDirections[key], arrowDirections);

    sortOrders(key);
}
</script>