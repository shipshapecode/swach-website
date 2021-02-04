import { basename, resolve } from 'path';
import glob from 'glob';
import walkSync from 'walk-sync';

const markdownPaths = ['docs'];
const description = 'A robust color management tool for the modern age.';
const title = 'Swach';
const imgSrc = 'https://swach.io/img/logo.png';
const twitterUsername = '@shipshapecode';

const docRoutes = walkSync('content/docs').map((file) =>
  file.replace(/\.md$/, '')
);

export default {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - Swach',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'referrer', content: 'unsafe-url' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: title
      },
      { hid: 'og:site_name', property: 'og:site_name', content: title },
      { hid: 'og:url', property: 'og:url', content: 'https://swach.io/' },
      // Opengraph
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:image', property: 'og:image', content: imgSrc },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
      { hid: 'og:image:height', property: 'og:image:height', content: '256' },
      { hid: 'og:image:width', property: 'og:image:width', content: '256' },
      {
        hid: 'description',
        name: 'description',
        content: description
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: description
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description
      },
      // Twitter
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', name: 'twitter:site', content: twitterUsername },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: twitterUsername
      },
      { hid: 'twitter:image:src', name: 'twitter:image:src', content: imgSrc }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['aos/dist/aos.css', '@/assets/css/content.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/aos.js', mode: 'client' },
    '~plugins/filters.js',
    '~/plugins/jsonld'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@aceforth/nuxt-optimized-images',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-84561982-2'
      }
    ],
    '@nuxtjs/pwa',
    '@xdn/nuxt/module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'nuxt-font-loader-strategy',
      {
        fonts: [
          {
            fileExtensions: ['woff2'],
            fontFamily: 'Ginto Normal Trial',
            fontFaces: [
              {
                preload: true,
                localSrc: ['Ginto Normal Trial'],
                src: '@/assets/fonts/GintoNormalTrial-Regular',
                fontWeight: 'normal',
                fontStyle: 'normal'
              }
            ]
          },
          {
            fileExtensions: ['woff2'],
            fontFamily: 'GT Walsheim',
            fontFaces: [
              {
                preload: true,
                localSrc: ['GT Walsheim'],
                src: '@/assets/fonts/GTWalsheimMedium',
                fontWeight: 500,
                fontStyle: 'normal'
              }
            ]
          }
        ]
      }
    ],
    'nuxt-lazy-load',
    '@nuxtjs/sitemap'
  ],
  generate: {
    routes: dynamicMarkdownRoutes()
  },
  optimizedImages: {
    optimizeImages: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: resolve(__dirname, 'content')
      });
    },

    babel: {
      presets({ envName }) {
        const envTargets = {
          client: { browsers: 'last 2 versions, not dead, not IE 11' },
          server: { node: 'current' }
        };
        return [
          [
            '@nuxt/babel-preset-app',
            {
              corejs: { version: 3 },
              targets: envTargets[envName]
            }
          ]
        ];
      }
    }
  },
  // TODO: enable this again, when we can figure out how to whitelist
  purgeCSS: {
    enabled: false
  },
  sitemap: {
    hostname: 'https://swach.io',
    path: '/sitemap.xml',
    cacheTime: 1000 * 60 * 15,
    trailingSlash: true,
    routes: [].concat(docRoutes),
    filter({ routes }) {
      return routes.map((route) => {
        route.url = `${route.url}/`;
        return route;
      });
    }
  },
  workbox: {
    cachingExtensions: '@/plugins/workbox-range-request.js'
  }
};

function dynamicMarkdownRoutes() {
  return [].concat(
    ...markdownPaths.map((mdPath) => {
      return glob
        .sync(`${mdPath}/*.md`, { cwd: 'content' })
        .map((filepath) => `${mdPath}/${basename(filepath, '.md')}`);
    })
  );
}
