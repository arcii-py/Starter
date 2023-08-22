<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-md w-96">
            <h1 class="text-2xl font-semibold mb-4">Sign in</h1>
            <form @submit.prevent="login">
                <ErrorAlert :error-msg="authError" @clearError="clearError" />
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-600 mb-2">Email address</label>
                    <input class="w-full p-2 border rounded-md" type="text" placeholder="Email address" v-model="email" />
                </div>
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-600 mb-2">Password</label>
                    <input class="w-full p-2 border rounded-md" type="password" placeholder="Password" v-model="password" />
                </div>
                <div class="mb-4">
                    <button class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600" type="submit"
                        :disabled="loading">
                        Sign in
                    </button>
                </div>
                <div class="text-center">
                    <NuxtLink to="/forgot-password" class="text-blue-500 hover:underline">Forgot your password?</NuxtLink>
                </div>
            </form>
            <div class="mt-4 text-center">
                <p class="mb-2">Don’t have a SupaAuth account?</p>
                <NuxtLink to="/register">
                    <button class="bg-gray-200 text-gray-700 p-2 rounded-md hover:bg-gray-300">
                        Create new account
                    </button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
  
    
<script setup lang="ts">
definePageMeta({
    layout: "auth"
})
useHead({
    title: 'Login | supaAuth'
})
const user = useSupabaseUser()
const loading = ref(false)
const authError = ref('')
const email = ref('')
const password = ref('')
const client = useSupabaseClient()

watchEffect(async () => {
    if (user.value) {
        await navigateTo('/')
    }
});

const login = async () => {
    loading.value = true
    const { error } = await client.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })
    if (error) {
        loading.value = false
        authError.value = 'Invalid login credentials'
        setTimeout(() => {
            authError.value = ''
        }, 5000)
    }
}

const clearError = () => {
    authError.value = '';
};
</script>