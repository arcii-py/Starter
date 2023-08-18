<template>
  <VitePwaManifest />
  <NuxtLayout>
    <index />
  </NuxtLayout>
</template>

<script>
// Import the index.vue component
import Index from './pages/index.vue'

export default {
  name: 'App',
  components: {
    // Register the index.vue component
    Index
  }
}
</script>

<style>
/* Global styles for your app can go here */
</style>
