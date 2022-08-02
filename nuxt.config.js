export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '阿展前端工程師',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // './assets/css/main.css',
    './assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    './plugins/i18n.js' // 設置多國語言
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt', // 使用 bootstrap-vue 模板
  ],

  // 使用 bootstrap-vue 模板
  bootstrapVue: {
    // Install the `IconsPlugin` plugin (in addition to `BootstrapVue` plugin)
    icons: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  axios: {
    // https://axios.nuxtjs.org/options/
  },

  // 路由 *修改後必須重新啟用項目
  router: {
    // 中間件
    middleware: 'redirect', // middleware 資料夾內的 redirect.js
    // 延伸路由 (路由, 解析)
    extendRoutes(routes, resolve) {
      routes.push(
        // path: '*' 沒有此路徑 redirect 重新定向路徑，但 layouts/error 佈局的錯誤就無法再被使用
        // {
        //   name: '404',
        //   path: '*',
        //   redirect: '/404'
        // }
      )
    }
  }

}
