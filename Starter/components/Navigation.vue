<template>
    <nav class="bg-gradient-to-r from-blue-400 to-green-400 p-4 shadow-md text-white">
        <div class="container mx-auto flex justify-between items-center">
            <div class="flex items-center space-x-4">
                <a href="/" class="text-2xl font-bold hover:underline transition-all duration-300">MOTI</a>
                <p v-if="user" class="text-lg typing-effect"> Welcome, {{user.user_metadata.first_name}}! <span>Let's make a difference today.</span></p>
            </div>
            <!-- Rest of the navigation -->
            <div class="space-x-4">
                <a href="/start" class="text-white hover:text-yellow-300 transition-all duration-300">Start Now</a>
                <a href="/explore" class="text-white hover:text-yellow-300 transition-all duration-300">Explore</a>
                <a href="/innovate" class="text-white hover:text-yellow-300 transition-all duration-300">Innovate</a>
                <a href="/connect" class="text-white hover:text-yellow-300 transition-all duration-300">Connect</a>
            </div>
        </div>
    </nav>
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
</script>