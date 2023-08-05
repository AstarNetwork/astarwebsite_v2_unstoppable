// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "nuxt-gtag"
  ],
  gtag: {
    id: 'G-KHKB1Z7D88'
  },
  i18n: {
    baseUrl: "https://unstoppable.astar.network",
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en-US",
        files: ["en.json", "en-vision.json"],
      },
    ],
    langDir: "lang",
    defaultLocale: "en",
    strategy: "prefix_except_default",
  },
});
