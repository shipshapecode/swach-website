<template>
  <div>
    <div class="flex h-20 items-center justify-center p-6 shadow w-full">
      <div class="flex font-medium items-center max-w-6xl text-2xl w-full">
        <SwachLogo class="inline h-10 mr-4 w-10" /> Swach
      </div>
    </div>

    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import SwachLogo from '~/assets/svgs/swach-dock-icon.svg?inline';

export default {
  components: {
    SwachLogo
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
</style>
