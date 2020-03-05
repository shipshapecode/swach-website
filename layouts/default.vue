<template>
  <div>
    <NavMenu />

    <main class="min-h-screen">
      <nuxt />
    </main>

    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue';
import NavMenu from '~/components/NavMenu.vue';

export default {
  components: {
    Footer,
    NavMenu
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap');

@font-face {
  font-family: 'Ginto Normal Trial';
  src: url('/fonts/GintoNormalTrial-Regular.woff2') format('woff2'),
    url('/fonts/GintoNormalTrial-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'GT Walsheim';
  src: url('/fonts/GTWalsheimMedium.woff2') format('woff2'),
    url('/fonts/GTWalsheimMedium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
}

html {
  background-color: #fefefe;
  font-family: 'Ginto Normal Trial', 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a,
button {
  text-decoration: none;
  transition-duration: 0.25s;
  transition-property: all;
}
</style>
