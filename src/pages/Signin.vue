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

      <div role="alert" v-if="errorMessage" class="bg-red-800 border border-red-200 text-red-50 px-4 py-3 rounded relative mt-3 mx-auto flex space-x-2 flex-1 items-center justify-center">
        <span class="-ml-1">
          <ExclamationTriangleIcon class="w-6 h-6 text-yellow-100" />
        </span>
        <!--  -->
        <span class="leading-4 mb-1">{{errorMessage}}</span>
        
      </div>
  
      <div v-motion-pop class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form :validation-schema="schema" @submit="handleSubmit" class="space-y-6" >
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
import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";
import { onMounted, onUnmounted, ref, computed } from "vue";
import { object, string } from "yup";
import { useStore } from "vuex";
import { AuthState } from "@/store/modules/auth.module";
import { useRouter } from "vue-router";
import { AuthControllerService, NewUser } from "../generated";
const store = useStore();
const router = useRouter();
let loading = false;
let errorMessage = ref('');

type LoginUser = Pick<Required<NewUser>, "email" | "password">;

const handleSubmit = (user: unknown) => {
  loading = true;
  store.dispatch("auth/login", user).then(
    (x) => {
      // router.push("/profile");
      errorMessage.value = '';
      console.log(x)
    }
  ).catch(
    (error) => {
      console.log(error);
      loading = false;
      errorMessage.value = error.body?.error?.message;
      console.log(error.url, error.body, errorMessage.value);
    }
  )
  console.log(loading, user);
}

const schema = object({
  email: string().required().min(3, 'Email must be at least 3 characters long').email('Must be a valid email').label('Email Address'),
  password: string().required().min(8, 'Password must be at least 8 characters long').label('Your Password'), 
});

const isLoggedIn = computed(() => (store.state.auth as AuthState).status.loggedIn);
if (isLoggedIn) {
  // router.push("/profile");
}

onMounted(() => {
    document.body.style.backgroundImage = `url(${bgImg})`;
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
});

onUnmounted(() => {
    document.body.style.backgroundImage = '';

});
</script>@/store/modules/auth.module