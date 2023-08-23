<template>
    <nav class="bg-gradient-to-r from-blue-400 to-green-400 p-4 shadow-md text-white">
        <div class="container mx-auto flex flex-wrap justify-between items-center">
            <div class="flex items-center space-x-4">
                <a href="/" class="text-2xl font-bold hover:underline transition-all duration-300">MOTI</a>
            </div>
            <div class="space-x-4 hidden md:flex">
                <a href="/start" class="text-white hover:text-yellow-300 transition-all duration-300">Start Now</a>
                <a href="/explore" class="text-white hover:text-yellow-300 transition-all duration-300">Explore</a>
                <a href="/innovate" class="text-white hover:text-yellow-300 transition-all duration-300">Innovate</a>
                <a href="/connect" class="text-white hover:text-yellow-300 transition-all duration-300">Connect</a>
            </div>
            <button @click="toggleMenu" class="md:hidden">
                <div :class="{ 'change': menuOpen }" class="burger">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>
            </button>
            <div :class="{ 'open': menuOpen }"
                class="mobile-menu fixed top-0 right-0 w-64 h-full bg-white md:hidden transition-transform transform translate-x-full overflow-hidden">
                <NuxtLink to="/start" class="text-black hover:text-yellow-300 transition-all duration-300 block p-4">
                    Start Now</NuxtLink>
                <NuxtLink to="/explore" class="text-black hover:text-yellow-300 transition-all duration-300 block p-4">
                    Explore</NuxtLink>
                <NuxtLink to="/innovate" class="text-black hover:text-yellow-300 transition-all duration-300 block p-4">
                    Innovate</NuxtLink>
                <NuxtLink to="/connect" class="text-black hover:text-yellow-300 transition-all duration-300 block p-4">
                    Connect</NuxtLink>
                    <button @click="toggleMenu"
                    class="text-black hover:text-yellow-300 transition-all duration-300 block p-4">Close</button>
            </div>
        </div>
    </nav>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

const menuOpen = ref(false);

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
};
</script>
  
<style scoped>
.burger {
    display: inline-block;
    cursor: pointer;
}

.bar1,
.bar2,
.bar3 {
    width: 25px;
    height: 3px;
    margin: 3px 0;
    transition: 0.4s;
    background-color: #fff;
}

.change .bar1 {
    transform: rotate(-45deg) translate(-5px, 6px);
}

.change .bar2 {
    opacity: 0;
}

.change .bar3 {
    transform: rotate(45deg) translate(-5px, -6px);
}

.mobile-menu {
  transition: transform 0.3s ease-in-out;
  z-index: 1000; /* Ensures the menu is above other content */
}

.mobile-menu.open {
  transform: translateX(0);
}

/* Hamburger menu styles */
.burger {
  display: block;
  width: 25px;
  height: 20px;
  position: relative;
}

.bar1, .bar2, .bar3 {
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
  transform: rotate(45deg) translate(-5px, -6px);
}

</style>
  