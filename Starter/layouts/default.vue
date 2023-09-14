<template>
  <main class="flex flex-col min-h-screen">
  <div class="">
    <!-- Navigation -->
    <Navigation />
  </div>
    <!-- Main Content -->
    <div class="flex-grow pb-16 md:pb-0"> <!-- Add padding-bottom on mobile -->
      <!-- Your main content goes here -->
      <slot />
    </div>

    <!-- Footer -->
    <footer class="bg-white shadow-md mt-8">
      <div class="container mx-auto px-4 py-4">
        <p class="text-center text-gray-600">© 2023 LOA. All rights reserved.</p>
      </div>
    </footer>
  </main>
</template>



<script setup>
import Navigation from '~/components/NavSetup/Navigation.vue';

</script>