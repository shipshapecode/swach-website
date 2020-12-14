<template>
  <div class="flex flex-wrap justify-center p-8 w-full">
    <div class="max-w-6xl w-full" data-aos="fade-up">
      <h1 class="pb-4 pt-4 text-4xl md:text-5.5xl">Releases</h1>
      <!-- eslint-disable-next-line -->
      <div class="content pb-4 pt-4" v-html="doc.html" />
    </div>
  </div>
</template>

<script>
import { generateMeta } from '~/utils/meta';

export default {
  async asyncData() {
    try {
      const doc = await import('~/content/releases.md');
      return {
        doc
      };
    } catch (error) {
      return false;
    }
  },
  head() {
    const title = 'Releases';
    const description =
      'Version history and release notes for all versions of Swach.';
    const url = 'https://swach.io/releases/';
    return generateMeta(title, description, url);
  }
};
</script>
