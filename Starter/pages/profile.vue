<template>
    <div class="container">
      <h1>Profile</h1>
      <p>Hello {{ user.email }}</p>
      
    </div>
  </template>
  
  <script setup lang="ts">
  
  const user = useSupabaseUser();
  useHead({
    title: 'My Profile',
    meta: [{ name: 'description', content: 'My amazing site.' }],
    bodyAttrs: {
      class: 'profile',
    },
  });
  </script>
  