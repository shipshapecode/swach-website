<template>
  <div>
    <!-- eslint-disable-next-line -->
    <div class="content max-w-2xl" v-html="doc.html" />
  </div>
</template>

<script>
import { generateMeta } from '~/utils/meta';

export default {
  async asyncData() {
    try {
      const doc = await import('~/content/docs/getting-started.md');
      return {
        doc
      };
    } catch (error) {
      return false;
    }
  },
  head() {
    const title = 'Getting Started - Docs';
    const description =
      "The documentation for Swach. Learn about Swach's features and shortcuts.";
    const url = 'https://swach.io/docs/';
    return generateMeta(title, description, url);
  }
};
</script>
