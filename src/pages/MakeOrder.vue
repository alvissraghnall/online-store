<template>
  <div class="bg-gray-100 pt-20 font-poppins">
    <h1 class="mb-1 text-center text-2xl font-bold">Items to Order</h1>
    <p class="text-xs mb-10 text-slate-500 text-center"> Select items from your cart you prefer to order now.</p>
    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div class="rounded-lg md:w-2/3">
        <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" v-for="item in items"
          :key="item.product.id">
          <img :src="item.product.image" alt="product-image" class="w-full rounded-lg sm:w-40" />
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">{{ item.product.name }}</h2>
              <p class="mt-1 text-xs text-gray-700">{{ item.product.category }}</p>
            </div>
            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div class="flex items-center border-gray-100 gap-2">
                <span
                  class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  @click="item.quantity -= 1"> - </span>
                <input class="h-8 w-8 md:w-16 border bg-white text-center text-xs outline-none cart-page-input"
                  type="number" v-model="item.quantity" min="1" />
                <span
                  class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  @click="() => item.quantity += 1"> + </span>
              </div>
              <div class="flex items-center space-x-4">
                <p class="text-sm">${{ item.product.price.toFixed(2) }}</p>
                <svg @click="() => removeItem(item)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="h-7 w-7 cursor-pointer duration-150 hover:text-red-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <img src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80" alt="product-image" class="w-full rounded-lg sm:w-40" />
          <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div class="mt-5 sm:mt-0">
              <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
              <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
            </div>
            <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div class="flex items-center border-gray-100">
                <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                <input class="h-8 w-8 border bg-white text-center text-xs outline-none cart-page-input" type="number" value="2" min="1" />
                <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
              </div>
              <div class="flex items-center space-x-4">
                <p class="text-sm">259.000 ₭</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div> -->
      </div>
      <!-- Sub total -->
      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Subtotal</p>
          <p class="text-gray-700">${{ items.reduce(
            (acc, curr) => acc += (curr.product.price * curr.quantity), 0
          ).toFixed(2) }}
          </p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Shipping</p>
          <p class="text-gray-700">$15.99 </p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">${{ (items.reduce(
              (acc, curr) => acc += (curr.product.price * curr.quantity), 0
            ) + 15.99).toFixed(2) }}</p>
            <p class="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <!-- <router-link to="/checkout"> -->

        <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
          @click="checkout">Check out</button>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>


<style scoped></style>


<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import { useStore } from "vuex";
import { type RootState } from '@/store';
import { CartActions, CartGetters, CartStateItem } from '@/store/constants';
import { StoreNames } from '@/store/store-names.enum';
import { ApiError, PaymentControllerService, Product } from '@/generated';
import { toast } from 'vue3-toastify';
import { useRouter } from 'vue-router';

const store = useStore<RootState>();
const router = useRouter();

const cartStateItems = store.getters[`${StoreNames.CART}/${CartGetters.ITEMS}`];
// const totalAmount = ref(store.getters[`${StoreNames.CART}/${CartGetters.TOTAL_AMOUNT}`]);

let items = ref<CartStateItem[]>([...cartStateItems]);

const checkout = async () => {
  console.log(items.value);

  try {
    
    const response = await PaymentControllerService.paymentControllerPay({
      items: items.value,
      amount: (items.value.reduce(
        (acc, curr) => acc += (curr.product.price * curr.quantity), 0
      ) + 15.99)
    });

    window.location.href = response.data.authorization_url;
    
  } catch (err) {
    let error = err as ApiError;
    toast.error(error.body?.error?.message);
  }

}

const removeItem = (el: CartStateItem) => {
  items.value = items.value.filter(item => item.productId !== el.productId);
  console.log(items.value);
}

onMounted(() => {
  store.dispatch(`${StoreNames.CART}/${CartActions.GET_CART}`);
});
</script>