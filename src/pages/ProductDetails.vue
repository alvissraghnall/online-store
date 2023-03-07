<template>
    <section class="h-32 bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-purple-900 flex justify-center items-center">
        <h2 class="text-white/80 text-center font-semibold text-xl md:text-2xl lg:text-3xl font-mono">{{ name }}</h2>
    </section>

    <section>
        <div class="flex mx-auto">
            <div class="w-1/2">
                <img :src="image" alt="">
            </div>
            <div class="w-1/2 mt-24">
                <h2 class="text-3xl mb-2.5">{{ name }}</h2>
                <div class="flex items-center gap-5 mb-4">
                    <div class="gap-1 flex">
                        <span v-for="r in rating">
                            <OhVueIcon
                                name="bi-star-fill"
                                fill="#525afc"
                            />
                        </span>
                    </div>
                    <span class="text-[#525afc] font-semibold text-base">432 ratings</span>
                </div>
                <span class="text-xl font-mono font-medium">${{ price }}</span>

                <p class="text-gray-600 text-sm my-4"> {{ description }}</p>

                <button 
                    class="text-white bg-[#525afc] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:text-[#525afc] hover:bg-[#eee] hover:border-[#4b5aff] hover:border-solid hover:border active:scale-125 active:border-none active:outline-none transition-all duration-150 ease-in-out"
                    @click="addToCart"
                >
                    Add to cart
                </button>
            </div>
        </div>
    </section>

    <section class="mx-16">
        <div class="flex flex-row w-full mx-auto">

            <div class="">
                <div class="tabs font-medium text-base flex gap-4 items-center">
                    <h5 class="cursor-pointer" :class="{ 'font-semibold bg-[#525afc] p-3 rounded-lg text-white/80': tab === 'desc' }" @click="() => tab = 'desc'">Description</h5>
                    <h5 class="cursor-pointer" :class="{ 'font-semibold bg-[#525afc] p-3 rounded-lg text-white/80': tab === 'rev' }" @click="() => tab = 'rev'">Reviews (483) </h5>
                </div>
                
                <div v-if="tab === 'desc'" class="mt-4">
                    <p class="leading-7 mb-12">{{ description }}</p>
                </div>
                <div class="mt-4" v-else>
                    <div class="">
                        <ul>
                            <li v-for="rev in reviews" class="mb-4">
                                <div class="flex gap-3">
                                    <h6 class="text-neutral-800 font-normal"> John Stars</h6>
                                    <div class="gap-1 flex">
                                        <span v-for="r in Math.round(rev.rating)">
                                            <OhVueIcon
                                                name="bi-star-fill"
                                                fill="#525afc"
                                            />
                                        </span>
                                    </div>
                                </div>
                                <p class="mt-2.5 text-zinc-700/75">{{ rev.text }}</p>
                            </li>
                        </ul>

                        <div class="w-2/3 m-auto my-12">
                            <h4 class="font-bold mb-8 text-xl">
                                Leave a review
                            </h4>
                            <form @submit="handleSubmit">
                                <div class="mb-7 flex items-center gap-4">
                                    <span v-for="i in 5" class="flex items-center color[#525afc] font-semibold gap-x-1.5 cursor-pointer active:scale-125 duration-200 ease-in-out" @click="() => ratingInput = i">{{i}}
                                        <OhVueIcon
                                            :name="ratingInput >= i ? 'bi-star-fill' : 'bi-star'"
                                            fill="#525afc"
                                        />
                                    </span>
                                </div>
                                <div class="mb-7">
                                    <textarea 
                                        type="text" 
                                        :rows="4" 
                                        placeholder="Enter review..." 
                                        required
                                        class="w-full border border-solid border-[#525afc] rounded-md py-2 px-5 focus:outline-none"
                                        :value="reviewMsg"
                                        @input="(ev) => reviewMsg = (ev.target as HTMLTextAreaElement).value"
                                    >
                                    </textarea>
                                </div>

                                <button type="submit" class="text-white focus:border-none bg-[#525afc] font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:text-[#525afc] hover:bg-[#eee] hover:border-[#4b5aff] hover:border-solid hover:border">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="related mx-7 mt-2 mb-4">
        <div class="w-full">
            <h2 class="capitalize first-letter:font-mono text-xl font-semibold ">you might also like</h2>
            <div class="w-full flex">
                <div class="flex flex-wrap justify-evenly mx-auto">
                    <div v-for="product in relatedProducts">
                        <ProductItemCard :product="product" />
                    </div> 
                    
                </div>
            </div>
        </div>
    </section>


    <Toast
        msg="Product added to cart!"
        :success="true"
        :show="showToast"
        @close-toast="closeToast"
    />
</template>


<style scoped>

</style>

<script setup lang="ts">
import { addIcons, OhVueIcon } from "oh-vue-icons";
import { BiStar, BiStarFill } from "oh-vue-icons/icons";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { allProducts } from "../assets/mock/products";
import { ProductItemCard, Toast } from "../components";

let rating = 4;
let reviews = [{
    rating: 3.4,
    text: "lorem ipsum dolor sit amet. consectur init mapir ali david?"
}, {
    rating: 4.2,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste deleniti blanditiis ex accusamus dicta quod quam aliquid.'
}, {
    rating: 4.9,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nisi iste. Molestiae, vitae.'
}]
let tab = ref<"desc" | "rev">("desc");
const { id } = useRoute().params;
const product = allProducts.find(prod => prod.id === Number.parseInt(id as string));
const { 
    name,
    image,
    price,
    category,
    description,
} = product ?? allProducts[0];

onMounted(() => console.log(useRoute().params, id))
addIcons(BiStarFill, BiStar);

let ratingInput = ref(0);
let reviewMsg = ref("");

const relatedProducts = allProducts.filter(item => item.category === category);
console.log(category, relatedProducts);

const handleSubmit = (ev: Event) => {
    ev.preventDefault();
    console.log(ratingInput, reviewMsg);
}

let showToast = ref(false);

const store = useStore();
let timeout: number;

const addToCart = () => {
    store.commit('ADD_CART_ITEM', product);

    showToast.value = true;
    timeout = setTimeout(() => {
        showToast.value = false;
    }, 7000)
}

const closeToast = () => {
    showToast.value = false; 
    clearTimeout(timeout);
}
</script>