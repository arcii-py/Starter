<template>
  <div :class="bgClass">
    <slot />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const bgClass = ref('bg-red-700');

// Function to change background class
const changeBackground = (newClass) => {
  bgClass.value = newClass;
};
// Provide the function to child components
provide('changeBackground', changeBackground);
</script>



<!-- <template>
  <div class="buJnuC">
    <div class="fvfNpo">
      <div class="uXyMu">
        <AppBackToLogin />
        <div class="fNAZQD">
          <div class="dgrFox">
            <slot />
          </div>
        </div>
        <p class="cyDNyc">
          This site is authenticate by supabase.com and the Supabase
          <a target="_blank" href="https://supabase.com/privacy" rel="noreferrer"> Privacy Policy </a>
          and <a target="_blank" href="https://supabase.com/terms" rel="noreferrer"> Terms of Service </a>
          apply.
        </p>
      </div>
    </div>
  </div>
</template> -->