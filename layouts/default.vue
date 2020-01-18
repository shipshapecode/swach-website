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
  font-family: 'Muli';
  src: url('/fonts/muli-variable.ttf') format('truetype');
  font-weight: 1 999;
}

html {
  background-color: #fefefe;
  font-family: Muli, 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
