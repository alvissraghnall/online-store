import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import { routes } from './routes';
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

app.mount('#app')
