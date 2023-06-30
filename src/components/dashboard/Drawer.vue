
<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10 lg:hidden" @close="$emit('close')">
      <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100"
        leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-16">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="-translate-x-full" enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700" 
              leave-from="translate-x-0"
              leave-to="-translate-x-full">
              <DialogPanel class="pointer-events-auto w-full max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div class="flex items-start justify-end">
                      <!-- <DialogTitle class="text-lg font-semibold  text-gray-900">Cart</DialogTitle> -->
                      <div class="ml-3 flex h-7 items-center">
                        <button type="button"
                          class="-m-2 p-2 text-gray-400 hover:text-gray-500 outline-none border-none focus:outline-none"
                          @click="$emit('close')">
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div class="mt-8">
                      <div class="flow-root">
                        <ul role="list" class="-my-6">
                          <li v-for="item in items" :key="item.name.toLowerCase()" class="flex py-2 items-center hover:bg-purple-200 active:bg-purple-200 hover:text-purple-500 px-2">
                            <div class="h-full w-12 flex-shrink-0 border-gray-200">
                              <OhVueIcon :name="item.iconName" fill="#333333" />
                            </div>

                            <div class="-ml-4 flex-col">
                              <h3>
                                <router-link
                                  class="text-base font-semibold text-gray-500 no-underline hover:text-gray-500"
                                  :to="item.name.toLowerCase()">{{ item.name }}</router-link>
                              </h3>

                            </div>
                          </li>
                        </ul>
                      </div>
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

  <div class="hidden lg:inline-block mt-12 ml-3 lg:mt-0 lg:top-12 border-neutral-700 fixed">
    <div class="flow-root">
      <ul role="list" class="my-6">
        <li v-for="item in items" :key="item.name.toLowerCase()" class="flex py-2 items-center hover:bg-purple-200 active:bg-purple-200 hover:text-purple-500 px-2">
          <div class="h-full w-12 flex-shrink-0 border-gray-200">
            <OhVueIcon :name="item.iconName" fill="#333333" />
          </div>

          <div class="-ml-4 flex-col">
            <h3>
              <router-link class="text-base font-semibold text-gray-500 no-underline hover:text-gray-500"
                :to="item.name.toLowerCase()">{{ item.name }}</router-link>
            </h3>

          </div>
        </li>
      </ul>
    </div>
    <hr class="w-[1]" size="500" style="0 auto" width="1" />
  </div>
</template>
  
<script setup lang="ts">
import {
  OhVueIcon, addIcons
} from "oh-vue-icons";
import {
  CoUser,
  MdFavorite,
  FcSettings,
  BiBookmarks,
  MdDeliverydining,
  FaRegularUserCircle,
  IoHeartOutline,
  BiHeart
} from "oh-vue-icons/icons";
import { computed, ref, onMounted } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { useStore } from "vuex";
import { type RootState } from '@/store';
import { CartActions, CartGetters, CartStateItem } from '@/store/constants';
import { StoreNames } from '@/store/store-names.enum';

addIcons(
  FaRegularUserCircle, IoHeartOutline, FcSettings, BiBookmarks, MdDeliverydining, BiHeart, CoUser
);

const store = useStore<RootState>();

const props = defineProps<{
  open: boolean
}>();

const items = [
  { iconName: "fa-regular-user-circle", name: "Profile", link: "profile" },
  { iconName: "bi-heart", name: "Favourites", link: "favorites" },
  { iconName: "md-deliverydining", name: "Orders", link: "orders" },
  { iconName: "bi-bookmarks", name: "Transactions", link: "transactions" },
  { iconName: "fc-settings", name: "Settings", link: "settings" },
]


</script>