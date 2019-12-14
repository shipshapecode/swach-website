<template>
  <div>
    <NavMenu />

    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import NavMenu from '~/components/NavMenu.vue';

export default {
  components: {
    NavMenu
  }
};
</script>

<style>
@font-face {
  font-family: 'Muli';
  src: url('/fonts/muli-variable.ttf') format('truetype');
  font-weight: 1 999;
}

html {
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
