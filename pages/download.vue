<template>
  <nuxt-child />
</template>

<script>
import { generateMeta } from '~/utils/meta';

export default {
  head() {
    const title = 'Download';
    const description =
      'Download Swach for free for macOS, Windows, and Linux.';
    const url = 'https://swach.io/download/';
    return generateMeta(title, description, url);
  }
};
</script>
