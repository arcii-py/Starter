<!-- components/Counter.vue -->
<template>
    <div>
      <p>Count: {{ counter.count }}</p>
      <button @click="increment">Increment</button>
      <button @click="decrement">Decrement</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useCounterStore } from '~/stores/counter';
  
  const counter = useCounterStore();
  
  const increment = () => {
    counter.increment();
  };
  
  const decrement = () => {
    counter.decrement();
  };
  </script>
  