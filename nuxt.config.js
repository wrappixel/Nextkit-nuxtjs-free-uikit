import i18n from './core/utils/locale'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: function () {
      return process.env.META_TITLE
    },
    title: process.env.META_TITLE,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: process.env.META_TITLE,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: process.env.META_URL,
      },
      {
        hid: 'og:description',
        property: 'og:url',
        content: process.env.META_DESCRIPTION,
      },
      {
        hid: 'title',
        property: 'title',
        content: process.env.META_TITLE,
      },
      {
        hid: 'url',
        property: 'url',
        content: process.env.META_URL,
      },
      {
        hid: 'description',
        property: 'url',
        content: process.env.META_DESCRIPTION,
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/style.scss'],

  // Customize the progress-bar color
  loading: {
    color: 'DodgerBlue',
    height: '5px',
    continuous: true,
    duration: 3000,
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/core/plugins.js',
    '@/core/services/http.js',
    '@/plugins/vue-typed-js.js',
    '@/plugins/vuetify.options.js',
    '@/plugins/i18n.js',
    '@/plugins/vueFlag.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/device',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv', '@nuxtjs/auth'],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/scss/variables.scss'],
    optionsPath: './vuetify.options.js',
    treeShake: true,
    options: {
      customProperties: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  router: {
    base: '/',
    middleware: ['i18n', 'router'],
  },
  axios: {
    baseUrl: process.env.BASE_URL,
    proxyHeaders: false,
    credentials: false,
  },
  serverMiddleware: ['~/server-middleware/index'],
  googleFonts: {
    families: {
      'Open+Sans': true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
    },
    download: true,
  },
  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         staff: {
  //           url: '/staff',
  //           method: 'post',
  //           propertyName: 'access',
  //         },
  //         // tokenRequired: true,
  //         // logout: false
  //       }
  //     },
  //     watchLoggedIn: true,
  //     // redirect: {
  //     //   login: '/login',
  //     //   logout: '/',
  //     //   callback: '/login',
  //     //   home: '/'
  //     // }
  //   }
  // },
}
