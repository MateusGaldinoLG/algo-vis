import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    components: {
        dirs: ["~/components", "~/components/atom", "~/components/molecule"] // Allow atomic design
    },
    modules: [
        '@nuxtjs/tailwindcss',
    ]
})
