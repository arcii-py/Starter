export default defineNuxtConfig({
  imports: {
    dirs: ['stores'],
  },
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
      titleTemplate: '%s - LOA',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Testing LOA' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css' }
      ],
      // other head properties
    },
  },
  // devtools: { enabled: true },
  css: ['@/assets/css/tailwind.css'],
  modules: [
    [
    '@pinia/nuxt',
    {
      autoImports: ['defineStore', 'acceptHMRUpdate'],
    },
  ],
    '@nuxtjs/supabase',
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt'
  ],
    supabase: {
      "redirect": true,
      "redirectOptions": {
        "login": "/login",
        "callback": "/confirm",
        "exclude": ["/register"]
      }
    },
  pwa: {
    manifest: {
      name: "Law of attraction",
      short_name: "LOA",
      description: "Law of attraction affirmation helper.",
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
    // Pwa dev options 
    // workbox: {
    //   navigateFallback: "/",
    // },
    // Pwa dev options 
    devOptions: {
      enabled: true,
      type: "module",
    },
  }
})
