<template>
  <div class="relative w-screen h-screen overflow-hidden">
    <div class="relative min-h-screen flex flex-col items-center justify-center bg-lightBlue-100 dark:bg-gray-900 animate__animated animate__fadeIn">
      
      <!-- Limited Time Offer Banner -->
      <div class="absolute top-0 left-0 w-full text-center bg-green-500 text-white py-2 z-50 animate__animated animate__fadeInDown">
        Limited Time Offer: <br> Get a free month when you sign up today!
      </div>

      <!-- Main Content -->
      <div class="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-12 p-4 pt-12 w-full">
        <div class="text-center md:text-left space-y-4 text-gray-700 dark:text-white animate__animated animate__fadeInLeft w-full md:w-1/2">
          <h1 class="text-5xl font-bold">Create an Account</h1>
          <p class="text-lg">Join us and start your journey.</p>
          <div class="text-sm text-gray-500">Join thousands discovering their path!</div>
        </div>
        
        <!-- Registration Form -->
        <div class="card w-full md:max-w-sm shadow-2xl bg-gray-100 dark:bg-gray-800 border-t-4 border-green-500 dark:border-yellow-500 p-6 space-y-4 rounded-lg animate__animated animate__fadeInRight">
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

         <div class="form-control mt-4">
              <button class="btn btn-primary w-full bg-green-500 text-white dark:bg-yellow-500 dark:text-gray-900" type="submit" :disabled="loading">
                Sign up
              </button>
            </div>
            <div class="mt-4 text-center text-sm">
              By signing up you agree to our
              <a href="#" class="text-green-500 hover:underline">API Terms of Service</a>
              and
              <a href="#" class="text-green-500 hover:underline">Privacy Policy</a>.
            </div>
          </form>
        </div>
      </div>
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