<template>
    <Header @sidebarOpened="() => sidebarOpen = true" />
    <Drawer :open="sidebarOpen" @close="() => sidebarOpen = false" />

    <router-view :key="$route.fullPath" />
</template>

<script setup lang="ts">
    import Header from "./Header.vue";
    import Drawer from "./Drawer.vue";
    import { ref } from "vue";

    let sidebarOpen = ref(false);
</script>