<template>
    <main class="mt-20 my-4 lg:p-3 lg:ml-40">
        <div class="container mx-auto -p-3 font-poppins">
            <h3 class="text-lg lg:text-3xl font-semibold mt-5 lg:-mt-4"> Personal Information</h3>
            <p class="mt-2 text-sm text-neutral-400">
                View and manage your personal information - including email address, phone
                numbers, & where you can be contacted.
            </p>

            <div class="m-4 p-5">
                <div class="grid grid-cols-2 gap-4">
                    <div v-for="(item, idx) in data" :key="idx" class="rounded-md border-y hover:bg-purple-200 cursor-pointer border-purple-300 border-solid transition duration-200 ease-out">
                        <div class="flex flex-col p-2 gap-[0.38rem]">
                            <div class="flex justify-between">
                                <h6 class="font-medium text-base lg:leading-2 capitalize">{{ item.field }}</h6>
                                <OhVueIcon
                                    :name="item.icon"
                                    fill="rgb(233 213 255)"
                                />
                            </div>
                            <p class="font-normal text-sm font-dm_sans">{{ item.value }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </main>
</template>

<script setup lang="ts">
    import {
        OhVueIcon, addIcons
    } from "oh-vue-icons";
    import {
        CoMinutemailer, GiRotaryPhone, GiGlobe
    } from "oh-vue-icons/icons";

    addIcons(
        CoMinutemailer, GiRotaryPhone, GiGlobe
    );

    const data = [
        { field: "name", value: "Astar Gomez", icon: "co-user" },
        { field: "email", value: "astargomez@yahoo.co.uk", icon: "co-minutemailer" },
        { field: "phone", value: "+1303842", icon: "gi-rotary-phone" },
        { field: "country, region", value: "israel, tbilisi", icon: "gi-globe" },
    ]
</script>