export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: 'spa',
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'static',
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
        '@nuxtjs/bulma',
        '@nuxtjs/axios',
        '@nuxtjs/dotenv',
        '@nuxtjs/pwa'
    ],
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {
        postcss: {
            preset: {
                features: {
                    customProperties: false
                }
            }
        },
        /*
        ** Overwrite's generated manifest values
        */
        manifest: {
            name: 'Nuxt.js PWA news',
            short_name: 'Nuxt.js PWA',
            lang: 'en',
            display: 'standalone',
        },
        /*
        ** Handle external assets
        */
        workbox: {
            runtimeCaching: [
            {
                urlPattern: 'https://fonts.googleapis.com/.*',
                handler: 'cacheFirst',
                method: 'GET',
                strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
            },
            {
                urlPattern: 'https://fonts.gstatic.com/.*',
                handler: 'cacheFirst',
                method: 'GET',
                strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
            },
            {
                urlPattern: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/x.y.z/css/bulma.css',
                method: 'GET',
                strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
            },
            {
                urlPattern: 'https://unpkg.com/axios/dist/axios.min.js',
                handler: 'cacheFirst',
                method: 'GET',
                strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
            }
            ]
        },
        /*
        ** Allow dev tools in production
        */
        vue: {
            config: {
            productionTip: false,
            devtools: true
            }
        }
    }
}