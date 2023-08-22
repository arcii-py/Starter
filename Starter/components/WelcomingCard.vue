<template>
    <div class="relative z-10 max-w-screen-md mx-auto mt-20 p-8 sm:p-12 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <p v-if="user" class="text-lg font-medium text-green-600 mb-2">Welcome back, {{ user.user_metadata.first_name }}!
        </p>
        <p v-else class="text-lg font-medium text-red-600 mb-4">Please sign in to continue</p>
        <h1 class="text-3xl font-bold mb-4">Your Personalized Home Page</h1>
        <p class="text-gray-600 mb-6 italic">"Trajalo je 3 dana ali si uspio bravo za tebe."</p>
        <div v-if="user" class="mb-4">
            <button @click="logout"
                class="flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-all"
                :disabled="loading">
                <span :class="{ 'opacity-50': loading }">Log out</span>
            </button>
        </div>
        <div v-else class="flex space-x-4">
            <NuxtLink
                class="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all"
                to="/login">Login</NuxtLink>
            <NuxtLink to="/register">
                <button
                    class="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-all">Sign
                    up</button>
            </NuxtLink>
        </div>
    </div>
    <slot />
</template>

    
<script setup lang="ts">
const client = useSupabaseClient()
const user = useSupabaseUser()
const loading = ref(false)

const logout = async () => {
    loading.value = true
    const { error } = await client.auth.signOut()
    if (error) {
        loading.value = false
        return alert('Something went wrong !')
    }
}

useHead({
    title: 'supaAuth',
    meta: [
        { name: 'description', content: 'Nisi prijevljen' }
    ]
})
</script>