<template>
    <div role="main" class="">
        <div class="container m-12 rounded mx-auto flex bg-cover bg-center" :style="{
            'background-image': 
                backgroundSize !== BackgroundSize.MOBILE ? 
                    `url(${bgImg})` : '',
        }">
            <div class="my-auto w-full grid md:grid-cols-2 grid-cols-1 sm:p-16">
                <div class="flex text-white p-auto mb-12 px-8 text-center">
                    <div v-motion-pop-visible-once class="m-auto">
                        <h1 class="text-xl text-center sm:text-left sm:text-5xl py-8 font-extrabold">
                            Welcome to .esrup!
                        </h1>
                        <p class="text-sm text-center sm:text-left sm:text-base font-base sm:font-semibold max-md:hidden">
                            By signing up, you'd unlock a new world of exciting
                            products, personalized recommendations, and exclusive offers
                            tailored just for you! Join our ever-growing community of
                            happy customers and enjoy the convenience of online shopping with us!
                        </p>
                    </div>
                </div>
                <div class="px-8 mb-8">
                    <div role="alert" v-if="errorMessage" class="bg-red-800 border border-red-200 text-red-50 px-4 py-3 rounded relative mt-3 mx-auto flex space-x-2 flex-1 items-center justify-center mb-4 w-fit">
                        <span class="-ml-1">
                        <ExclamationTriangleIcon class="w-6 h-6 text-yellow-100" />
                        </span>
                        <!--  -->
                        <span class="leading-4 mb-1">{{errorMessage}}</span>
                        
                    </div>
                    <!-- <button
                        class="px-16 sm:px-0 w-full border-b-4 border-red-primary-translucent mb-3 sm:mb-6 text-sm sm:text-base font-semibold text-white bg-blue-accent rounded-lg py-4">
                        Try it free 7 days
                        <span class="font-light"> then $20/mo. thereafter</span>
                    </button> -->
                    <div v-motion-pop class="rounded-lg bg-white p-5 sm:p-10 border-b-4 border-red-primary-translucent">
                        <Form @submit="onSubmit" :validation-schema="schema">
                            <Field name="firstName" type="text"
                                class="outline-none w-full focs:border-2 focus:border-blue-accent text-black text-sm font-semibold border py-4 px-8 rounded-lg mb-4"
                                placeholder="First Name" />
                            <ErrorMessage name="firstName"
                                class="inline-flex text-red-primary text-xs font-bold mb-5" />
                            <Field name="lastName" type="text"
                                class="outline-none w-full focs:border-2 focus:border-blue-accent text-black text-sm font-semibold border py-4 px-8 rounded-lg mb-4"
                                placeholder="Last Name" />
                            <ErrorMessage name="lastName"
                                class="inline-flex text-red-primary text-xs font-bold mb-5" />
                            <Field name="email" type="email"
                                class="outline-none w-full focs:border-2 focus:border-blue-accent text-black text-sm font-semibold border py-4 px-8 rounded-lg mb-4"
                                placeholder="Email Address" />
                            <ErrorMessage name="email" class="inline-flex text-red-primary text-xs font-bold mb-5" />
                            <Field name="password" type="password"
                                class="outline-none w-full focs:border-2 focus:border-blue-accent text-black text-sm font-semibold border py-4 px-8 rounded-lg mb-4"
                                placeholder="Password" />
                            <ErrorMessage name="password"
                                class="inline-flex text-red-primary text-xs font-bold mb-5" />
                            <Field name="confirmPassword" type="password"
                                class="outline-none w-full focs:border-2 focus:border-blue-accent text-black text-sm font-semibold border py-4 px-8 rounded-lg mb-4"
                                placeholder="Confirm Password" />
                            <ErrorMessage name="confirmPassword"
                                class="inline-flex text-red-primary text-xs font-bold mb-5" />
                            <Field name="phone" type="text"
                                class="outline-none w-full focs:border-2 focus:border-blue-accent text-black text-sm font-semibold border py-4 px-8 rounded-lg mb-4"
                                placeholder="Phone Number" />
                            <ErrorMessage name="phone" class="inline-flex text-red-primary text-xs font-bold mb-5" />
                            <Field name="address" type="text"
                                class="outline-none w-full focs:border-2 focus:border-blue-accent text-black text-sm font-semibold border py-4 px-8 rounded-lg mb-4"
                                placeholder="Address" />
                            <ErrorMessage name="address" class="inline-flex text-red-primary text-xs font-bold mb-5" />

                            <p class="text-xs sm:text-left text-center text-grayish-blue-neutral px-2">
                                By clicking the button, you are agreeing to our
                                <span class="text-red-primary cursor-pointer">Terms and Conditions</span>
                            </p>


                            <div>
                                <button type="submit"
                                    class="flex w-full justify-center rounded-md bg-blue-accent px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-5">Sign
                                    up</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped></style>

<script setup lang="ts">
import bgImg from "@/assets/arrangement-black-friday-shopping-carts-with-copy-space.jpg";
import coverImg from "@/assets/orange-copy-space-background-with-sale-idea.jpg";
import {BackgroundSize, getBackgroundSize} from "@/util/get-bg-size";
import {
    Form, Field,
    ErrorMessage,
} from 'vee-validate';
import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { object, string, ref as yupRef } from 'yup';
import {  } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { NewUser } from "../generated";

const store = useStore();
const router = useRouter();
let loading = false;
let errorMessage = ref('');

const onSubmit = (user: NewUser, { resetForm }: any) => {
    loading = true;
    store.dispatch("auth/register", user).then(
        (x) => {
            errorMessage.value = '';
            console.log(x)

            resetForm();
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
    email: string().required().min(3, 'Must be at least 3 characters long').email('Must be a valid email').label('Email Address'),
    firstName: string().required().min(3).label('First Name'),
    lastName: string().required().min(3).label('Last Name'),
    password: string().required().min(8).label('Your Password'),
    confirmPassword: string().required().oneOf([yupRef("password")], "Passwords must match!").label('Confirm Password'),
    phone: string().required().min(5).label("Phone"),
    address: string().required().min(10).label("Address"),
});


let viewportWidth = ref(window.innerWidth);
let viewportHeight = ref(window.innerHeight);

const backgroundSize = ref<BackgroundSize | undefined>(BackgroundSize.MOBILE);
// gets the background size as soon as the app runs
backgroundSize.value = getBackgroundSize(
  viewportWidth.value,
  viewportHeight.value
);

const handleResize = () => {
  viewportWidth.value = window.innerWidth;
  viewportHeight.value = window.innerHeight;
  // gets the background size when window is resized
  backgroundSize.value = getBackgroundSize(
    viewportWidth.value,
    viewportHeight.value
  );
}

onMounted(() => {
    document.body.style.backgroundImage = `url(${coverImg})`;

    window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
    document.body.style.backgroundImage = '';
    window.removeEventListener("resize", handleResize);

});
</script>