<template>
  <main>
    <Navigation />
    <slot />
  </main>
  <!-- <Footer /> -->
</template>

<style scoped>
body {
  font-family: 'Open Sans', sans-serif; /* Example font */
  line-height: 1.6;
}

.text-lg {
  font-size: 18px; /* Adjusted size */
}

.transition-all {
  transition: all 0.3s ease-in-out;
}

.space-y-4 {
  margin: 0;
  padding: 0;
  /* Use margin instead of space-between for consistent spacing */
  margin-bottom: 16px;
}

.flex-col {
  align-items: center; /* Center alignment */
}

/* Additional styles can be added here */
</style>
