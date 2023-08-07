<template>
  <transition-root :show="true">
    <dialog as="div" class="fixed inset-0 z-10 overflow-y-auto" @close="$emit('close')">
      <div class="flex items-center justify-center min-h-screen p-4">
        <transition-child
          as="div"
          enter-active-class="ease-out duration-300"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="ease-in duration-200"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm" />
        </transition-child>

        <transition-child
          as="div"
          enter-active-class="ease-out duration-300 transform"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="ease-in duration-200 transform"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div v-if="order" class="relative bg-white p-8 rounded-md shadow-md max-w-md w-full">
            <dialog-title as="h2" class="text-xl font-semibold mb-4">
              Payment Successful!
            </dialog-title>
            <p class="text-gray-700 mb-6">
                Please proceed to /user/orders to track your order.
            </p>
            <button
              @click="onClose"
              class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </transition-child>
      </div>
    </dialog>
  </transition-root>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { TransitionRoot, Dialog, TransitionChild, DialogTitle } from '@headlessui/vue';
import { useRoute } from 'vue-router';
import { OrderExcluding_access_code_, PaymentControllerService } from "@/generated"

const emit = defineEmits<{
    close: () => void;
}>();

const props = defineProps<{
    reference: string | null
}>();

const order = ref<OrderExcluding_access_code_ | null>(null);

const route = useRoute();
const verifyPayment = async () => {
    const res = props.reference && await PaymentControllerService.paymentControllerVerify(
        props.reference
    );

    if (res) {
        order.value = res;
    }
}

onMounted(verifyPayment);
</script>
