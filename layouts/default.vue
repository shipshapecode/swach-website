<template>
  <div
    :class="{
      'bg-lightest-blue': this.$route.name === 'index'
    }"
  >
    <NavMenu />

    <main
      :class="{
        'bg-peach': this.$route.name === 'about'
      }"
      class="min-h-screen overflow-hidden w-screen"
    >
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

html {
  background-color: #fefefe;
  box-sizing: border-box;
  font-family: 'Ginto Normal Trial', 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  @apply text-body;
}

body {
  @apply overflow-x-hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a,
button {
  @apply duration-150 no-underline transition;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-gt-walsheim text-color1;
}
</style>
