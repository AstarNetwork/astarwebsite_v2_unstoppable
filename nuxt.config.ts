// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    baseURL: "/",
    head: {
      script: [
        {
          hid: "gtm",
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-53GS73F');`,
          type: "text/javascript",
        },
      ],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "nuxt-schema-org"
  ],
  runtimeConfig: {
    public: {
      siteUrl: "https://unstoppable.astar.network",
    },
  },
  schemaOrg: {
    host: "https://unstoppable.astar.network",
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
      {
        code: "ja",
        name: "日本語",
        iso: "ja-JP",
        files: ["ja.json", "ja-vision.json"],
      },
    ],
    langDir: "lang",
    defaultLocale: "en",
    strategy: "prefix_except_default",
  },
});
