import { createApp } from 'vue'
import './style.css';
import 'vue3-toastify/dist/index.css';
import App from './App.vue'
import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';
import { IMaskComponent } from 'vue-imask';
import { HeadVuePlugin } from "@vueuse/head";
import { MotionPlugin } from "@vueuse/motion";
import { register } from "swiper/element/bundle";
import store from './store';
import router from './router';

register();

const app = createApp(App);

app.component('mask-input', IMaskComponent)
app.use(store);
app.use(router);
app.use(HeadVuePlugin);
app.use(MotionPlugin);
app.use(Vue3Toasity, {
    autoClose: 3000
} as ToastContainerOptions);

app.mount('#app')
