<template>
  <!-- Add a wrapper div -->
  <div class="relative w-screen h-screen overflow-hidden">
    <div
      class="relative min-h-screen flex flex-col items-center justify-center bg-lightBlue-100 dark:bg-gray-900 animate__animated animate__fadeIn">
      <!-- Scarcity: Limited time offer banner at the top -->
      <div
        class="absolute top-0 left-0 w-full text-center bg-red-500 text-white py-2 z-50 animate__animated animate__fadeInDown">
        Limited Time Offer: <br> Get a free month when you sign up today!
      </div>

      <div
        class="hero-content flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-12 p-4 pt-12 w-full">
        <!-- Text Section -->
        <div
          class="text-center md:text-left space-y-4 text-gray-700 dark:text-white animate__animated animate__fadeInLeft w-full md:w-1/2">
          <h1 class="text-5xl font-bold">Welcome</h1>
          <p class="text-lg">
            Login to start your journey.
          </p>
          <!-- Social Proof: number of people joined -->
          <div class="text-sm text-gray-500">
            Join 10,000+ people discovering their path!
          </div>
        </div>

        <!-- Card Section -->
        <div
          class="card w-full md:max-w-sm shadow-2xl bg-gray-100 dark:bg-gray-800 border-t-4 border-blue-500 dark:border-yellow-500 p-6 space-y-4 rounded-lg animate__animated animate__fadeInRight">
          <form @submit.prevent="login">

            <!-- Email Input -->
            <div class="form-control">
              <label class="label text-lg text-gray-600 dark:text-gray-200">Email</label>
              <input type="email" placeholder="me@example.com"
                class="input input-bordered bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-white w-full p-2 border border-green-500 dark:border-yellow-500 rounded-md focus:outline-none focus:ring-0"
                v-model="email" required />
            </div>

            <!-- Password Input -->
            <div class="form-control">
              <label class="label text-lg dark:text-gray-200">Password</label>
              <input type="password" placeholder="****"
                class="input input-bordered dark:bg-gray-700 dark:text-white w-full p-2 border rounded-md focus:outline-none focus:ring-0"
                v-model="password" required />
              <a href="#" class="label-text-alt text-sm link link-hover dark:text-blue-400">Forgot password?</a>
            </div>

            <!-- Error Message -->
            <div v-if="authError" class="text-red-500 dark:text-red-400 text-sm my-2 flex items-center justify-between">
              <span>{{ authError }}</span>
              <button type="button"
                class="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-400"
                @click="clearError">Clear</button>
            </div>

            <!-- Login Button -->
            <div class="form-control mt-6">
              <button class="btn btn-primary w-full bg-blue-500 text-white dark:bg-yellow-500 dark:text-gray-900"
                type="submit">Unlock Mysteries</button>
            </div>
          </form>

          <!-- Updated Register link -->
          <div class="text-center mt-4">
            <span class="text-gray-600 dark:text-gray-300">Don't have an account?</span>
            <NuxtLink to="/register" class="text-blue-500 hover:underline dark:text-blue-400"> Register</NuxtLink>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref, inject, watchEffect } from 'vue';

const changeBackground: (newClass: string) => void = inject('changeBackground') as (newClass: string) => void;
changeBackground('bg-gradient-to-r from-green-400 to-blue-500');

definePageMeta({ layout: "auth" })
useHead({ title: 'Login | LOA' })

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

<style>
html {
  text-size-adjust: 100%;
}

@keyframes fadeInRight {
  0% {
    /* opacity: 0; */
    /* -webkit-transform: translate3d(100%, 0, 0); */
    /* transform: translate3d(100%, 0, 0); */
    transform: translateX(100%);
  }

  100% {
    /* opacity: 1; */
    /* -webkit-transform: translate3d(0, 0, 0); */
    /* transform: translate3d(0, 0, 0); */
    transform: translateX(0);
  }
}
</style>