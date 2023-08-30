export default defineNuxtConfig({
  components: [
    '~/components', 
    '~/components/NavSetup',
    '~/components/Stuff',
    '~/components/ViewAffirm'
    
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      titleTemplate: '%s - MOTI',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Testing MOTI' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' }
      ],
      // other head properties
    },
  },
  devtools: { enabled: true },
  css: ['@/assets/css/tailwind.css'],
  modules: [
    // '@pinia/nuxt',
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt'
  ],
  pwa: {
    manifest: {
      name: "MOTI",
      short_name: "MOTI",
      description: "Testing MOTI",
      icons: [
        {
          src: "icons/icon_64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "icons/icon_144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "icons/icon_192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icons/icon_512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },// Pwa dev options 
    devOptions: {
      enabled: true,
      type: "module",
    },// Pwa dev options 
  }
})
