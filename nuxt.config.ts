// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      //add lang
      htmlAttrs: {
        lang: "ca",
      },
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: "",
        },
        {
          hid: "author",
          name: "author",
          content: "massim.digital",
        },
        {
          hid: "publisher",
          name: "publisher",
          content: "massim.digital",
        },
        {
          hid: "lang",
          name: "lang",
          content: "ca",
        },
        {
          hid: "og:title",
          name: "og:title",
          content: "Memòria 2023 - Reimaginar la Fundació",
        },
        {
          hid: "og:description",
          name: "og:description",
          content:
            "Memòria 2023 Fundació Catalunya La Pedrera - Reimaginar la Fundació",
        },
        {
          hid: "og:type",
          name: "og:type",
          content: "website",
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: "memoria-pedrera-nuxt",
        },
        {
          hid: "og:url",
          name: "og:url",
          content: "https://memoria2022.fundaciocatalunya-lapedrera.com",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:site",
          name: "twitter:site",
          content: "@massim.digital",
        },
        {
          hid: "twitter:creator",
          name: "twitter:creator",
          content: "@massim.digital",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Memòria 2023 - Reimaginar la Fundació",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Memòria 2023 Fundació Catalunya La Pedrera - Reimaginar la Fundació",
        },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: "https://memoria2022.fundaciocatalunya-lapedrera.com",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
