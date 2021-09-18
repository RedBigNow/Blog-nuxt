import axios from 'axios'

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'blog',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat' }
        ]
    },

    transition: {
        name: 'fade',
        mode: 'out-in'
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        { src: '~/assets/scss/main.scss', lang: 'scss' }
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~plugins/app-components.js'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
    ],

  // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // ['@nuxtjs/google-analytics', {
        //     id: 'UA-KEY'
        // }],
        // ['@nuxtjs/yandex-metrika', {
        //     id: 'KEY',
        //     webvisor: false,
        //     clickmap: true,
        //     trackLinks: true
        // }]
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        vendor: [
            'vue',
            'axios'
        ]
    },
    generate: {
        routes: function () {
            return axios.get('https://blog-nuxt-5b600-default-rtdb.firebaseio.com/posts.json')
                .then((res) => {

                    // Get ID
                    const postsArray = []
                    for (let key in res.data) {
                        postsArray.push( {...res.data[key], id: key } )
                    }

                    // Routes
                    return postsArray.map((post) => {
                        return '/blog/' + post.id
                    })

                })
        }
    }
}