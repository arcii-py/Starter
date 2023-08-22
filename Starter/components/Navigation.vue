<template>
    <nav class="bg-gradient-to-r from-blue-400 to-green-400 p-4 shadow-md text-white">
        <div class="container mx-auto flex flex-wrap justify-between items-center">
            <div class="flex items-center space-x-4">
                <a href="/" class="text-2xl font-bold hover:underline transition-all duration-300">MOTI</a> 
            </div>
            <!-- Rest of the navigation -->
            <div class="space-x-4 hidden md:flex">
                <a href="/start" class="text-white hover:text-yellow-300 transition-all duration-300">Start Now</a>
                <a href="/explore" class="text-white hover:text-yellow-300 transition-all duration-300">Explore</a>
                <a href="/innovate" class="text-white hover:text-yellow-300 transition-all duration-300">Innovate</a>
                <a href="/connect" class="text-white hover:text-yellow-300 transition-all duration-300">Connect</a>
            </div>
            <!-- Hamburger menu for smaller screens -->
            <button @click="toggleMenu" class="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    class="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            <div v-if="menuOpen" class="absolute top-0 left-0 w-full h-full bg-white md:hidden">
                <!-- Mobile menu content -->
                <div v-if="menuOpen" class="absolute top-0 left-0 w-full h-full bg-white md:hidden">
        <!-- Mobile menu content -->
        <div v-if="menuOpen"
            class="absolute top-0 left-0 w-full h-full bg-white md:hidden flex flex-col justify-center items-center space-y-4">
            <NuxtLink to="/start" class="text-black hover:text-yellow-300 transition-all duration-300">Start Now</NuxtLink>
            <NuxtLink to="/explore" class="text-black hover:text-yellow-300 transition-all duration-300">Explore</NuxtLink>
            <NuxtLink to="/innovate" class="text-black hover:text-yellow-300 transition-all duration-300">Innovate</NuxtLink>
            <NuxtLink to="/connect" class="text-black hover:text-yellow-300 transition-all duration-300">Connect</NuxtLink>
            <button @click="toggleMenu"
                class="text-black hover:text-yellow-300 transition-all duration-300">Close</button>
        </div>
    </div>

            </div>
        </div>
    </nav>
    <p v-if="user" class="text-lg typing-effect hidden md:inline"> Welcome, {{ user.user_metadata.first_name }} !</p>
    <span>Let's make a difference today.</span>
</template>

<script setup lang="ts">
const client = useSupabaseClient()
const user = useSupabaseUser()

useHead({
    title: 'supaAuth',
    meta: [
        { name: 'description', content: 'Nisi prijevljen' }
    ]
})

import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
}
</script>
