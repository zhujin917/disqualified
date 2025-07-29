// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  // devtools: { enabled: true }
  devtools: { enabled: false },
  app: {
    rootAttrs: {
      id: "app"
    },
    head: {
      title: "DISQUALIFIED"
    }
  }
})
