<template>
    <div class="container mx-auto p-4">
      <header>
        <h1 class="text-4xl font-bold mb-4">My Nuxt 3 App</h1>
      </header>
      <NavigationTail />
      <!-- This is where the content of your pages will be rendered -->
      <slot />
      
      <footer>
        <p class="text-center mt-4">© 2023 My Nuxt App</p>
      </footer>
    </div>
  </template>
  
  <script>
import NavigationTail from '../components/NavigationTail.vue';

  export default {
    name: 'DefaultLayout',
    components: { NavigationTail }
}
  </script>
  
  <style>
  /* Global styles for your layout can go here */
  </style>
  