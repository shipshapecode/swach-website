/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        color1: '#0b0039',
        color2: '#d2c7fd',
        'lightest-blue': '#edf7ff',
        'light-blue': '#eef7fe',
        peach: '#fff9f8'
      },
      fontFamily: {
        'gt-walsheim':
          "'GT Walsheim', 'Source Sans Pro', -apple-system BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
      },
      fontSize: {
        '5.5xl': '3.75rem'
      }
    }
  },
  variants: {},
  plugins: []
};
