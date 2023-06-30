<template>
    <div class="container mx-auto font-poppins ">
        <h3 class="text-lg md:text-xl lg:text-3xl capitalize font-semibold"> favorites </h3>
        <p class="text-sm font-normal text-neutral-400 ">
            Find your saved items and get ready to order them.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div class="gap-3 shadow-lg bg-[#eee] rounded-md " v-for="product in products">
                <div class="" >

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const products = [
    {
        "id": "645b19fb71f219bde0bab078",
        "createdAt": "2023-06-11T23:09:57.507Z",
        "updatedAt": "2023-06-25T00:35:01.914Z",
        "name": "iPhone XS Max",
        "description": "Welcome to the big screens! Super Retina in two sizes — including the largest display ever on an iPhone. Even faster Face ID. The smartest, most powerful chip in a smartphone. And a breakthrough dual‑camera system. iPhone XS is everything you love about iPhone. Taken to the extreme.",
        "category": "mobile",
        "price": 544,
        "rating": 5,
        "image": "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-xs-max-5.jpg"
    },
    {
        "id": "648653e99e28c58805ed3374",
        "createdAt": "2023-06-11T23:08:25.804Z",
        "updatedAt": "2023-06-25T00:28:10.352Z",
        "name": "Fones de ouvido",
        "description": "Welcome to the big buns! Super nti in two sizes — including the biggest sounds ever on a Headset. Even faster Face ID. The smartest, most powerful chip in a smartphone. And a breakthrough dual‑camera system. iPhone XS is everything you love about iPhone. Taken to the extreme.",
        "category": "headset",
        "price": 1239,
        "rating": 4,
        "image": "https://cdn.pixabay.com/photo/2021/11/11/23/25/headphones-6787507_960_720.jpg"
    },
    {
        "id": "648913adbcda066c28cf9855",
        "createdAt": "2023-06-14T01:11:09.097Z",
        "updatedAt": "2023-06-25T00:28:10.352Z",
        "name": "Fones de ouvido",
        "description": "Welcome to the big buns! Super nti in two sizes — including the biggest sounds ever on a Headset. Even faster Face ID. The smartest, most powerful chip in a smartphone. And a breakthrough dual‑camera system. iPhone XS is everything you love about iPhone. Taken to the extreme.",
        "category": "headset",
        "price": 1239,
        "rating": 4,
        "image": "https://cdn.pixabay.com/photo/2021/11/11/23/25/headphones-6787507_960_720.jpg"
    },
    {
        "id": "648915e6a36b8773789bd406",
        "createdAt": "2023-06-14T01:20:38.203Z",
        "updatedAt": "2023-06-25T00:28:10.352Z",
        "name": "Fones de ouvido",
        "description": "Welcome to the big buns! Super nti in two sizes — including the biggest sounds ever on a Headset. Even faster Face ID. The smartest, most powerful chip in a smartphone. And a breakthrough dual‑camera system. iPhone XS is everything you love about iPhone. Taken to the extreme.",
        "category": "headset",
        "price": 1239,
        "rating": 4,
        "image": "https://cdn.pixabay.com/photo/2021/11/11/23/25/headphones-6787507_960_720.jpg"
    },
    {
        "id": "649775622955bfe4370fd864",
        "createdAt": "2023-06-24T22:59:45.894Z",
        "updatedAt": "2023-06-25T00:28:10.352Z",
        "name": "Fones de ouvido",
        "description": "Welcome to the big buns! Super nti in two sizes — including the biggest sounds ever on a Headset. Even faster Face ID. The smartest, most powerful chip in a smartphone. And a breakthrough dual‑camera system. iPhone XS is everything you love about iPhone. Taken to the extreme.",
        "category": "headset",
        "price": 1239,
        "rating": 4,
        "image": "https://cdn.pixabay.com/photo/2021/11/11/23/25/headphones-6787507_960_720.jpg"
    }];

</script>