<template>
    <div class="py-10 px-6">
      <h1 class="text-3xl font-semibold mb-4">Contact Us</h1>
      <p class="text-gray-700 mb-6">
        Have any questions or concerns? Feel free to get in touch with us. We're here to help you.
      </p>
      <form @submit.prevent="submitForm" class="max-w-md">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input type="text" id="name" v-model="formData.name" class="w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500">
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" id="email" v-model="formData.email" class="w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500">
        </div>
        <div class="mb-4">
          <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea id="message" v-model="formData.message" rows="4" class="w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Send Message
        </button>
      </form>
    </div>
  </template>
  
<script setup lang="ts">
  import { ref } from "vue";
    let formData = ref({
      name: '',
      email: '',
      message: '',
    });
    
    const submitForm = () => {
       console.log('Form submitted:', formData);
    }
</script>
  