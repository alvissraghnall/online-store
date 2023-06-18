<template>
    <div role="main">
        <div 
            class="container h-screen mx-auto flex"
            :style="{
                'background-image':
                `url(${bgImg})`,
            }"
        >
            <img :src="bgImg" alt="alt" />
            <div class="my-auto w-full grid md:grid-cols-2 grid-cols-1 sm:p-16">
                <div class="flex text-white p-auto mb-12 px-8 text-center">
                    <div class="m-auto">
                        <h1 class="text-xl text-center sm:text-left sm:text-5xl py-8 font-extrabold">
                            Learn to code by watching others
                        </h1>
                        <p class="text-sm text-center sm:text-left sm:text-base font-base sm:font-semibold">
                            See how experienced developers solve problems in real-time.
                            Watching scripted tutorials isn't right, but understanding how
                            developers think is invaluable.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-8 mb-8">
            <button
                class="px-16 sm:px-0 w-full border-b-4 border-red-primary-translucent mb-3 sm:mb-6 text-sm sm:text-base font-semibold text-white bg-blue-accent rounded-lg py-4">
                Try it free 7 days
                <span class="font-light"> then $20/mo. thereafter</span>
            </button>
            <div class="rounded-lg bg-white p-5 sm:p-10 border-b-4 border-red-primary-translucent">
                <Form @submit.prevent="onSubmit" :validation-schema="schema">
                    <Field name="firstName" type="text"
                        class="outline-none w-full focs:border-2 focus:border-blue-accent text-black text-sm font-semibold border py-4 px-8 rounded-lg mb-4"
                        placeholder="First Name" />
                    <ErrorMessage name="firstName" class="inline-flex text-red-primary text-xs font-bold mb-5 pl-4" />
                    <Field name="lastName" type="text"
                        class="outline-none w-full focs:border-2 focus:border-blue-accent text-black text-sm font-semibold border py-4 px-8 rounded-lg mb-4"
                        placeholder="Last Name" />
                    <ErrorMessage name="lastName" class="inline-flex text-red-primary text-xs font-bold mb-5 pl-4" />
                    <Field name="email" type="email"
                        class="outline-none w-full focs:border-2 focus:border-blue-accent text-black text-sm font-semibold border py-4 px-8 rounded-lg mb-4"
                        placeholder="Email Address" />
                    <ErrorMessage name="email" class="inline-flex text-red-primary text-xs font-bold mb-5 pl-4" />
                    <Field name="password" type="password"
                        class="outline-none w-full focs:border-2 focus:border-blue-accent text-black text-sm font-semibold border py-4 px-8 rounded-lg mb-4"
                        placeholder="Password" />
                    <ErrorMessage name="password" class="inline-flex text-red-primary text-xs font-bold mb-5 pl-4" />
                    <Field name="confirmPassword" type="password"
                        class="outline-none w-full focs:border-2 focus:border-blue-accent text-black text-sm font-semibold border py-4 px-8 rounded-lg mb-4"
                        placeholder="Confirm Password" />
                    <ErrorMessage name="confirmPassword" class="inline-flex text-red-primary text-xs font-bold mb-5 pl-4" />
                    <Field name="phone" type="text"
                        class="outline-none w-full focs:border-2 focus:border-blue-accent text-black text-sm font-semibold border py-4 px-8 rounded-lg mb-4"
                        placeholder="Phone Number" />
                    <ErrorMessage name="phone" class="inline-flex text-red-primary text-xs font-bold mb-5 pl-4" />
                    <Field name="Address" type="text"
                        class="outline-none w-full focs:border-2 focus:border-blue-accent text-black text-sm font-semibold border py-4 px-8 rounded-lg mb-4"
                        placeholder="Address" />
                    <ErrorMessage name="Address" class="inline-flex text-red-primary text-xs font-bold mb-5 pl-4" />
                    
                    <p class="text-xs sm:text-left text-center text-grayish-blue-neutral px-2">
                        By clicking the button, you are agreeing to our
                        <span class="text-red-primary cursor-pointer">Terms and Conditions</span>
                    </p>
                </Form>
            </div>
        </div>
    </div>
</template>


<style scoped></style>

<script setup lang="ts">
import bgImg from "@/assets/arrangement-black-friday-shopping-carts-with-copy-space.jpg";
import { Form, Field, 
    ErrorMessage, } from 'vee-validate';
import {object, string, ref as yupRef} from 'yup';

const onSubmit = (ev: Event) => {

}

const schema = object({
    email: string().required().min(3, 'must be at least 3 characters long').email('must be a valid email').label('Email Address'),
    firstName: string().required().min(3).label('First Name'),
    lastName: string().required().min(3).label('Last Name'),
    password: string().required().min(8).label('Your Password'),
    confirmPassword: string().required().oneOf([yupRef("password")], "Passwords must match!").label('Confirm Password'),
    phone: string().required().min(5),
    address: string().required().min(10),
})

const validateEmail = (value: string) => {
    // if the field is empty
    if (!value) {
        return 'This field is required';
    }

    // if the field is not a valid email
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!regex.test(value)) {
        return 'This field must be a valid email';
    }

    // All is good
    return true;
}
</script>