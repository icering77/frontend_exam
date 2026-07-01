// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
    experimental: {
        asyncContext: true,
        browserDevtoolsTiming: true,
        extractAsyncDataHandlers: true,
        navigationRepaint: true,
        typescriptPlugin: true,
        viewTransition: true,
        watcher: 'parcel',
    },
    ssr: true,
});
