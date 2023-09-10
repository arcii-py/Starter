<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navigation -->
    <Navigation />

    <!-- Main Content -->
    <div class="flex-grow">
      <!-- Your main content goes here -->
      <slot />
    </div>

    <!-- Footer -->
    <footer class="bg-white shadow-md mt-8">
      <div class="container mx-auto px-4 py-4">
        <p class="text-center text-gray-600">© 2023 LOA. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>



<script setup>
import Navigation from '~/components/NavSetup/Navigation.vue';

</script>