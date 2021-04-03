export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    host: '0.0.0.0',
  },

  env: {
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUDNAME,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'daisybakes.nl',
    htmlAttrs: {
      lang: 'nl',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/styles.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://cloudinary.nuxtjs.org
    '@nuxtjs/cloudinary',
  ],

  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUDNAME,
    useComponent: true,
  },

  styleResources: {
    scss: ['./assets/base/_breakpoints.scss', './assets/base/_mixins.scss'],
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  hooks: {
    render: {
      errorMiddleware(app) {
        app.use((error, _req, _res, next) => {
          if (error) {
            console.log('Logged in errorMiddleware', error)
          }
          next(error)
        })
      },
    },
  },
}
