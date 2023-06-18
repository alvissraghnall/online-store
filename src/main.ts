import { createApp } from 'vue'
import './style.css';
import 'vue3-toastify/dist/index.css';
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import { routes } from './routes';
import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';
import { HeadVuePlugin } from "@vueuse/head";
import { register } from "swiper/element/bundle";
import store from './store';

register();

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);

app.use(store);
app.use(router);
app.use(HeadVuePlugin);
app.use(Vue3Toasity, {
    autoClose: 3000
} as ToastContainerOptions);

app.mount('#app')
