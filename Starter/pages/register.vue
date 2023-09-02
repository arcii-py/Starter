<template>
  <div class="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
    <div class="max-w-md w-full space-y-4 bg-white p-6 rounded-lg shadow-md">
      <h1 class="text-2xl font-semibold mb-4 text-center">Create an account</h1>
      <form @submit.prevent="signUp" class="space-y-4">
        <ErrorAlert :error-msg="authError" @clearError="clearError" />
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-600 mb-2">First name</label>
          <input class="w-full p-3 border rounded-md" type="text" placeholder="First name" v-model="name" />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-600 mb-2">Last name</label>
          <input class="w-full p-3 border rounded-md" type="text" placeholder="Last name" v-model="lastname" />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-600 mb-2">Email address</label>
          <input class="w-full p-3 border rounded-md" type="text" placeholder="Email address" v-model="email" />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-600 mb-2">Password</label>
          <input class="w-full p-3 border rounded-md" type="password" placeholder="Password" v-model="password" />
        </div>
        <div class="mt-4">
          <button class="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600" type="submit" :disabled="loading">
            Sign up
          </button>
        </div>
        <div class="mt-4 text-center text-sm">
          By signing up you agree to our
          <a href="#" class="text-blue-500 hover:underline">API Terms of Service</a>
          and
          <a href="#" class="text-blue-500 hover:underline">Privacy Policy</a>.
        </div>
      </form>
    </div>
  </div>
</template>


  
<script setup lang="ts">
import { ref, inject, watchEffect } from 'vue';
// Inject the changeBackground function from the layout
const changeBackground: (newClass: string) => void = inject('changeBackground') as (newClass: string) => void;
// Use the function to change the background
changeBackground('bg-gradient-to-r from-green-500 to-blue-500');

definePageMeta({
  layout: "auth"
})
useHead({
  title: 'Register | supaAuth'
})
const email = ref('')
const password = ref('')
const name = ref('')
const lastname = ref('')
const company = ref('')
const client = useSupabaseClient()
const user = useSupabaseUser()
const loading = ref(false)
const authError = ref('')

watchEffect(async () => {
  if (user.value) {
    await navigateTo('/')
  }
});

const signUp = async () => {
  if (!name.value) return authError.value = 'First name required';
  if (!lastname.value) return authError.value = 'Last name required';
  loading.value = true
  const { error } = await client.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        first_name: name.value,
        last_name: lastname.value,
        company: company.value
      }
    }
  })
  if (error) {
    loading.value = false
    authError.value = 'Failed to fetch'
  } else {
    // Redirect to login page if signup is successful
    await navigateTo('/login');
  }
}

const clearError = () => {
  authError.value = ''
}
</script>