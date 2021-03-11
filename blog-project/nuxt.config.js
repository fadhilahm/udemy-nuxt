const bodyParser = require('body-parser');
const axios = require('axios');

export default {
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'WD Blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Check out my cool blog!' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Open+Sans"}
    ]
  },
  loading: { color: '#fa923f', height: '6px', duration: 5000 },
  loadingIndicator: {
    name: 'circle',
    color: '#fa923f'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/core-component.js',
    '~plugins/date-filter.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxt-blog-8d745-default-rtdb.firebaseio.com'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-8d745-default-rtdb.firebaseio.com',
    fbAPIKey: 'AIzaSyD28nlSj11vRv5ZWY6vVSsTQIyLSqmmrRg',
    serverMiddlewareBaseUrl: 'http://localhost:3001'
  },

  router: {
    extendRoutes: function(routes, resolve) {
      routes.push({
        path: '*',
        component: resolve(__dirname, 'pages/index.vue')
      });
    },
    // middleware: 'log'
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  server: {
    port: process.env.PORT || 3001
  },

  serverMiddleware: [
    bodyParser.json(),
    '~api'
  ],

  generate: {
    routes: function() {
      return axios.get('https://nuxt-blog-8d745-default-rtdb.firebaseio.com/posts.json')
        .then(({ data }) => {
          const routes = [];
          for (const key in data) {
            routes.push({
              route: `/posts/${key}`,
              payload: {
                postData: data[key]
              }
            });
          }
          return routes;
        })
    }
  }
}
