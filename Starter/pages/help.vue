<template>
  <section class="pt-16 lg:pt-20 pb-8">
    <!-- Video Container with Floating Screen Effect -->
    <div class="transform perspective-1000 rotate-x-4 space-y-4 sm:space-y-6 lg:space-y-8 max-w-2xl mx-4 sm:mx-auto">
      <!-- Heading -->
      <h1 class="text-center text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight mb-2">
        Welcome to <span class="gradient-text text-4xl sm:text-5xl lg:text-7xl">MOTI</span>!
      </h1>

      <!-- Description -->
      <p
        class="text-center text-gray-700 text-base sm:text-lg lg:text-2xl leading-snug sm:leading-relaxed lg:leading-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur
        leo. Vestibulum et felis ex.
      </p>

      <!-- Video Component -->
      <div class="relative custom-shadow rounded-lg overflow-hidden">
        <video ref="videoElement"
          poster="https://images.unsplash.com/photo-1496262967815-132206202600?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1823&q=80"
          preload="metadata" controlslist="nodownload" draggable="false" class="w-full">
          <source src="videos\pexels-bruno-cervera-11649326_(720p).mp4" type="video/mp4">
        </video>
        <!-- Play Button: Only show if isPlaying is false -->
        <button v-if="!isPlaying" @click="playVideo" aria-label="Play"
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-70 p-2 sm:p-3 lg:p-4 rounded-full">
          <!-- SVG Play Icon -->
          <svg viewBox="0 0 24 24" width="24" height="24" class="fill-current text-gray-800">
            <path d="M3 22V2l18 10L3 22z"></path>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>
  
<style scoped>
.custom-shadow {
  box-shadow: 0 10px 28px rgba(10, 10, 10, 0.185), 0 6px 16px rgba(7, 7, 7, 0.26);
}

.gradient-text {
  background: linear-gradient(60deg, rgb(72, 154, 247), rgb(68, 218, 128));
  -webkit-background-clip: text;
  color: transparent;
}
</style>
  
<script>
export default {
  name: 'VideoWithTitle',
  data() {
    return {
      isPlaying: false
    };
  },
  methods: {
    playVideo() {
      this.$refs.videoElement.play();
      this.$refs.videoElement.controls = true;
      this.isPlaying = true;
    }
  }
}
</script>
  