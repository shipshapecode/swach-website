/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  theme: {
    extend: {
      colors: {
        alt: '#ff0041',
        body: '#474259',
        color1: '#0b0039',
        color2: '#d2c7fd',
        'lightest-blue': '#edf7ff',
        'light-blue': '#eef7fe',
        mustard: '#ffaf14',
        peach: '#fff9f8'
      },
      fontFamily: {
        'gt-walsheim':
          "'GT Walsheim', 'Source Sans Pro', -apple-system BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
      },
      fontSize: {
        '5.5xl': '3.75rem'
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
        '140': '36rem'
      }
    }
  },
  variants: {},
  plugins: []
};
