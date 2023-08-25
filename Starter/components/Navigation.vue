<template>
    <nav class="bg-gradient-to-r from-blue-400 to-green-400 p-4 shadow-md text-white relative">
        <div class="container mx-auto flex flex-wrap justify-between items-center">
            <a href="/" class="text-2xl font-bold hover:underline transition-all duration-300">MOTI</a>
            <DesktopMenu />
            <MobileMenu />
        </div>
    </nav>
    <!-- <GreatingUser /> -->
</template>


<script setup lang="ts">
import DesktopMenu from './DesktopMenu.vue';
import MobileMenu from './MobileMenu.vue';
</script>
