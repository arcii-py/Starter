<template>
    <div 
      :class="{'shrink': isShrunk}" 
      @click="toggleShrink" 
      @mouseover="expand"
      class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mt-4 rounded shadow-md transition-all duration-500 flex items-center justify-center cursor-pointer" 
      role="alert"
    >
      <div v-if="!isShrunk" class="content">
        <p class="font-bold mb-2">Development Notice</p>
        <p>If you've found this app, please be aware that it's still in development. Changes will be made frequently. You're welcome to use it, but proceed with caution and be aware of potential updates and changes.</p>
      </div>
      <span v-if="isShrunk" class="text-xl font-bold">D</span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Disclaimer',
    data() {
      return {
        isShrunk: false
      };
    },
    methods: {
      toggleShrink() {
        this.isShrunk = !this.isShrunk;
      },
      expand() {
        if (this.isShrunk) {
          this.isShrunk = false;
        }
      }
    },
    mounted() {
      setTimeout(() => {
        this.isShrunk = true;
      }, 10000); // 10 seconds
    }
  }
  </script>
  
  <style scoped>
  .shrink {
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 50%;
  }
  .content {
    max-width: 400px; /* Adjust as needed */
    text-align: center;
  }
  </style>
  