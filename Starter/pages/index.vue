<template>
  <div class="relative z-10 max-w-screen-sm mx-auto mt-20 p-4">
    <p v-if="user" class="text-lg font-medium text-green-600 mb-4">Hi {{ user.user_metadata.first_name }}</p>
    <p v-else class="text-lg font-medium text-red-600 mb-4">unauthenticated</p>
    <h1 class="text-3xl font-bold mb-4">
      Nuxt3 + Supabase
      <br>
      Starter Template
    </h1>
    <p class="text-gray-600 mb-6">
      Authentication template with email and password, using Supabase. If you want a quick start to your next Nuxt3 app, please feel free to use this template.
    </p>
    <div v-if="user" class="mb-4">
      <button @click="logout" class="flex items-center justify-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" :disabled="loading">
        <span :class="{ 'opacity-50': loading }">Log out</span>
        <!-- SVG icon can be styled further if needed -->
      </button>
    </div>
    <div v-else class="flex space-x-4">
      <NuxtLink class="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" to="/login">
        Login 
        <!-- SVG icon can be styled further if needed -->
      </NuxtLink>
      <NuxtLink to="/register">
        <button class="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Sign up
        </button>
      </NuxtLink>
    </div>
  </div>
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
      { name: 'description', content: 'Authentication template with email and password, using Supabase. If you want to a quick start to your next Nuxt3 app, please feel free to use this template.' }
    ]
  })
  </script>