// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2024-07-04',
  modules: ['@unocss/nuxt', '@vueuse/nuxt', '@formkit/auto-animate/nuxt', '@pinia/nuxt'],
  css: ['@unocss/reset/tailwind-compat.css', '~/assets/css/style.scss'],
  app: {
    head: {
      title: 'Template App',
      meta: [{ name: 'description', content: 'Nuxt 3 Minimal Starter' }],
      script: [{ src: '/init-theme.js' }, { src: '/scrollreveal.js' }],
    },
  },
  // vueuse: { ssrHandlers: true },
})
