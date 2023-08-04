<template>
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-[90]" @close="$emit('close')">
        <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
  
        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
                <DialogPanel class="pointer-events-auto w-full max-w-md">
                  <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div class="flex items-start justify-between">
                        <DialogTitle class="text-lg font-semibold  text-gray-900">Cart</DialogTitle>
                        <div class="ml-3 flex h-7 items-center">
                          <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500" @click="$emit('close')">
                            <span class="sr-only">Close panel</span>
                            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
  
                      <div class="mt-8">
                        <div class="flow-root">
                          <ul role="list" class="-my-6 divide-y divide-gray-200">
                            <li v-for="item in items" :key="item.product.id" class="flex py-6">
                              <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img :src="item.product.image" :alt="item.product.name" class="h-full w-full object-cover object-center" />
                              </div>
  
                              <div class="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div class="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <router-link :to="'/product' + item.product.id">{{ item.product.name }}</router-link>
                                    </h3>
                                    <p class="ml-4 font-semibold text-xs leading-4 text-gray-500 my-2">${{ item.product.price }}</p>
                                  </div>
                                  <p class="mt-1 text-sm text-gray-500 capitalize">{{ item.product.category }}</p>
                                </div>
                                <div class="flex flex-1 items-end justify-between text-sm">
                                  <p class="text-gray-500">Qty: {{ item.quantity }}</p>
  
                                  <div class="flex">
                                    <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
  
                    <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div class="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>${{totalAmount.toFixed(2)}}</p>
                      </div>
                      <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div class="mt-6" @click="$emit('close')">
                        <router-link 
                          to="/make-order" 
                          class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-white hover:text-indigo-600 hover:border-indigo-600 transition delay-10 duration-200 ease-out"
                        >
                          Make Order
                        </router-link>
                      </div>
                      <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" @click="$emit('close')">
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>
  
  <script setup lang="ts">
  import { computed, ref, onMounted } from 'vue'
  import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
  import { XMarkIcon } from '@heroicons/vue/24/outline';
  import { useStore } from "vuex";
  import { type RootState } from '@/store';
import { CartActions, CartGetters, CartStateItem } from '@/store/constants';
import { StoreNames } from '@/store/store-names.enum';
import { Product } from '@/generated';
  
  const store = useStore<RootState>();

  const items = computed<CartStateItem[]>(() => store.getters[`${StoreNames.CART}/${CartGetters.ITEMS}`]);
  const totalAmount = computed<number>(() => store.getters[`${StoreNames.CART}/${CartGetters.TOTAL_AMOUNT}`]);

  const props = defineProps<{
    open: boolean
  }>();
  
  onMounted(() => {
    store.dispatch(`${StoreNames.CART}/${CartActions.GET_CART}`)
  });
  </script>