// This file was added by xdn init.
// You should commit this file to source control.

const { Router } = require('@xdn/core/router');
const { nuxtRoutes } = require('@xdn/nuxt');

module.exports = new Router()
  .prerender([
    // HTML pages
    { path: '/' },
    { path: '/about/' },
    { path: '/docs/' },
    { path: '/docs/contrast-checker/' },
    { path: '/docs/picker/' },
    { path: '/docs/shortcuts/' },
    { path: '/download/' },
    { path: '/download/linux/' },
    { path: '/releases/' }
  ])
  .match('/service-worker.js', ({ serviceWorker }) => {
    serviceWorker('.nuxt/dist/client/service-worker.js');
  })
  // .match('/sitemap.xml', ({ serveStatic }) => {
  //   serveStatic('dist/sitemap.xml');
  // })
  .use(nuxtRoutes);
