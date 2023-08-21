export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/tailwind.css'],
  modules: [
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss'
   // '@vite-pwa/nuxt'
  ],

  // pwa: {
  //   manifest: {
  //     name: "Nuxt3 PWA",
  //     short_name: "Nuxt3 PWA",
  //     description: "Testing Nuxt3 PWA",
  //     icons: [
  //       {
  //         src: "icons/icon_64x64.png",
  //         sizes: "64x64",
  //         type: "image/png",
  //       },
  //       {
  //         src: "icons/icon_144x144.png",
  //         sizes: "144x144",
  //         type: "image/png",
  //       },
  //       {
  //         src: "icons/icon_192x192.png",
  //         sizes: "192x192",
  //         type: "image/png",
  //       },
  //       {
  //         src: "icons/icon_512x512.png",
  //         sizes: "512x512",
  //         type: "image/png",
  //       },  
  //     ],
  //   },
  //   workbox: {
  //     navigateFallback: "/",
  //   },// Pwa dev options 
  //   devOptions: { 
  //     enabled: true,
  //     type: "module",
  //   },// Pwa dev options 
  // }
})
