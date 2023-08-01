export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-2-pwa",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  pwa: {
    manifest: {
      name: "My Awesome App",
      lang: "en",
      icons: [
        {
          src: "/icon_72x72.png",
          fileName: "icon_72x72",
          sizes: "72x72",
        },
        {
          src: "/icon_96x96.png",
          fileName: "icon_96x96",
          sizes: "96x96",
        },
        {
          src: "/icon_144x144.png",
          fileName: "icon_144x144",
          sizes: "144x144",
        },
      ],
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/pwa"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
