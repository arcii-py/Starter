<template>
  <main>
    <div class="p-4 lg:p-16 min-h-screen flex items-center justify-center ">
      <div class="max-w-md mx-auto w-full bg-white p-4 rounded-lg shadow-md">
        <h1 class="text-2xl font-bold mb-4 text-center">Welcome Back!</h1>
        <form @submit.prevent="login">
          <ErrorAlert :error-msg="authError" @clearError="clearError" />
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-600 mb-2">Email address</label>
            <input class="w-full p-2 border rounded-md" type="email" v-model="email" />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-600 mb-2">Password</label>
            <input class="w-full p-2 border rounded-md" type="password"  v-model="password" />
          </div>
          <div class="mb-4">
            <button  type="submit"
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
  </main>
</template>

  
<script setup lang="ts">
import { ref, inject, watchEffect } from 'vue';

// Inject the changeBackground function from the layout
const changeBackground: (newClass: string) => void = inject('changeBackground') as (newClass: string) => void;

// Use the function to change the background
changeBackground('bg-gradient-to-r from-blue-400 to-purple-500');

definePageMeta({
  layout: "auth"
})
useHead({
  title: 'Login | LOA'
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