const laravelNuxt = require("laravel-nuxt");
 
module.exports = laravelNuxt({
  // Your Nuxt options here...
  head: {
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  modules: [
    // Simple usage
    'nuxt-buefy',

    // Or you can customize
    ['nuxt-buefy', { css: false }],
  ],
  plugins: [{ src: '~plugins/ga.js', mode: 'client' }]
 
  // Options such as mode, srcDir and generate.dir are already handled for you.
});