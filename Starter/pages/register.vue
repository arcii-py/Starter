<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h1 class="text-2xl font-semibold mb-4">Create an account</h1>
      <form @submit.prevent="signUp">
        <ErrorAlert :error-msg="authError" @clearError="clearError" />
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-2">First name</label>
            <input class="w-full p-2 border rounded-md" type="text" placeholder="First name" v-model="name" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-2">Last name</label>
            <input class="w-full p-2 border rounded-md" type="text" placeholder="Last name" v-model="lastname" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-2">Company (Optional)</label>
            <input class="w-full p-2 border rounded-md" type="text" placeholder="Company" v-model="company" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-2">Email address</label>
            <input class="w-full p-2 border rounded-md" type="text" placeholder="Email address" v-model="email" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-600 mb-2">Password</label>
            <input class="w-full p-2 border rounded-md" type="password" placeholder="Password" v-model="password" />
          </div>
        </div>
        <div class="mt-6">
          <button class="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600" type="submit"
            :disabled="loading">
            Sign up
          </button>
        </div>
        <div class="mt-4 text-center text-sm">
          By signing up you agree to our
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer"
            class="text-blue-500 hover:underline">
            API Terms of Service
          </a>
          and
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
            class="text-blue-500 hover:underline">
            Privacy Policy
          </a>.
        </div>
      </form>
    </div>
  </div>
</template>

  
<script setup lang="ts">
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
  }
}

const clearError = () => {
  authError.value = ''
}
</script>