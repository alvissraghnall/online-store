<template>
    <Header v-if="!ignoreBaseComps.includes($route.path.slice(1)) && $route.name !== 'not-found'" />

        <router-view :key="$route.fullPath" />
    <Footer v-motion-slide-visible-bottom v-if="!ignoreBaseComps.includes($route.path.slice(1)) && $route.name !== 'not-found'" />
</template>


<style scoped>

</style>

<script setup lang="ts">
import Header from './Header.vue';
import Footer from './Footer.vue';
const ignoreBaseComps = [
    'signup',
    'signin',
];
</script>