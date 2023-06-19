<template>
    <Header v-if="!ignoreBaseComps.includes($route.path.slice(1))" />
    <router-view></router-view>
    <Footer v-if="!ignoreBaseComps.includes($route.path.slice(1))" />
</template>


<style scoped>

</style>

<script setup lang="ts">
import Header from './Header.vue';
import Footer from './Footer.vue';

const ignoreBaseComps = [
    'signup',
    'signin',
]
</script>