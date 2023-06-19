<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
    <!--
      This example requires updating your template:
  
      ```
      <html class="h-full bg-white">
      <body class="h-full">
      ```
    -->
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">Sign in to your account</h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form :validation-schema="schema" @submit.prevent="handleSubmit" class="space-y-6" >
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-200">Email address</label>
            <div class="mt-2">
              <Field 
                id="email" 
                name="email" 
                type="email" 
                autocomplete="email" 
                required 
                class="block w-full rounded-md border-0 py-1.5 text-gray-700 text-sm font-medium shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none form-input border-none focus:ring-0" 
              />
              <ErrorMessage name="email" class="inline-flex text-red-primary text-xs font-bold mt-2" />
            </div>
          </div>
  
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-200">Password</label>
              <div class="text-sm">
                <router-link to="/forgot-password" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</router-link>
              </div>
            </div>
            <div class="mt-2">
              <Field id="password" name="password" 
                type="password" 
                autocomplete="current-password" 
                required class="block w-full rounded-md border-0 py-1.5 text-gray-700 text-sm font-medium shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none form-input border-none focus:ring-0" 
              />
              <ErrorMessage name="password" class="inline-flex text-red-primary text-xs font-bold mt-2" />
            </div>
          </div>
  
          <div>
            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </Form>
  
        <p class="mt-10 text-center text-sm text-gray-500">
          Not a member?
          {{ ' ' }}
          <router-link to="/signup" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Register now!</router-link>
        </p>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
import bgImg from "@/assets/arrangement-black-friday-shopping-carts-with-copy-space.jpg";
import coverImg from "@/assets/orange-copy-space-background-with-sale-idea.jpg";
import {
    Form, Field,
    ErrorMessage,
} from 'vee-validate';
import { onMounted, onUnmounted, ref } from "vue";
import { object, string } from "yup";

const handleSubmit = (ev: Event) => {

}

const schema = object({
  email: string().required().min(3, 'Email must be at least 3 characters long').email('Must be a valid email').label('Email Address'),
  password: string().required().min(8, 'Password must be at least 8 characters long').label('Your Password'), 
})

onMounted(() => {
    document.body.style.backgroundImage = `url(${bgImg})`;
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
});

onUnmounted(() => {
    document.body.style.backgroundImage = '';

});
</script>